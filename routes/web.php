<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Home route
Route::get('/', function () {
    if(Auth::user()){
        return Inertia::render('client/Home',['user'=>Auth::user()]);
    }else if(Auth::guard('admin')->check()){
        return Inertia::render('client/Home',['admin'=>Auth::guard('admin')->user()]);
    }
    return Inertia::render('client/Home');
});

// routes fot the login and register of the admin and the user 
Route::get("/adminPannel",[AdminController::class,"adminPannel"])->name("adminPannel");
Route::get("/loginAdmin",[AdminController::class,"loginAdmin"]);
Route::get("/logUser",[UserController::class,"goToLogin"]);
Route::get("/registerUser",[UserController::class,"goToRegister"]);
Route::post("/regUser",[UserController::class,"register"]);
Route::get("/logOut",[UserController::class,"logout"]);
Route::get("/loginUser",[UserController::class,"login"]);
Route::get("/registerAdmin",[AdminController::class,"goToRegister"]);
Route::post("/regAdmin",[AdminController::class,"register"]);
Route::get("/logAdmin",[AdminController::class,"goToLogin"]);

// routes for the user and the admin profile page
Route::get("/Profile",[UserController::class,"profile"]);






//create a route that fills the db with some data
Route::get('/fill', function () {
    $admin = new App\Models\admin();
    $admin->name = 'admin';
    $admin->email =  'admin';
    $admin->password = 'admin';
    $admin->save();
    $brano = new App\Models\brano();
    $brano->titolo = 'titolo';
    $brano->autore = 'autore';
    $brano->urlTrack = 'urlTrack';
    $brano->id_creator_admin = $admin->id;
    $brano->save();
    echo 'puppets data are now inserted in the db';
});

//create a route that delete the fill data from the db
Route::get('/delete', function () {
    App\Models\User::select('*')->delete();

    echo 'puppets data are now deleted from the db';
});

Route::get("/destroyAll",function(){
    App\Models\playlist::truncate();
    App\Models\brano::truncate();
    App\Models\admin::truncate();
    echo 'db is now empty';
});
