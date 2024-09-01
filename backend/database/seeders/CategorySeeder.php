<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('categories')->insert([
            [
            'name'=>'women',
            'description'=>'desc null',
            'image'=>'images/womenclothescat.jpg',
             'created_at'=>now(),
             'updated_at'=>now(),

        ],
    [
        'name'=>'men',
        'description'=>'clothes',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    ]);
        
    }

}
