<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Models\Product;

class DebuggingController extends Controller
{
    //
    public function creating(){
        $client=new Client();
        try{

   $response=$client->get('http://localhost:1337/api/blogs');
 $data=json_decode($response->getBody()->getContents(),true);
        return response()->json(['data'=>$data]);
        }
        catch(\Exception  $e){

            return response()->json(['error'=>$e->getMessage()],500);
           }
}
}
