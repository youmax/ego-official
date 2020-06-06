<?php

namespace App\Http\Controllers\Admin;

use Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{

    public function index()
    {
        // dd(Auth::user());
        return Inertia::render('Index');
    }
}
