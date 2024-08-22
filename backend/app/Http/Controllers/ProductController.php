<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $products=Product::all();
        return response()->json($products);

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
        $validatedData=$request->$validate([
            'name'=>'required|string|max:255',
            'description'=>'nullable|string',
            'price'=>'required|numeric',
            'stock'=>'required|integer',
            'image'=>'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category_id'=>'required|exists:categories,id',
        ]);

        $data=$request->all();
        if ($request->hasFile('image')){
            $imagePath=$request->file('image')->store('images','public');
            $data['image']=$imagePath;

        }
        $product=Product::create($data);
        return response()->json($product,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product=Product::with('category')->find($id);
        if(!$product){
            return response()->json(['message'=>'product not found']);
        }
        //
        return response()->json($product);

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
    public function update(Request $request, $id)
    {
        //
        $product=$Product::find($id);
        if(!$product){
            return response()->json(['message'=>'proudct not found']);
        }
        $request->validate([
           'name' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'sometimes|required|numeric',
            'stock' => 'sometimes|required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'category_id' => 'sometimes|required|exists:categories,id',
            
        ]);
        $data=$request->all();
        if($request->hasFile('image')){
            if($product->image && Storage::exist('public/' .$product->image)){
                Storage::delete('public/' . $product->image);
            }
            $imagePath=$request->file('image')->store('images','public');
            $data['image']=$imagePath;
        }
        $product->update($data);
        return response()->json($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    
    {
        //
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        if($product->image && Storage::exists('public/'. $product->image)){
        Storage::delete('public/'. $product->image);
    }
$product->delete();
return response->json(['message'=>'product deleted']);
    }
}

