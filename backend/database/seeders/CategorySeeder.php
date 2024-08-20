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
            'name'=>'accessories',
            'description'=>'desc null',
             'created_at'=>now(),
             'updated_at'=>now(),

        ],
    [
        'name'=>'jeans',
        'description'=>'clothes',
        'created_at'=>now(),
        'updated_at'=>now(),

    ]);
        
    }

}
