<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class brano extends Model
{
    use HasFactory;

    protected $table = 'brano';
    protected $fillable = [
        'titolo',
        'autore' ,
        'urlTrack',
        'id_creator_admin'
    ];

    protected $visible = ['id','titolo', 'autore', 'urlTrack' , 'id_creator_admin', 'created_at' , 'updated_at'];

    public $timestamps = true;


}
