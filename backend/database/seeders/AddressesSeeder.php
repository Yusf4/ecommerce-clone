<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facade;
class AddressesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('addresses')->insert([
           'user_id'=>1,
            'address_line_1'=>'tripoli',
            'city'=>'tripoli',
            'state'=>'tripoli',
            'country'=>'lebanon',
            'zip_code'=>'1234',
        ]);
       
    }
}
