# BlogApp

## **Project Overview**

This is a **full-stack blogging platform** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The platform allows users to:

1. **Sign up and log in** with JWT-based authentication.
2. **Create, edit, delete, and view blog posts**.
3. Make posts **public or private**.
4. Comment on **public posts**.
5. **Search** and **paginate** posts.

---

## **Features**

### **Backend (Node.js + Express + MongoDB)**

- **User Authentication**: JWT-based login/signup functionality with role-based access control.
- **Post Management**: CRUD operations for blog posts.
- **Commenting System**: Allows users to comment on public posts.
- **Search & Pagination**: Implemented search and pagination for posts.
- **MongoDB Collections**:
  - `Users`
  - `Posts`
  - `Comments`

### **Frontend (React.js)**

- **Responsive UI** with **TailwindCSS** for styling.
- **Pages**:
  - **Home Page**: Displays public posts with search and pagination.
  - **Post Details Page**: Shows full post content and associated comments.
  - **Dashboard**: Manage posts (create, edit, delete).
  - **Login/Signup Pages**: User authentication forms.
- **State Management**: Uses **ContextApi** for state management.
- **Like** feature for posts.
- **Admin role** for enhanced control.

---

## **Installation**

### **Backend Setup (Node.js + Express + MongoDB)**

1. Clone the repository:

   ```bash
   git clone https://github.com/Sanjo17/BlogApp.git
   cd BlogApp
   ```

2. Install dependencies:

   ```bash
   cd back-end
   npm install
   ```

3. Create a `.env` file for environment variables and add your MongoDB URI, JWT secret, etc.

   ```env
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   The backend server will run at `http://localhost:5000`.

---

### **Frontend Setup (React.js)**

1. Install frontend dependencies:

   ```bash
   cd front-end
   npm install
   ```

2. Create a `.env` file for environment variables:

   ```env
   REACT_APP_API_URL=http://localhost:5000  # Adjust if backend is deployed
   ```

3. Start the frontend:

   ```bash
   npm start
   ```

   The frontend will run at `http://localhost:3000`.

---

## **Deployment**

### **Frontend**

Deployed on **Vercel/Netlify**. You can access the live demo at:

- [Frontend Demo Link](https://blog-app-git-main-sanjo17s-projects.vercel.app)

### **Backend**

Deployed on a free platform or your local server. The backend is accessible via:

- [Backend API](https://blog-app-api-cyan-nu.vercel.app) (Currently facing a CORS issue) or http://localhost:5000  the live deployed link.

---

## **Usage**

- **User Authentication**: Sign up and log in to start using the platform.
- **Post Management**: Create, update, or delete posts from the dashboard.
- **Viewing Posts**: Public posts can be accessed and commented on from the Home Page.
- **Search & Pagination**: Use the search bar to find specific posts and navigate through paginated results.

---

## **Contributing**

Feel free to fork the repository and submit pull requests for any improvements or bug fixes. Please ensure that your code adheres to the following:

- Clean and modular code
- Proper commit messages
- Follow the code style of the project

---

## **License**

This project is open-source and available under the [MIT License](LICENSE).

---

## **Contact**

For any issues or inquiries, you can reach me via email at:  
**sanjosimon17gmail.com**

---
