<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
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

    $token =  $user->createToken('usertoken')->plainTextToken;

    // for the user to be authenticated we need to pass his token in the response header
    
    $response = [
        'user' => $user,
        'token' => $token
    ];

    //we return the response and the status code
    return response($response,201);
    
  }
}
