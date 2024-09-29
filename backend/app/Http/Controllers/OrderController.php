<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;

class OrderController extends Controller
{

    public function createOrder(Request $request){
        $order=Order::create([
            'user_id'=>$request->user_id,//Auth::id(),
            'total'=>$request->total,
            'status'=>'pending',
        ]); 
        foreach($request->bag as $item){
            $product=Product::find($item['id']);
            if($product){
               $order->products()->attach($product->id,[
                'quantity'=>$item['quantity'],
                'price'=>$product->price,
            ]);  
            }
           
        }
        return response()->json(['order_id'=>$order->id]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
