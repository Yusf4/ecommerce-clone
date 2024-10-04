<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Addresses extends Model
{  
    protected $fillable=['address_line_1','city','state','country','address_line_2','user_id'];
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class);
    }
}
