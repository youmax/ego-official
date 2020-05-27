<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{

    public function __invoke()
    {
        return Inertia::render('Home/Index');
    }

    public function index()
    {
        Inertia::share('banner', Storage::url('banner1.jpg'));
        return Inertia::render('Home/Index');
    }

    public function contact()
    {
        return Inertia::render('Home/Contact');
    }
}
