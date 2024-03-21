<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('brano', function (Blueprint $table) {
            $table->id();
            $table->string('titolo');
            $table->string('autore');
            $table->foreignId('id_creator_admin')->constrained('admin');
            $table->string('urlTrack');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('brano');
    }
};
