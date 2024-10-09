<?php

namespace App\Http\Controllers;
use App\Models\Order;
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
            $request->validate([
                'order_id' => 'required|exists:orders,id', // Ensure the order exists
                'amount' => 'required|integer|min:1', // Ensure amount is valid
                'paymentMethodId' => 'required|string', // Ensure payment method is valid
            ]);
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
            if($paymentIntent->status==='succeeded'){
                $order=Order::find($request->order_id);
                $order->status='completed';
                $order->save();
                return response()->json(['success'=>true,'paymentIntent'=>$paymentIntent],201);
            }
          
           return response()->json(['success'=>false,'message'=>'Payment failed or requires further action.'],400); 
        }
        catch (\Stripe\Exception\CardException $e) {
            // Handle card errors
            \Log::error('Stripe Card Error: ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 400);
        }
        catch(\Exception $e){

            \Log::error('Payment Error:'.$e->getMessage());
            return response()->json(['error'=>$e->getMessage()],500);
        }
    }
}
