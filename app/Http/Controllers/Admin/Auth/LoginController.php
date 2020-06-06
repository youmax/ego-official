<?php

namespace App\Http\Controllers\Admin\Auth;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Admin\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
     */

    use AuthenticatesUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        return view('login.admin');
    }

    protected function authenticated(Request $request, $user)
    {
        // dd($user);
    }

    protected function loggedOut(Request $request)
    {
        return InertiaHardVisit(route('admin.login'));
    }

    public function redirectPath()
    {
        return route('admin.home');
    }

    protected function guard()
    {
        return Auth::guard('admin');
    }
}
