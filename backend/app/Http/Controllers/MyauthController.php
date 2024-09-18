<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Http\Request;

class MyauthController extends Controller
{
    //
 /*  public function testRegister(Request $request){
      $request=new Request([
         'name'=>'john test',
         'email'=>'johntest@gmail.com',
         'password'=>'securePassword',
      ]);
     
    
      return $this->register($request);
    }*/

    public function login(Request $request){
      $request->validate([
         'email' => 'required|string|email',
         'password' => 'required|string',
     ]);
   
     // Attempt to authenticate the user using the given credentials
     $credentials = $request->only('email', 'password');
   
     if (!Auth::attempt($credentials)) {
         return response()->json(['error' => 'The provided credentials are incorrect.'], 401);
     }
   
     // If successful, generate a token and return the user data
     $user = Auth::user();
     $token = $user->createToken('authToken')->plainTextToken;
   
     return response()->json(['message' => 'Login successful', 'token' => $token, 'user' => $user]);
   
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

    public function user(Request $request){
      return $request->user();
    }
 
public function logout(Request $request)
{
$user = $request->user();

if (!$user) {
    return response()->json(['error' => 'No authenticated user found'], 401);
}

// Revoke the token
$user->currentAccessToken()->delete();

return response()->json([
    'message' => 'Logged out successfully'
]);
} 
}