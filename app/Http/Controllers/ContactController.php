<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;
class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index()
    {
        $contacts=Contact::get();
        return response()->json([
            'status'=>200,
            'message'=>'get data sucessfully',
            'data'=>$contacts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $contact=new Contact;
        $contact->create($request->all());
        $contact->delete();
        return response()->json([
            'status'=>200,
            'message'=>'data create sucessfully',
            'status'=>$contact,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $contact=Contact::find($id);
        return response()->json([
            'status'=>200,
            'message'=>'get data sucessfully',
            'status'=>$contact,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $contact=Contact::find($id);
        return response()->json([
            'status'=>200,
            'message'=>'get data sucessfully',
            'data'=>$contact,
        ]);
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
        $contact=Contact::find($id);
        $contact->update($request->all());
        return response()->json([
            'status'=>200,
            'message'=>'data create sucessfully',
            'status'=>$contact,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact=Contact::find($id);
        $contact->delete();
        return response()->json([
            'status'=>200,
            'message'=>'data delete sucessfully',
            'status'=>$contact,
        ]);
    }
}
