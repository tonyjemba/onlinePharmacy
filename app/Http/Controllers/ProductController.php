<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        //request details
        $requestDetails = [];

        //get the product details from the request and push them into the request details array
        foreach ($request->all() as $key => $value) {
            $requestDetails[$key] = $value;
        }
       
        //save the product image in storage and return its path then generate a url from the path
        $productImageFile = $request->file('productImage');
        $productImagePath = $productImageFile->store('public/product_images');
        $productImageUrl = Storage::url($productImagePath);

        //store the product details in the database
        Product::create([
            'product_name' => $requestDetails['product_name'],
            'Pharmacy_name' => $requestDetails['Pharmacy_name'] ,
            'location' => $requestDetails['location'],
            'price' => $requestDetails['price'] ,
            'disease' => $requestDetails['disease'] ,
            'descprition' => $requestDetails['descprition'],
            'contact' => $requestDetails['contact'],
            'image_url' => $productImageUrl,
            'user_id' => $requestDetails['user_id'],
        ]);

        return response()->json('success');   
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

        $product->update($request->all());

        return $product;
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

    public function search($name)
    {
        //ilike the i is for case insesitivity
        $product = Product::where('product_name', 'ilike', '%' . $name . '%')->orWhere('descprition', 'ilike', '%' . $name . '%')->get();

        return $product;
    }
}
