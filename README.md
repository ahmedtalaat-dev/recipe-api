# Recipe API

A RESTful recipe API built with Node.js, Express, MongoDB, and Mongoose.

The API allows users to register and log in, create and manage their own recipes, upload recipe images, and browse recipes.

## Features

- User registration
- User login
- Password hashing with bcrypt
- JWT authentication
- Protected recipe routes
- Recipe ownership authorization
- Create, read, update, and delete recipes
- Recipe image uploads with Multer
- MongoDB database with Mongoose
- Input validation through Mongoose
- Environment variable configuration

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs
- Multer
- dotenv

## Project Structure

```text
recipe-api/
├── src/
│   ├── config/
│   │   └── connectDB.js
│   ├── controllers/
│   │   ├── recipeController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   ├── models/
│   │   ├── recipeModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── recipeRouter.js
│   │   └── userRouter.js
│   └── app.js
├── uploads/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
````

## Installation

Clone the repository:

```bash
git clone https://github.com/ahmedtalaat-dev/recipe-ap
```

Move into the project directory:

```bash
cd recipe-api
```

Install dependencies:

```bash
npm install
```

## Running the Server

Start the server with:

```bash
node app.js
```

The API will be available at:

```text
http://localhost:3000
```

## Authentication

Authentication uses JWT.

After registering or logging in, the API returns a JWT token.

For protected routes, send the token in the request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

## API Endpoints

### Users

#### Register

```http
POST /api/users/register
```

Request body:

```json
{
  "username": "ahmed",
  "email": "ahmed@gmail.com",
  "password": "password123"
}
```

#### Login

```http
POST /api/users/login
```

Request body:

```json
{
  "email": "ahmed@gmail.com",
  "password": "password123"
}
```

## Recipes

### Get All Recipes

```http
GET /api/recipe
```

This endpoint is public.

### Get One Recipe

```http
GET /api/recipe/:id
```

This endpoint is public.

### Create Recipe

```http
POST /api/recipe
```

Requires authentication.

Use `multipart/form-data`.

Fields:

```text
title
description
ingredients
instructions
cookingTime
image
```

Example:

```text
title: Pizza
description: Homemade pizza
ingredients: ["tomato", "cheese", "flour"]
instructions: ["Prepare dough", "Add toppings", "Bake"]
cookingTime: 15
image: pizza.jpg
```

The `createdBy` field should not be sent by the client.

The API automatically assigns the authenticated user's ID.

### Update Recipe

```http
PATCH /api/recipe/:id
```

Requires authentication.

The authenticated user can only update recipes they created.

Use `multipart/form-data`.

Example fields:

```text
title
description
ingredients
instructions
cookingTime
image
```

### Delete Recipe

```http
DELETE /api/recipe/:id
```

Requires authentication.

A user can only delete their own recipes.

## Recipe Model

A recipe contains:

```text
title
description
ingredients
instructions
cookingTime
image
createdBy
createdAt
updatedAt
```

The `createdBy` field stores the MongoDB ObjectId of the user who created the recipe.

## Image Uploads

Recipe images are uploaded using Multer.

Supported image formats:

```text
JPG
JPEG
PNG
WEBP
```

Uploaded images are stored in:

```text
uploads/
```

Images are served through:

```text
http://localhost:3000/uploads/filename.jpg
```
