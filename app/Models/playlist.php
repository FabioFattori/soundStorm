<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class playlist extends Model
{
    use HasFactory;

    protected $table = 'playlist';

    protected $visible = ['id', "name" , 'id_creator' , 'created_at' , 'updated_at'];

    protected $fillable = [
        "name",
        'id_creator',
    ];

    public function brani()
    {
        return $this->belongsToMany(brano::class, 'playlist_brano', 'id_playlist', 'id_brano');
    }

}
