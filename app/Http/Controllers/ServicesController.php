<?php

namespace App\Http\Controllers;

use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ServicesController extends Controller
{
      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Services::all();
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

        //get the service details from the request and push them into the request details array
        foreach ($request->all() as $key => $value) {
            $requestDetails[$key] = $value;
        }

        //save the service image in storage and return its path then generate a url from the path
        $serviceImageFile = $request->file('serviceImage');
        $serviceImagePath = $serviceImageFile->store('public/service_images');
        $serviceImageUrl = Storage::url($serviceImagePath);

        //store the service details in the database
        Services::create([
            'service_name' => $requestDetails['service_name'],
            'Pharmacy_name' => $requestDetails['Pharmacy_name'],
            'location' => $requestDetails['location'],
            'price' => $requestDetails['price'],
            'disease' => $requestDetails['disease'],
            'descprition' => $requestDetails['descprition'],
            'contact' => $requestDetails['contact'],
            'image_url' => $serviceImageUrl,
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
        return Services::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateService(Request $request)
    {
        //request details
        $requestDetails = [];

        //get the product details from the request and push them into the request details array
        foreach ($request->all() as $key => $value) {
            $requestDetails[$key] = $value;
        }
        $product = Services::find($requestDetails['id']);

        $product->service_name = $requestDetails['service_name'];
        $product->Pharmacy_name = $requestDetails['Pharmacy_name'];
        $product->location = $requestDetails['location'];
        $product->price = $requestDetails['price'];
        $product->disease = $requestDetails['disease'];
        $product->descprition = $requestDetails['descprition'];
        $product->contact = $requestDetails['contact'];
        $product->image_url = $requestDetails['image_url'];

        if ($requestDetails["productImage"] != "null") {
            //save the new product image in storage and return its path then generate a url from the path
            $productImageFile = $request->file('productImage');
            $productImagePath = $productImageFile->store('public/service_images');
            $productImageUrl = Storage::url($productImagePath);
            $product->image_url = $productImageUrl;
        }
        $product->save();



        return response()->json($request);
    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Services::destroy($id);
    }

    /*
    search for a specific product
    */

    public function search($name){
        
         //ilike the i is for case insesitivity
        $Service = Services::where('service_name','LIKE','%'.$name.'%')
        ->orWhere('descprition', 'LIKE', '%'.$name.'%')->get()
            ->orWhere('Pharmacy_name', 'LIKE', '%'.$name.'%')
            ->orWhere('disease', 'LIKE', '%'.$name.'%')
            ->orWhere('location', 'LIKE', '%'.$name.'%')
            ->orWhere('contact', 'LIKE', '%'.$name.'%');

        return $Service;
    }
}
