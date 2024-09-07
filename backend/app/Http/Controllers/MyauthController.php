<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


use App\Models\User;
use Illuminate\Http\Request;

class MyauthController extends Controller
{
    //
   public function testRegister(Request $request){
      $request=new Request([
         'name'=>'john test',
         'email'=>'johntest@gmail.com',
         'password'=>'securePassword',
      ]);
     
      return $this->register($request);
    }
    public function register(Request $request){
      //dd($request->all());
      
        $validator=Validator::make($request->all(),[
        'name'=>'required|string|max:255',
        'email'=>'required|string|email|max:255|unique:users',
        'password'=>'required|string|min:8',
       'role'=>$request->role?? 'customer',
    ]);
       if($validator->fails()){
        return response()->json(['errors'=>$validator->errors()],422);
       }
       $user=User::create([
        'name'=>$request->name,
        'email'=>$request->email,
        'password'=>Hash::make($request->password),
       ]);
       return response()->json(['message'=>'user registered successfully','user'=>$user]);
    }
    public function login(Request $request){
      $request->validate([
         'email'=>'required|string|email',
         'password'=>'required|string',
      ]);
      if(!Auth::attempt($request->only('email','password'))){
         throw ValidationException::withMessages([
            'email'=>['the provided credentials are incorrect.'],
         ]);
         
      }
      return response()->json(['message'=>'login successfully','user'=>Auth::user()]);


    }
    public function user(Request $request){
      return $request->user();
    }
    public function logout(Request $request){
      $request->user()->tokens()->delete();
      return response()->json(['message'=>'logged out successfully']);
    }
        

    }
    
