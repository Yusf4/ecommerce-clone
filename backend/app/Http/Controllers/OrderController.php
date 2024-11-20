<?php

namespace App\Http\Controllers;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;

class OrderController extends Controller
{


public function createOrder(Request $request)
{
    // Validate the incoming request
    $validated = $request->validate([
        'address_id' => 'required|exists:addresses,id',
        'totalPrice' => 'required|numeric|min:0',
        'bag' => 'required|array',
        'bag.*.product.id' => 'required|exists:products,id',
        'bag.*.quantity' => 'required|integer|min:1',
    ]);

    DB::beginTransaction();

    try {
        // Create the order
        $order = Order::create([
            'user_id' => Auth::id(),
            'address_id' => $validated['address_id'],
            'total' => $validated['totalPrice'],
            'status' => 'pending',
        ]);

        // Process the bag items
        foreach ($validated['bag'] as $item) {
            $product = Product::find($item['product']['id']);

            if ($product->stock < $item['quantity']) {
                DB::rollBack();
                return response()->json([
                    'message' => "Insufficient stock for product: {$product->name}"
                ], 400);
            }

            // Attach product to order with quantity and price
            $order->products()->attach($product->id, [
                'quantity' => $item['quantity'],
                'price' => $product->price,
            ]);

            // Update product stock
            $product->stock -= $item['quantity'];
            $product->save();
        }

        // Commit the transaction
        DB::commit();

        // Return the created order ID
        return response()->json(['order_id' => $order->id], 201);

    } catch (\Exception $e) {
        // Rollback transaction in case of error
        DB::rollBack();

        return response()->json([
            'message' => 'Failed to create order',
            'error' => $e->getMessage(),
        ], 500);
    }
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
