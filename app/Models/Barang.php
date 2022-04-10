<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Barang extends Model{
    protected $fillable = ['id_barang','nama_barang'];
    protected $guarded = ['updated_at'];
    public $timestamps = false;
    protected $table = 'tbm_barang';
}