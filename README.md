# 🏠 Homely

**Homely** is a humanitarian-driven full-stack platform designed to provide support during wars, natural disasters, or housing displacement. It empowers individuals who have lost their homes to find safe and temporary accommodation while enabling others to offer their homes or contribute donations to help those in need.

Built with modern technologies — **React.js**, **Tailwind CSS**, **Redux Toolkit**, **Node.js**, **Express.js**, **MongoDB**, and **JWT authentication** — the platform ensures a secure, scalable, and responsive experience for both hosts and seekers. Homely goes beyond being just an app; it's a community-focused initiative that uses technology to restore hope and dignity when people need it most.

---

## 🌟 Features

- **🔐 User Authentication**: Secure signup/login with JWT-based authentication and token blacklisting on logout
- **🏘️ Listing Management**: Create, view, edit, and delete housing listings with images and location data
- **👤 Profile Management**: View and update user profiles including personal details and password
- **🗺️ Interactive Maps**: Embedded map visualization with geolocation support for each listing
- **📱 Responsive Design**: Fully responsive UI built with Tailwind CSS for seamless mobile and desktop experience
- **🔄 Real-time State Management**: Redux Toolkit for efficient global state management
- **🌐 RESTful API**: Clean and well-structured backend API with validation and error handling

---

## 🏗️ Architecture

### Route Structure

<img width="990" height="458" alt="diagram-export-9-9-2025-12_27_46-am" src="https://github.com/user-attachments/assets/0fc4534f-aac8-4b89-8938-342e8392437f" />

### Tech Stack

**Frontend:**

- React 19 + Vite
- Tailwind CSS
- Redux Toolkit
- React Router DOM
- Axios
- React Icons
- React Hot Toast

**Backend:**

- Node.js + Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcrypt
- cookie-parser
- CORS
- Validator.js

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/rahulkumarpahwa/homely.git
   cd homely
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Start the backend server:

   ```bash
   npm run dev    # Development mode with nodemon
   npm start      # Production mode
   ```

3. **Frontend Setup**

   ```bash
   cd Frontend
   npm install
   ```

   Start the frontend dev server:

   ```bash
   npm run dev
   ```

4. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`

---

## 📚 Documentation

For detailed documentation including API endpoints, database schemas, authentication flow, and deployment guides, see [DOCUMENTATION.md](./DOCUMENTATION.md).

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

---

## 📧 Contact

**Rahul Kumar Pahwa** - [@rahulkumarpahwa](https://github.com/rahulkumarpahwa)

Project Link: [https://github.com/rahulkumarpahwa/homely](https://github.com/rahulkumarpahwa/homely)

---

## 🌍 Live Demo

**Frontend (Netlify):** [https://thehomely.netlify.app](https://thehomely.netlify.app)

---

**Made with ❤️ to restore hope and dignity when people need it most.**
