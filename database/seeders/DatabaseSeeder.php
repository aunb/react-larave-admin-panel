<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Muhammad Munib',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('123456')
        ]);

        // \App\Models\User::factory(10)->create();
    }
}
