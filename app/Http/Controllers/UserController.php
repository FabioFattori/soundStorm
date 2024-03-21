<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function goToLogin()
    {
        return Inertia::render('LoginUser');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ], [
            'email.required' => 'Email is required',
            'email.email' => 'Email is not valid',
            'password.required' => 'Password is required',
        ]);
        if (Auth::attempt($request->only('email', 'password'))) {
            $request->session()->regenerate();
            return Inertia::render('UserProfile', ['user' => Auth::user()])->with('success', 'You are now logged in.');
        }
        return Inertia::render('LoginUser', ['error' => 'The provided credentials do not match our records, maybe try to register.']);
    }

    public function logout()
    {
        if (Auth::user()) {
            Auth::logout();
            return redirect('/')->with('success', 'You are now logged out.');
        } else if (Auth::guard('admin')->check()) {
            Auth::guard('admin')->logout();
            return redirect('/')->with('success', 'You are now logged out.');
        }
    }

    public function goToRegister()
    {
        return Inertia::render('UserRegister');
    }

    public function profile()
    {
        if (Auth::user()) {
            return Inertia::render('UserProfile', ['user' => Auth::user()]);
        } else if (Auth::guard('admin')->check()) {
            return Inertia::render('AdminProfile', ['admin' => Auth::guard('admin')->user()]);
        } else {
            return Inertia::render('UserRegister');
        }
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $user = \App\Models\User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);
        Auth::login($user);
        return Inertia::render('UserProfile', ['user' => Auth::user()])->with('success', 'You are now logged in.');
    }

}
