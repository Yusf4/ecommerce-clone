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
        $id=$request->id;
        $user=User::find($id);
        if($user){
            $user->delete();
            return response()->json(['message'=>'User deleted successfully']);

        }
        else{
            return response()->json(['message'=>'User not found']);
        }

       
    }
    public function deleteOrder(Request $request){
      $id= $request->id;
     $order=Order::find($id);
     if($order){
        $order->delete();
        return response()->json(['message'=>'order delete successfully']);
     }
     else{
        return response()->json(['message'=>'order not found']);
     }
    }
    public function changeRole(Request $request){
        $id=$request->id;
        $user=User::find($id);
        $user->role=$request->role;
        $user->save();
        return response()->json(['message'=>'User role Updated successfully','user'=>$user]);
    }

}
