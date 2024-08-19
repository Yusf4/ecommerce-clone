<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('products')->insert([
            [
                'name' => 'Sample Product 1',
                'description' => 'Description for product 1',
                'price' => 29.99,
                'stock' => 100,
                'image' => NULL,
                'category_id' => 1, // Make sure this category exists
                'created_at' => now(),
                'updated_at' => now(),

             
            ],
            [
                'name' => 'Sample Product 2',
                'description' => 'Description for product 2',
                'price' => 49.99,
                'stock' => 50,
                'image' => NULL,
                'category_id' => 2, // Make sure this category exists
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more sample products as needed
        ]);
    }
}
