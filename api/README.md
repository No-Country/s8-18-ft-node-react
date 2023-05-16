# Inventory Management API

This is a software API for inventory management. It allows performing operations related to product management, categories, users, and more.

## Features

- Creation, update, and deletion of products.
- Categorization of products by categories.
- User management with roles and permissions.
- User authentication and authorization.
- Integration with PostgreSQL database using Prisma ORM.
- Development using TypeScript for safer and more efficient coding.

## Pre- requisites

- Node.js (v14 or higher)
- PostgreSQL (installed and configured)

## Installation

##### 1. Clone this repository to your local machine:

```
git clone https://github.com/No-Country/s8-18-ft-node-react
```


##### 2. Navigate to the project directory:

```
cd inventory-management-api
```


##### 3. Install the project dependencies:

```
npm install
```

##### 4. Linting

Linting is configured for this project using ESLint. It helps maintain a consistent code style and catch potential errors. To run the linter, use the following command:

```
npm run lint
```

##### 5. Database configuration:

   - Create a PostgreSQL database on your local server.
   - Rename the `.env.example` file to `.env` and configure the database connection URL in the `DATABASE_URI_DEV` variable.

##### 6. Run database migrations:

```
npx prisma migrate dev 
```

##### 7. Start the development server:

```
npm run dev
```


The inventory management API should now be up and running at [http://localhost:3000](http://localhost:3000).

## Usage

Below are the available routes and operations in the API. You can test them using tools like Postman, cURL or ThunderClient.


## Contributions

Contributions are welcome. If you find any issues, have suggestions for improvements, or want to add new features, feel free to open an [issue](https://github.com/No-Country/s8-18-ft-node-react) or submit a [pull request](https://github.com/No-Country/s8-18-ft-node-react/pulls).




