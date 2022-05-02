<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
  public function register(Request $request){

    //the fielsds must be verified, the password should be confirmed and the confirmation field 
    //should have an id of password_confirmation
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|between:8,255|confirmed'
        ]);
    //after validation the registered user will be put into the table
        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password'])
        ]);

    // we then generate a unique token for the resgistered user

    $token =  $user->createToken($fields['email'])->plainTextToken;

    // for the user to be authenticated we need to pass his token in the response header
    
    $response = [
        'user' => $user,
        'token' => $token,
        'message' => 'Registration successfull, Login in with your credentials'
    ];

    //we return the response and the status code
    return response($response,201);
    
  }

  public function login(Request $request){

    $fields = $request->validate([
        'email' => 'required|string',
        'password' =>'required|string'
    ]);

    //get user with email
    $user = User::where('email', $fields['email'])->first();

    //check password
    if(!$user || !Hash::check($fields['password'],$user->password)){
        return response([
            'message' => 'Wrong password or email'
        ], 401);
    }

    //if all fields are valid we create a token for the user to sign in
    $token = $user->createToken($fields['email'])->plainTextToken;

    //return a response with the user and the token

    $response = [
        'user' => $user,
        'token' => $token,
        'message' => 'You are successfully logged in'
    ];
    
    return response($response, 201);
  }

  public function logout(Request $request){
    
    //logout the current login in email
    $fields = $request->validate([
        'email' => 'required|string',
    ]);
  
   //get user with email
   $user = User::where('email', $fields['email'])->first();

   //delete all tokens associated with the email and it will be logged out
   if($user){
    $user->tokens()->delete();

    return response(['message'=> 'logged out'],201);
   }

   return response(['message'=> ' user doesnot  exist']);

  }

  //get all products for current user
  public function getProducts(Request $request){
    $fields = $request->validate([
        'id' => 'required',
    ]);
      $products = User::find($fields['id'])->products;

      return $products;
  }

    //get all services for current user
    public function getServices(Request $request){
        $fields = $request->validate([
            'id' => 'required',
        ]);
          $products = User::find($fields['id'])->services;
    
          return $products;
      }
}
