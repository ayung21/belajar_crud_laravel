<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Jobs\ProcessImageThumbnails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
// use Dotenv\Validator;

class ImageController extends Controller
{
    //
    public function index(Request $request){
        return view('upload_form');
    }

    public function upload(Request $request){
        // uplaod image
        $this->validate($request, [
            'demo_image'    => 'required|image|mimes:jpeg,png,jpg,giv,svg|max:2048'
        ]);
        $image = $request->file('demo_image');
        $input['demo_image'] = time().'.'.$image->getClientOriginalExtension();
        $destinationPath = public_path('/images');
        $image->move($destinationPath, $input['demo_image']);

        // make db entry of that image
        $image = new Image;
        $image->org_path = 'images'. DIRECTORY_SEPARATOR . $input['demo_image'];
        $image->save();

        // ProcessImageThumbnails::dispatch($image);
        dispatch(new ProcessImageThumbnails($image));

        return Redirect::to('image/index')->with('message', 'Image upload successfully!!');
    }
}
