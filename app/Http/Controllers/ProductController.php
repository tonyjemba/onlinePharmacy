<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_name' => 'required',
            'Pharmacy_name' => 'required',
            'location' => 'required',
            'price' => 'required',
            'disease' => 'required',
            'descprition' => 'required',
            'contact' => 'required',
            'image_url' => 'required',
            'user_id' => 'required|exists:users,id'
        ]);

        return Product::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Product::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $product = Product::find($id);

        $product->product_name = $request->product_name;
        $product->Pharmacy_name = $request->Pharmacy_name;
        $product->location = $request->location;
        $product->price = $request->price;
        $product->disease = $request->disease;
        $product->descprition = $request->descprition;
        $product->contact = $request->contact;
        $product->image_url = $request->image_url;
        $product->user_id = $request->user_id;

        $product->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Product::destroy($id);
    }

    /*
    search for a specific product
    */

    public function search($name){

        $product = Product::where('product_name','like','%'.$name.'%');

        return $product;
    }
}
