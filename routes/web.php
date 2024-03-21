<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get("/adminPannel",[AdminController::class,"adminPannel"])->name("adminPannel");
Route::get("/logAdmin",[AdminController::class,"loginAdmin"]);






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
    App\Models\playlist::select('name',"playlist")->delete();
    App\Models\brano::select('titolo',"brano")->delete();
    App\Models\admin::select('name',"admin")->delete();

    echo 'puppets data are now deleted from the db';
});

Route::get("/destroyAll",function(){
    App\Models\playlist::truncate();
    App\Models\brano::truncate();
    App\Models\admin::truncate();
    echo 'db is now empty';
});
