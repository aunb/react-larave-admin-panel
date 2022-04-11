<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);

// Route::middleware('auth:api')->group( function () {
    Route::resource('contacts', App\Http\Controllers\ContactController::class);
    Route::resource('post', App\Http\Controllers\PostController::class);
    Route::post('post_update', [App\Http\Controllers\PostController::class,'post_update']);
    Route::post('search_posts', [App\Http\Controllers\PostController::class,'search_posts']);
    Route::post('pagination', [App\Http\Controllers\PostController::class,'paginationPost']);
// });

// Route::post('login', function (Request $request) {
//     $userdata = array(
//         'email'     => $request->email,
//         'password'  => $request->password
//     );

//     // attempt to do the login
//     if (Auth::attempt($userdata)) {
//              return response()->json([
//             'data' =>Auth::user() ,
//             'success' => 'Login Successfully',
//             'code' => 200,
//         ], 200);
//     }

//     return response()->json([
//         'data' => null,
//         'error' => 'Unauthenticated user',
//         'code' => 401,
//     ], 200);
// });
