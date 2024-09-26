<?php

namespace App\Http\Controllers;
use App\Models\Payment;
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
                'amount'=>1000,
                'currency'=>'usd',
                'payment_method'=>$request->paymentMethodId,
                'confirm'=>true,
            ]);
            return response()->json(['success'=>true,'paymentIntent'=>$paymentIntent]);
            
        }
        catch(\Exception $e){
            return response()->json(['error'=>$e->getMessage()],500);
        }
    }
}
