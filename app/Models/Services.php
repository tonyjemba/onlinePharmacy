<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    use HasFactory;
    protected $fillable = [
        'service_name',
        'Pharmacy_name',
        'location',
        'price',
        'disease',
        'descprition',
        'contact',
        'image_url',
        'user_id'
    ];
}
