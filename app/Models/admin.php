<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;   

class admin extends Authenticatable
{
    use HasFactory;

    protected $table = 'admin';
    protected $fillable = ['name', 'email', 'password'];
    protected $visible = ['id','name', 'email', 'created_at' , 'updated_at'];

    public $timestamps = true;

    protected $casts = [
        'password' => 'hashed',
    ];

    public function brani()
    {
        return $this->hasMany('App\Models\brano', 'id_creator_admin');
    }
}
