<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Auth;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\Post as ProductResource;
class PostController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
   
    public function index()
    {
        // if (Auth::check()) {
            $countposts=Post::count();
            $posts=Post::get();
            // return $this->sendResponse(ProductResource::collection($posts), 'Products retrieved successfully.');                   
        // }
        // else{
        //     return 'fail';
        // }
        return response()->json([
            'status'=>200,
            'message'=>'data create sucessfully',
            'data'=>$posts,
            'countposts'=>$countposts,
        ]);
    }

    public function search_posts(Request $request)
    {
        // if (Auth::check()) {
            $countposts=Post::where('title', 'LIKE', '%' . $request->search . '%')->count();
            if(!empty($request->search))
            {
                $post_per_page=2;
                $posts=Post::where('title', 'LIKE', '%' . $request->search . '%')->get()->take($post_per_page);
            }
            else{
                $posts=Post::get();
            }
            // return $this->sendResponse(ProductResource::collection($posts), 'Products retrieved successfully.');                   
        // }
        // else{
        //     return 'fail';
        // }
        return response()->json([
            'status'=>200,
            'message'=>'data create sucessfully',
            'data'=>$posts,
            'countposts'=>$countposts,
        ]);
    }

    public function paginationPost(Request $request)
    {
        // if (Auth::check()) {
            $countposts=Post::where('title', 'LIKE', '%' . $request->search . '%')->count();
            if(!empty($request->page_id))
            {
                $post_per_page=$request->page_id*2;
                $posts=Post::where('title', 'LIKE', '%' . $request->search . '%')->get()->take($post_per_page);
            }
            else{
                $posts=Post::get();
            }
            // return $this->sendResponse(ProductResource::collection($posts), 'Products retrieved successfully.');                   
        // }
        // else{
        //     return 'fail';
        // }
        return response()->json([
            'status'=>200,
            'message'=>'data create sucessfully',
            'data'=>$posts,
            'countposts'=>$countposts,
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
        $post=new Post;
        $post->title=$request->title;
        $post->description=$request->description;
        
        $imageName = time().'.'.$request->image->extension();  
        $request->image->move(public_path('images'), $imageName);
        $post->image=$imageName;
       
        $post->save();
    
        return response()->json([
            'status'=>200,
            'message'=>'data create sucessfully',
            'status'=>$post,
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $post=Post::find($id);
        return response()->json([
            'status'=>200,
            'message'=>'get data sucessfully',
            'data'=>$post,
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
        $post=Post::find($id);
        $post->title=$request->title;
        $post->description=$request->description;
        dd($request->post_id);
        $imageName = time().'.'.$request->image->extension();  
        $request->image->move(public_path('images'), $imageName);
        $post->image=$imageName;
       
        $post->save();
        return response()->json([
            'status'=>200,
            'message'=>'data update sucessfully',
            'status'=>$post,
        ]);
    }

    public function post_update(Request $request)
    {    
        
        $post=Post::find($request->post_id); 
        $post->title=$request->title;
        $post->description=$request->description;

        $imageName = time().'.'.$request->image->extension();  
        $request->image->move(public_path('images'), $imageName);
        $post->image=$imageName;
        
        $post->save();
        return response()->json([
            'status'=>200,
            'message'=>'data update sucessfully',
            'status'=>$post,
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
        $post=Post::find($id);
        unlink(public_path('images/').$post->image);
        return response()->json([
            'status'=>200,
            'message'=>'data delete sucessfully',
            'status'=>$post,
        ]);
    }
}
