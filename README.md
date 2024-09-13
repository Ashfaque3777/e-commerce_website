# E-Commerce Web Application

This project is a full-featured e-commerce web application built using **React.js**, **Node.js**, **Express.js**, **MySQL**, and **Tailwind CSS**. It includes both client and admin functionalities with a protected admin dashboard and client registration, login, and cart management features.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

### Client Features

- Register and Login functionality with form validation.
- Secure password storage with hashed credentials.
- Search for products based on brand and type.
- Filter products by price range.
- Add items to the cart and manage them in real-time.
- Responsive design with Tailwind CSS.

### Admin Features

- Protected admin routes for managing products.
- Add, update, and delete products.
- View users and manage their roles.

### Additional Features

- Toast notifications for user feedback.
- Persistent authentication using context (`userContext`).
- Product filtering by categories like shoes and shirts.

## Technologies Used

### Frontend

- **React.js**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **React Router DOM**: For client-side routing.
- **Axios**: For handling API requests.

### Backend

- **Node.js**: As the JavaScript runtime for building the server.
- **Express.js**: For handling backend routing and API requests.
- **MySQL**: For storing user and product data.

### Other Tools

- **React Context API**: For global state management.
- **React Toastify**: For notifications.
- **Multer**: For handling file uploads.
- **Bcrypt**: For password hashing.

## Project Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ashfaque3777/E-Commerce_Website.git
   cd E-Commerce_Website
   ```

2. **Install dependencies** for both frontend and backend:

   ```bash
   # Frontend (React)
   cd frontend
   npm install

   # Backend (Node)
   cd ../backend
   npm install
   ```

3. **Environment variables**:
   Set up your `.env` file in the backend folder with the following configuration:

   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=aladdin@3777
   DB_NAME=e-commerce
   PORT=240
   ```

4. **Run the MySQL database** and ensure your tables are set up properly.

5. **Run the backend**:

   ```bash
   cd backend
   npm start
   ```

6. **Run the frontend**:

   ```bash
   cd frontend
   npm start
   ```

7. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## API Endpoints

### Client Routes

- **POST** `/api/saveClient`: Register a new client.
- **POST** `/api/clientLogin`: Client login.
- **GET** `/api/getProduct`: Retrieve all products.
- **POST** `/api/saveCart/:userName`: Add product to the cart.

### Admin Routes

- **POST** `/api/adminLogin`: Admin login.
- **POST** `/api/saveProduct`: Add a new product.
- **PUT** `/api/updateProduct/:id`: Update product information.
- **DELETE** `/api/deleteProduct/:id`: Delete a product.

## Usage

### Client Side

- **ClientRegister.jsx**: Component to handle client registration.
- **Home.jsx**: Main page for displaying products with filtering options.
- **Cart Management**: Allows users to add products to their cart and view the cart items.

### Admin Side

- **Protected.jsx**: Protects admin routes. Redirects unauthorized users to the login page.
- **Admin Dashboard**: Enables adding, updating, and removing products.

## Folder Structure

```bash
frontend/
  ├── src/
      ├── adminPanel/
          ├── AddProduct.jsx
          ├── AdminLogin.jsx
          ├── AdminNavbar.jsx
          ├── AdminTable.jsx
          ├── UpdateProduct.jsx
          ├── ViewProduct.jsx
      ├── clientPanel/
          ├── Cart.jsx
          ├── ClientLogin.jsx
          ├── ClientNavbar.jsx
          ├── ClientRegister.jsx
          ├── Home.jsx
      ├── context/
          ├── userContext.js
          ├── UserContextProvider.jsx
      ├── AdminLayout.jsx
      ├── ClientLayout.jsx
      ├── index.css
      ├── main.jsx
      ├── Protected.jsx
backend/
  ├── controller/
      ├── adminController.js
      ├── cartController.js
      ├── clientController.js
      ├── productController.js
  ├── routes/
      ├── adminRoutes.js
      ├── cartRoutes.js
      ├── clientRoutes.js
      ├── productRoutes.js
  ├── uploads/
  ├── .env
  ├── databaseConfig.js
  ├── main.js
  ├── multerConfig.js
```

## Live Demo

A live version of the application is available at the following link:

**[Live Demo](https://infishop-197786.vercel.app)**

Feel free to visit and explore the features, including:
- Product browsing and filtering
- Client registration and login
- Cart management
- Admin panel (admin-specific actions like adding and managing products)

## Future Enhancements

- **Product Reviews**: Add functionality for clients to leave reviews on products.
- **Wishlist**: Allow users to add items to a wishlist.
- **Payment Integration**: Integrate payment gateways like Stripe or PayPal.
- **Admin Dashboard UI**: Enhance the UI/UX of the admin dashboard for better usability.
- **Product Sorting**: Enable product sorting by popularity, rating, or price.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature-branch-name`).
5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
