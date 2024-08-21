<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name'=>'youssef',
            'email'=>'youssefmazloum2017@gmail.com',
            'password'=>'123456',
            'role'=>'admin',
            'updated_at'=>now(),
            'created_at'=>now(),
        ]);
        //
    }
}
