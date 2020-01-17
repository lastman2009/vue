<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Food;

class FoodController extends Controller
{

	public function store(Request $request){
		Food::create($request->data);
		$foods =Food::where('status',1)->get();
		return response()->json(['message' => "Food Saved",'code' => 200 ,'foods' =>$foods]);
	}

	public function getdata(){
		$foods =Food::where('status',1)->get();
		return response()->json(['code' => 200 ,'foods' =>$foods]);
	}
}
