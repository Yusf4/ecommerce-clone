<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class);
    }
    public funcion payment(){
        return $this->hasOne(Payment::class);
    }
    public function product(){
        return $this->belongsToMany(Product::class)->withPivot('quantity','price');
    }
}
