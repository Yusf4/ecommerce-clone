<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class DashboardController extends Controller
{
    //

    public function show(Request $request){
       
       $users=User::all();
       return response()->json(['users'=>$users]);
        
    }
    public function showOrders(Request $request){
       $id=$request->id;
    $orders=Order::where('user_id',$id)->get();
    if($orders->isEmpty()){
        return response()->json(['message'=>'No orders found for this user'],404);
    }
    return response()->json($orders,200);
}
    public function deleteUser(Request $request){
       
    }
    public function deleteOrder(Request $request){

    }

}
