<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('product_name');
            $table->string('Pharmacy_name');
            $table->string('location');
            $table->bigInteger('price');
            $table->string('disease');
            $table->longText('descprition');
            $table->string('contact');
            $table->string('image_url');
            $table->foreignId('user_id')->nullable()->constrained();//constrained is same as references(id)->on('users')
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
