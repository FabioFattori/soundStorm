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
   
       // Authentication failed, return an error response
       return response()->json(['error' => 'Invalid credentials'], 401);
    }

    function adminPannel(){
           
        
            if (Auth::guard('admin')->check()) {
                return Inertia::render('PannelloAdmin',['admin'=>Auth::guard('admin')->user()]);
            } else {
                return Inertia::render('LoginAdmin');
            }
        
    }

    public function logout(){
        Auth::guard('admin')->logout();
        return redirect('/')->with('success','You are now logged out.');
    }

    public function goToRegister(){
        return Inertia::render('AdminRegister');
    }

    public function goToLogin(){
        return Inertia::render('LoginAdmin');
    }

    public function register(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $admin = admin::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);
        Auth::guard('admin')->login($admin);
        return Inertia::render('PannelloAdmin',['admin'=>Auth::guard('admin')->user()])->with('success','You are now logged in.');
    }
}
