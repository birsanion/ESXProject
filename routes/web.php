<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Settings\ProfileController;

Route::middleware('auth')->group(function () {
    Route::redirect('/', 'about');
    Route::get('about', [ProfileController::class, 'show'])->name('about');
});

require __DIR__.'/auth.php';
