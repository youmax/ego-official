<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Admin\Controller;
use App\Models\User;
use Auth;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

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

    protected function validateLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|string|exists:users',
            'password' => 'required|string',
        ]);
    }

    protected function sendFailedLoginResponse(Request $request)
    {
        throw ValidationException::withMessages([
            'password' => [trans('auth.failed')],
        ]);
    }

    protected function attemptLogin(Request $request)
    {
        $user = User::role('admin')->where([
            'email' => $request->email,
        ])->first();

        if (!$user) {
            throw ValidationException::withMessages([
                'permission' => ['you don\'t have permissions.'],
            ]);
        }

        if (!Hash::check($request->password, $user->password)) {
            return false;
        }

        Auth::login($user);
        return true;
    }

    protected function loggedOut(Request $request)
    {
        return InertiaHardVisit(route('admin.login'));
    }

    public function redirectPath()
    {
        return route('admin.home');
    }
}
