<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('orders')->insert([
            'total'=>20.99,
            'user_id'=>1,
            'updated_at'=>now(),
            'created_at'=>now()
        ]);
    }
}
