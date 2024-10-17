<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {  $client=new Client();
        $strapiBaseUrl = 'http://localhost:1337';
        $response=$client->get('http://localhost:1337/api/categories?populate=image');
      $data=json_decode($response->getBody()->getContents(),true);
      if(isset($data['data'])){
        foreach($data['data'] as $categoryData){
        $existingCategory=Category::where('name',$categoryData['name'])->first();
        $imageUrl=null;
        if(!$existingCategory){
            $imageUrl = $categoryData['image']['formats']['small']['url'] ?? $categoryData['image']['url'] ?? null;

            
            $imageUrl = null;
            if (!empty($categoryData['image'])) {
                $imageUrl = $categoryData['image'][0]['url'] ?? null;
                if ($imageUrl) {
                    $imageUrl = $strapiBaseUrl . $imageUrl;
                }
            }
           
            Category::create([
                'id'=>$categoryData['id'],
                'name'=>$categoryData['name'],
                'description'=>$categoryData['description']?? 'No description available',
                'image'=>$imageUrl,
               // 'category_id'=>$productData['category_id']  ?? 1,
            ]);
        }
      
    }
}
    else{
        echo "No Cateogry found in Strapi Api";
    }
        


        //
     /*   DB::table('categories')->insert([
            [
            'name'=>'women',
            'description'=>'clothes & Acessories',
            'image'=>'images/womenclothescat.jpg',
             'created_at'=>now(),
             'updated_at'=>now(),

        ],
    [
        'name'=>'men',
        'description'=>'clothes & Acessories',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'men',
        'description'=>'clothes & Acessories',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Kids Clothing',
        'description'=>'clothes & Acessories',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'shoes',
        'description'=>'clothes & Acessories',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Bags & Accessories',
        'description'=>'clothes & Acessories',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Jewelry & Watches',
        'description'=>'clothes & Acessories',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]

    [
        'name'=>'Smartphones & Tablets',
        'description'=>'Electronics',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Laptops & Computers',
        'description'=>'Electronics',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Audio & Headphones',
        'description'=>'Electronics',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Cameras & Photography',
        'description'=>'Electronics',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Smartwatches & Wearables',
        'description'=>'Electronics',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]


    [
        'name'=>'Home Appliances',
        'description'=>'Electronics',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Jewelry & Watches',
        'description'=>'clothes',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Jewelry & Watches',
        'description'=>'clothes',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Jewelry & Watches',
        'description'=>'clothes',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]  
    [
        'name'=>'Jewelry & Watches',
        'description'=>'clothes',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]

    [
        'name'=>'Jewelry & Watches',
        'description'=>'clothes',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]  
    [
        'name'=>'Jewelry & Watches',
        'description'=>'clothes',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Jewelry & Watches',
        'description'=>'clothes',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Jewelry & Watches',
        'description'=>'clothes',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Jewelry & Watches',
        'description'=>'clothes',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    [
        'name'=>'Jewelry & Watches',
        'description'=>'clothes',
        'image'=>'images/menclothescat.jpg',
        'created_at' =>now(),
        'updated_at' =>now(),
    ]
    ]);*/
        
    }

}
