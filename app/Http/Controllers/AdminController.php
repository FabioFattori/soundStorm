<?php

namespace App\Http\Controllers;

use App\Models\admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class AdminController extends Controller
{
    function loginAdmin(Request $request){
        $credentials = $request->only('email', 'password');
        
        if (Auth::guard('admin')->attempt($credentials)) {
            $request->session()->regenerate();
    
            return redirect()->route('adminPannel', ['admin'=>Auth::guard('admin')->user()]);
        }
   
        // respond with error message and do not reload the page
        return Inertia::render('admin/LoginAdmin')->with('error','The credentials do not match our records , maybe you are not an admin.');
    }

    function adminPannel(){
           
        
            if (Auth::guard('admin')->check()) {
                return Inertia::render('admin/PannelloAdmin',['admin'=>Auth::guard('admin')->user()]);
            } else {
                return Inertia::render('admin/LoginAdmin');
            }
        
    }

    public function logout(){
        Auth::guard('admin')->logout();
        return redirect('/')->with('success','You are now logged out.');
    }

    public function goToRegister(){
        return Inertia::render('admin/AdminRegister');
    }

    public function goToLogin(){
        return Inertia::render('admin/LoginAdmin');
    }

    public function register(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ],[
            'name.required' => 'Name is required',
            'email.required' => 'Email is required',
            'email.email' => 'Email is not valid',
            'password.required' => 'Password is required',
        ]);
        $admin = admin::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);
        Auth::guard('admin')->login($admin);
        return Inertia::render('admin/PannelloAdmin',['admin'=>Auth::guard('admin')->user()])->with('success','You are now logged in.');
    }
}
