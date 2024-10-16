<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Models\Product;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //  
     /*$client=new Client();
     $cacheKey='product_images_cache';
     
     $strapiBaseUrl = 'http://localhost:1337';
   $response=$client->get('http://localhost:1337/api/products?populate=image');
 $data=json_decode($response->getBody()->getContents(),true);
        if(isset($data['data'])){
        foreach($data['data'] as $productData){
        $existingProduct=Product::where('name',$productData['name'])->first();
        $imageUrl=null;
        if(!$existingProduct){
            $imageUrl = $productData['image']['formats']['small']['url'] ?? $productData['image']['url'] ?? null;

            
            $imageUrl = null;
            if (!empty($productData['image'])) {
                $imageUrl = $productData['image'][0]['url'] ?? null;
                if ($imageUrl) {
                    $imageUrl = $strapiBaseUrl . $imageUrl;
                }
            }
           
            Product::create([
                'name'=>$productData['name'],
                'description'=>$productData['description']?? 'No description available',
                'price'=>$productData['price']?? 0,
                'stock'=>$productData['stock'] ?? 0,
                'image'=>$imageUrl,
                'category_id'=>$productData['category_id']  ?? 1,
            ]);
        }
      
    }
}
    else{
        echo "No products found in Strapi Api";
    }*/
        

  




       /* DB::table('products')->insert([
            [
                'name' => 'Sample Product 1',
                'description' => 'Description for product 1',
                'price' => 29.99,
                'stock' => 100,
                'image' => 'images/watches1.jpg',
                'category_id' => 1, 
                'created_at' => now(),
                'updated_at' => now(),

             
            ],
            [
                'name' => 'Sample Product 2',
                'description' => 'Description for product 2',
                'price' => 49.99,
                'stock' => 50,
                'image' => 'images/watches2.jpg',
                'category_id' => 2, // Make sure this category exists
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more sample products as needed
        ]);*/
    }
}
