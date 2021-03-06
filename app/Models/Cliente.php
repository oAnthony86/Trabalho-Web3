<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    public $table = 'cliente';
    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'id',
        'NomeCompleto',
        'CPF',
        'DataNascimento',
        'Sexo',
        'Cidade',
        'Estado',
    ];
}
