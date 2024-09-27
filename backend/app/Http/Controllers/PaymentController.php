<?php

namespace App\Http\Controllers;
use App\Models\Payments;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class PaymentController extends Controller
{
    //
    public function createPayment(Request $request){
        Stripe::setApiKey(env('STRIPE_SECRET'));
            
        try{
            $paymentIntent=PaymentIntent::create([
                'amount'=>$request->amount,
                'currency'=>'usd',
                'description'=>'Payment for order #',
                'payment_method'=>$request->paymentMethodId,
                'confirm'=>true,
                  'return_url' => 'http://127.0.0.1:8000/',
            ]);
            Payments::create([
                'order_id'=>$request->order_id,
                'payment_method'=>'stripe',
                'amount'=>$paymentIntent->amount,
                'status'=>$paymentIntent->status,
            ]);
            return response()->json(['success'=>true,'paymentIntent'=>$paymentIntent]);
            
        }
        catch(\Exception $e){
            return response()->json(['error'=>$e->getMessage()],500);
        }
    }
}
