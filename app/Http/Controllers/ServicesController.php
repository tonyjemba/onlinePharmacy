<?php

namespace App\Http\Controllers;

use App\Models\Services;
use Illuminate\Http\Request;

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
        $request->validate([
            'service_name' => 'required',
            'Pharmacy_name' => 'required',
            'location' => 'required',
            'price' => 'required',
            'disease' => 'required',
            'descprition' => 'required',
            'contact' => 'required',
            'image_url' => 'required'
        ]);

        return Services::create($request->all());
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
    public function update(Request $request, $id)
    {
        $service = Services::find($id);

        $service->update($request->all());

        return $service;
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

        $Service = Services::where('service_name','like','%'.$name.'%');

        return $Service;
    }
}
