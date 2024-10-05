<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Addresses;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AddressController extends Controller
{
    //
    public function createAddress(Request $request){
       try{
      
        $address=Addresses::create([
            'user_id'=>Auth::id(),
            'address_line_1'=>$request->addressLine1,
            'address_line_2'=>$request->addressLine2,
            'city'=>$request->city,
            'state'=>$request->state,
            'country'=>$request->country,
            
        ]) ;
        return response()->json(['success'=>true,'address'=>$address,'address_id'=>$address->id]);
       }
       catch(\Exception  $e){

        return response()->json(['error'=>$e->getMessage()],500);
       }
      
    }
 
}
