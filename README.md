## Laravel x11 Built with Vue.js 3x, Tailwind CSS x3.4, PRIMEVUE x4.0, and Vite

## Getting Started
To get a local copy up and running, follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/eramitgupta/laravel-x11-or-vuejs-x3.git
   ```
2. Navigate to the project directory
   ```sh
   cd laravel-x11-or-vuejs-x3
   ```
3. Install PHP dependencies & Install NPM packages
   ```sh
   composer install && npm install
   ```
  
4. Copy the example environment file and modify it according to your environment
   ```sh
   cp .env.example .env
   ```
5. Generate an application key
   ```sh
   php artisan key:generate
   ```
6. Run the database migrations
   ```sh
   php artisan migrate
   ```
7. Start the development server
   ```sh
   npm run dev
   ```
8. (Optional) Start Laravel's built-in server
   ```sh
   php artisan serve
   ```

## Advanced Command Line

### PHP Style Fix

To fix PHP coding style issues, run:
```sh
composer lint
```

### Vue or Blade Style Fix

To fix Vue or Blade template coding style issues, run:
```sh
npm run lint:fix
```
   ![Screenshot 2024-07-20 at 11 46 23 AM](https://github.com/user-attachments/assets/5e2b8d4c-b587-4931-90cf-5bbd0397d5df)

## Usage

Instructions on how to use the project once it is set up.

Feel free to further modify the project title, prerequisites, installation instructions, usage, contributing guidelines, license, and contact information as per your project's requirements.
