<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\MasterBarang;
use App\Models\Barang;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function listBarang()
    {
        return view('list-barang-toko', [
            // 'data'   => MasterBarang::join('barang', 'fk_barang', '=', 'barang.id')->get(),
            'data' => Barang::all()
        ]);
        // return route('login');
    }

    public function prosesCreateBarang(Request $request){
        $total = Barang::count();
        // $barang = Barang::create([
        //     'id_barang'   => $total+1,
        //     'nama_barang' => $request->barang
        // ]);
        $barang = new Barang();

        $barang->id_barang = $total+1;
        $barang->nama_barang = $request->barang;

        $barang->save();

        return redirect('/listbarang');
    }

    public function prosesUpdateBarang(Request $request){
        // $barang = Barang::where('id_barang' ,$request->id_barang)->update(['nama_barang' => $request->nama_barang]);
        $barang = Barang::where('id_barang' ,$request->id_barang);
        $barang->update(['nama_barang' => $request->nama_barang]);
        
        return redirect('/listbarang');
    }
    
    public function prosesDeleteBarang($id){
        $barang = Barang::where('id_barang', $id)->delete();
        return redirect('/listbarang');
    }
}
