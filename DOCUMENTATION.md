# 📘 Homely - Complete Documentation

**Version:** 1.0.0  
**Last Updated:** October 21, 2025

---

## 📑 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Design](#architecture--design)
3. [Frontend Structure](#frontend-structure)
4. [Backend Structure](#backend-structure)
5. [Database Schema](#database-schema)
6. [API Endpoints](#api-endpoints)
7. [Authentication & Security](#authentication--security)
8. [Environment Configuration](#environment-configuration)
9. [Deployment Guide](#deployment-guide)
10. [Development Workflow](#development-workflow)
11. [Testing & Debugging](#testing--debugging)
12. [Future Enhancements](#future-enhancements)

---

## 🌐 Project Overview

### Purpose

Homely is a humanitarian platform designed to connect people who have lost their homes due to wars, natural disasters, or displacement with individuals willing to offer temporary accommodation. The platform also supports donations to help those in need.

### Core Objectives

- Provide a secure and accessible platform for listing and finding temporary housing
- Enable profile management for both hosts and seekers
- Facilitate community-driven support through donations
- Ensure data security and user privacy through robust authentication

### Target Users

- **Seekers**: Individuals or families displaced from their homes
- **Hosts**: People willing to offer temporary accommodation
- **Donors**: Supporters who want to contribute financially

> **QUESTION 1:** Are donations currently implemented in the application, or is this a planned feature? If implemented, which payment gateway (Stripe, PayPal, etc.) are you using?

---

## 🏗️ Architecture & Design

### System Architecture

The application follows a **client-server architecture** with clear separation between frontend and backend:

```
┌─────────────────────────────────────────────────────────────┐
│                      Client (Browser)                        │
│  ┌────────────────────────────────────────────────────────┐ │
│  │         React + Vite + Tailwind CSS                    │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │ │
│  │  │  Components  │  │  Redux Store │  │   Routing   │ │ │
│  │  └──────────────┘  └──────────────┘  └─────────────┘ │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                             │
                             │ HTTP/HTTPS (Axios)
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                   Backend Server (Node.js)                   │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              Express.js REST API                        │ │
│  │  ┌──────────┐  ┌──────────┐  ┌────────────────────┐  │ │
│  │  │  Routes  │  │Middleware│  │  Auth & Validation │  │ │
│  │  └──────────┘  └──────────┘  └────────────────────┘  │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                             │
                             │ Mongoose ODM
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                     MongoDB Database                         │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────┐   │
│  │   Users    │  │  Listings  │  │  Blacklisted Tokens│   │
│  └────────────┘  └────────────┘  └────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Route Structure

<img width="990" height="458" alt="Route Structure Diagram" src="https://github.com/user-attachments/assets/0fc4534f-aac8-4b89-8938-342e8392437f" />

### Design Patterns

- **MVC Pattern**: Models (Mongoose), Routes (Controllers), Views (React Components)
- **Middleware Pattern**: Authentication, validation, error handling
- **State Management**: Redux Toolkit with slices for listings, auth, and map state
- **Component-Based Architecture**: Reusable React components with props
- **REST API Design**: Resource-based endpoints with standard HTTP methods

> **QUESTION 2:** Do you have any API versioning strategy (e.g., `/api/v1/`) or plans to implement it in the future?

---

## 🎨 Frontend Structure

### Technology Stack

| Technology       | Version | Purpose                     |
| ---------------- | ------- | --------------------------- |
| React            | 19.1.1  | UI library                  |
| Vite             | 7.1.2   | Build tool & dev server     |
| Tailwind CSS     | 3.4.17  | Utility-first CSS framework |
| Redux Toolkit    | 2.9.0   | State management            |
| React Router DOM | 7.8.2   | Client-side routing         |
| Axios            | 1.12.2  | HTTP client                 |
| React Hot Toast  | 2.6.0   | Notifications               |
| React Icons      | 5.5.0   | Icon library                |

### Directory Structure

```
Frontend/
├── public/               # Static assets
├── src/
│   ├── main.jsx         # App entry point
│   ├── App.jsx          # Root component with routing
│   ├── App.css          # Global styles
│   ├── index.css        # Tailwind imports
│   ├── components/      # Reusable components
│   │   ├── Footer.jsx
│   │   ├── ListingCard.jsx
│   │   ├── Map.jsx
│   │   └── Navbar.jsx
│   ├── pages/           # Page components
│   │   ├── About.jsx
│   │   ├── Donate.jsx
│   │   ├── GetHelp.jsx
│   │   ├── GetInvolved.jsx
│   │   ├── Homely.jsx
│   │   ├── Auth/
│   │   │   └── Auth.jsx
│   │   └── Listings/
│   │       ├── CreateListing.jsx
│   │       ├── DashBoard.jsx
│   │       └── EditListing.jsx
│   └── utils/           # Utilities & state management
│       ├── appStore.js
│       ├── authReducer.js
│       ├── constants.js
│       ├── createListingReducer.js
│       ├── editListingReducer.js
│       ├── listingSlice.js
│       ├── mapSlice.js
│       └── useMaps.js
├── package.json
├── vite.config.js
├── tailwind.config.js
└── eslint.config.js
```

### Key Components

#### 1. **Navbar.jsx**

- Main navigation component
- Links to Home, Get Help, Get Involved, About, Donate
- User authentication state display
- Profile/Dashboard access

> **QUESTION 3:** Does the Navbar show different options for authenticated vs. unauthenticated users? Should there be a "Logout" button visible?

#### 2. **ListingCard.jsx**

- Displays individual housing listing
- Shows images, title, description, location, rating
- Handles image arrays and map coordinates
- Defensive rendering for missing data

#### 3. **Map.jsx**

- Embeds interactive map using iframe
- Displays listing location with markers
- Uses `pointer-events-none` to prevent unwanted interactions

> **QUESTION 4:** Which mapping service are you using (Google Maps, OpenStreetMap, Mapbox, etc.)? Do you need an API key for it?

#### 4. **Footer.jsx**

- Footer component with links and information

### Pages

#### Auth Pages

**Auth.jsx** - Handles both signup and login:

- Toggle between login/signup forms
- Form fields: firstName, lastName, email, password, mobile, address
- Centered label/input pairs using Tailwind CSS
- Uses `authReducer.js` for form state management
- API calls via Axios to `/signup` and `/login` endpoints

#### Listing Pages

**CreateListing.jsx** - Create new housing listings:

- Form fields: title, description, imageUrl, street, location (city, state, postalcode, country)
- Uses `createListingReducer.js` for form state
- POST request to `/list/create`

**DashBoard.jsx** - View all user's listings:

- Fetches listings via GET `/list/yourlistings`
- Displays listings using `ListingCard` component
- Defensive rendering with Array.isArray checks
- Normalizes API response to always return array

**EditListing.jsx** - Edit existing listings:

- Pre-populates form with existing listing data
- PATCH request to `/list/editlisting/:listingId`
- Uses `editListingReducer.js` for form state

#### Other Pages

**Homely.jsx** - Landing/home page
**GetHelp.jsx** - Information for seekers
**GetInvolved.jsx** - How to become a host
**About.jsx** - About the platform
**Donate.jsx** - Donation information/functionality

> **QUESTION 5:** Are the pages GetHelp, GetInvolved, About, and Donate static content pages, or do they have interactive features? Should they fetch data from the backend?

### Redux State Management

The app uses **Redux Toolkit** with the following slices:

1. **listingSlice.js** - Manages listings state
2. **mapSlice.js** - Manages map-related state
3. **authReducer.js** - Manages authentication form state
4. **createListingReducer.js** - Manages create listing form
5. **editListingReducer.js** - Manages edit listing form

**Store Configuration** (`appStore.js`):

```javascript
import { configureStore } from "@reduxjs/toolkit";
// ... import reducers
const appStore = configureStore({
  reducer: {
    // reducer configuration
  },
});
```

> **QUESTION 6:** Should user authentication state (logged-in user info, token) be stored in Redux, localStorage, or both? Currently, where is it stored?

### Routing Structure

Expected routes (based on project structure):

- `/` - Home page (Homely.jsx)
- `/auth` - Login/Signup (Auth.jsx)
- `/dashboard` - User's listings dashboard (DashBoard.jsx)
- `/create-listing` - Create new listing (CreateListing.jsx)
- `/edit-listing/:id` - Edit listing (EditListing.jsx)
- `/get-help` - Help information (GetHelp.jsx)
- `/get-involved` - Get involved page (GetInvolved.jsx)
- `/about` - About page (About.jsx)
- `/donate` - Donate page (Donate.jsx)

> **QUESTION 7:** Are there any protected routes that require authentication? Should unauthenticated users be redirected to `/auth`?

### Styling Strategy

- **Tailwind CSS** utility classes for all styling
- **Responsive design** with mobile-first approach
- **Custom classes** defined in `App.css` and `index.css`
- **Consistent spacing** using Tailwind's spacing scale
- **Color palette** - what's the primary brand color scheme?

> **QUESTION 8:** Do you have a specific color palette or brand guidelines for the UI? Should I document the primary colors used?

---

## 🔧 Backend Structure

### Technology Stack

| Technology    | Version  | Purpose               |
| ------------- | -------- | --------------------- |
| Node.js       | -        | Runtime environment   |
| Express.js    | 5.1.0    | Web framework         |
| MongoDB       | -        | Database              |
| Mongoose      | 8.16.2   | MongoDB ODM           |
| JWT           | 9.0.2    | Authentication tokens |
| bcrypt        | 6.0.0    | Password hashing      |
| Validator.js  | 13.15.15 | Data validation       |
| CORS          | 2.8.5    | Cross-origin requests |
| cookie-parser | 1.4.7    | Cookie handling       |
| dotenv        | 17.1.0   | Environment variables |

### Directory Structure

```
backend/
├── src/
│   ├── app.js              # Main server file
│   ├── config/
│   │   └── database.js     # MongoDB connection
│   ├── init/
│   │   ├── listings.json   # Seed data
│   │   └── listingsSeed.js # Seed script
│   ├── middlewares/
│   │   └── auth.js         # Authentication middleware
│   ├── models/
│   │   ├── listing.js      # Listing schema
│   │   ├── token.js        # Blacklisted token schema
│   │   └── user.js         # User schema
│   ├── routes/
│   │   ├── auth.js         # Auth routes
│   │   ├── listing.js      # Listing routes
│   │   └── profile.js      # Profile routes
│   └── utils/
│       └── validation.js   # Validation functions
├── package.json
└── Readme.md
```

### Server Configuration (`app.js`)

```javascript
const express = require("express");
const app = express();
require("dotenv").config();
const { connectDB } = require("./config/database.js");
const authRouter = require("./routes/auth.js");
const profileRouter = require("./routes/profile.js");
const listingRouter = require("./routes/listing.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Middlewares
app.use(express.json());
app.use(cookieParser());

// CORS Configuration
const corsOptions = {
  origin: ["http://localhost:5173", "https://thehomely.netlify.app"],
  methods: ["GET", "PATCH", "POST", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

// Database Connection & Server Start
connectDB()
  .then(() => {
    console.log("Database has been connected successfully!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

// Routes
app.use("/", authRouter);
app.use("/profile", profileRouter);
app.use("/list", listingRouter);
```

> **QUESTION 9:** Do you need to add any additional CORS origins for development or staging environments?

### Middleware

#### Authentication Middleware (`auth.js`)

**`userAuth` middleware:**

- Verifies JWT token from cookies
- Checks if token is blacklisted
- Attaches user object to `req.user`
- Returns 401 if authentication fails

```javascript
const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    // Check if token exists
    // Verify token with JWT
    // Check blacklist
    // Find user and attach to req
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};
```

> **QUESTION 10:** How long should JWT tokens be valid? Currently set to 2 hours - is this appropriate for your use case?

---

## 💾 Database Schema

### User Schema (`user.js`)

```javascript
{
  firstName: {
    type: String,
    lowercase: true,
    minLength: 4,
    maxLength: 75
  },
  lastName: {
    type: String,
    lowercase: true
  },
  age: {
    type: Number,
    min: 18,
    max: 150
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validated: true, // Uses validator.isEmail()
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    trim: true,
    maxLength: 200
  },
  timestamps: true  // createdAt, updatedAt
}
```

**Indexes:**

- `email` (unique)

> **QUESTION 11:** Should mobile numbers have validation (format, uniqueness)? Should there be a role field (host, seeker, admin)?

### Listing Schema (`listing.js`)

```javascript
{
  title: {
    type: String,
    maxLength: 200,
    required: true,
    trim: true
  },
  description: {
    type: String,
    maxLength: 500,
    required: true,
    trim: true
  },
  imageUrl: {
    type: [String],  // Array of image URLs
    default: ["https://res.cloudinary.com/dwtcjjxwc/image/upload/v1702025115/pic0_hb6pwl.jpg"]
  },
  street: {
    type: String,
    maxLength: 300,
    required: true,
    unique: true
  },
  location: {
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalcode: { type: String, required: true, minLength: 6, maxLength: 6 },
    country: { type: String, required: true }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 1
  },
  map: {
    lat: { type: String },
    lon: { type: String }
  },
  timestamps: true
}
```

**Indexes:**

- `street` (unique)
- `owner` (for querying user's listings)

> **QUESTION 12:** How are ratings determined? Is it manual entry by the host, or should there be a review/rating system by seekers?

> **QUESTION 13:** The postalcode is fixed at 6 characters - is this correct for all countries you support? Different countries have different postal code formats.

### Token Schema (`token.js`)

```javascript
{
  token: {
    type: String,
    required: true
  },
  timestamps: true
}
```

**Purpose:** Token blacklisting for logout functionality

> **QUESTION 14:** Should blacklisted tokens be automatically cleaned up after expiry (2 hours)? Consider adding a TTL index or cleanup job.

---

## 🌐 API Endpoints

### Base URL

- **Development:** `http://localhost:3000`
- **Production:** (To be configured)

> **QUESTION 15:** What's the production backend URL? Should it be documented here?

---

### Authentication Routes (`/`)

#### 1. **POST /signup**

Create a new user account.

**Request Body:**

```json
{
  "firstName": "john",
  "lastName": "doe",
  "email": "john@example.com",
  "password": "StrongPass123!",
  "mobile": "1234567890",
  "address": "123 Main St, City",
  "age": 25
}
```

**Response (200):**

```json
{
  "success": true,
  "status": 200,
  "message": "john has Signup Successfully!",
  "user": {
    "_id": "...",
    "firstName": "john",
    "lastName": "doe",
    "email": "john@example.com",
    "mobile": "1234567890",
    "address": "123 Main St, City",
    "age": 25,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

**Cookies Set:**

- `token`: JWT token (expires in 1 hour)

**Validation:**

- Email must be valid format
- Password must be strong (validated by validator.js)
- First name must be 4-75 characters
- Age must be 18-150

**Errors (400):**

```json
{
  "success": false,
  "status": 400,
  "message": "Error message"
}
```

---

#### 2. **POST /login**

Authenticate existing user.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "StrongPass123!"
}
```

**Response (200):**

```json
{
  "success": true,
  "status": 200,
  "message": "john has Login Successfully!",
  "user": {
    "_id": "...",
    "firstName": "john",
    "lastName": "doe",
    "email": "john@example.com",
    "mobile": "1234567890",
    "address": "123 Main St, City",
    "age": 25
  }
}
```

**Cookies Set:**

- `token`: JWT token (expires in 1 hour)

**Errors (400):**

- "Invalid Credentials!" (wrong email or password)

---

#### 3. **POST /logout**

Logout user and blacklist token.

**Authentication:** Required (JWT token in cookie)

**Response (200):**

```json
{
  "success": true,
  "status": 200,
  "message": "User LoggedOut Successfully!"
}
```

**Behavior:**

- Token is added to blacklist
- Token cookie is cleared

---

#### 4. **DELETE /delete**

Delete user account.

**Authentication:** Required (JWT token in cookie)

**Response (200):**

```json
{
  "success": true,
  "status": 200,
  "message": "Account Deleted Successfully!"
}
```

**Behavior:**

- User is permanently deleted from database
- Token is blacklisted
- Token cookie is cleared

> **QUESTION 16:** Should deleting a user also delete all their listings? Currently, this might leave orphaned listings.

---

### Profile Routes (`/profile`)

#### 1. **GET /profile/view**

Get current user's profile.

**Authentication:** Required

**Response (200):**

```json
{
  "success": true,
  "status": 200,
  "data": {
    "_id": "...",
    "firstName": "john",
    "lastName": "doe",
    "email": "john@example.com",
    "mobile": "1234567890",
    "address": "123 Main St, City",
    "age": 25
  }
}
```

---

#### 2. **PATCH /profile/edit**

Update user profile.

**Authentication:** Required

**Request Body:**

```json
{
  "firstName": "jane",
  "lastName": "smith",
  "address": "456 Oak Ave",
  "age": 30
}
```

**Response (200):**

```json
{
  "success": true,
  "status": 200,
  "message": "jane, Your Profile has been updated!"
}
```

**Allowed Fields:**

- firstName
- lastName
- address
- age

**Note:** Email and password cannot be changed via this endpoint.

---

#### 3. **PATCH /profile/password**

Change user password.

**Authentication:** Required

**Request Body:**

```json
{
  "password": "NewStrongPass123!",
  "confirmedPassword": "NewStrongPass123!"
}
```

**Response (200):**

```json
{
  "success": true,
  "status": 200,
  "message": "john, Your password has been updated!"
}
```

**Validation:**

- password and confirmedPassword must match
- Password must be strong (uppercase, lowercase, number, special char, min length)

---

### Listing Routes (`/list`)

#### 1. **POST /list/create**

Create a new housing listing.

**Authentication:** Required

**Request Body:**

```json
{
  "title": "Cozy 2BR Apartment",
  "description": "Beautiful apartment with modern amenities, perfect for temporary stay.",
  "imageUrl": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg"
  ],
  "street": "789 Elm Street",
  "location": {
    "city": "Springfield",
    "state": "Illinois",
    "postalcode": "627011",
    "country": "USA"
  },
  "rating": 4,
  "map": {
    "lat": "39.7817",
    "lon": "-89.6501"
  }
}
```

**Response (200):**

```json
{
  "success": true,
  "status": 200,
  "message": {
    "_id": "...",
    "title": "Cozy 2BR Apartment",
    "description": "Beautiful apartment with modern amenities...",
    "imageUrl": ["..."],
    "street": "789 Elm Street",
    "location": { ... },
    "owner": "...",
    "rating": 4,
    "map": { "lat": "39.7817", "lon": "-89.6501" },
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

**Validation:**

- title: required, max 200 chars
- description: required, max 500 chars
- street: required, unique, max 300 chars
- location fields: all required
- postalcode: exactly 6 characters

> **QUESTION 17:** How are map coordinates (lat/lon) obtained? Does the frontend use geocoding, or should users enter them manually?

---

#### 2. **GET /list/yourlistings**

Get all listings owned by the current user.

**Authentication:** Required

**Response (200):**

```json
{
  "success": true,
  "status": 200,
  "length": 2,
  "message": [
    {
      "_id": "...",
      "title": "Cozy 2BR Apartment",
      "description": "...",
      "imageUrl": ["..."],
      "street": "789 Elm Street",
      "location": { ... },
      "owner": {
        "_id": "...",
        "firstName": "john",
        "lastName": "doe"
      },
      "rating": 4,
      "map": { ... },
      "createdAt": "...",
      "updatedAt": "..."
    },
    { ... }
  ]
}
```

**Note:** Owner field is populated with firstName and lastName only.

---

#### 3. **PATCH /list/editlisting/:listingId**

Update an existing listing.

**Authentication:** Required

**URL Parameters:**

- `listingId`: MongoDB ObjectId of the listing

**Request Body:**

```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "imageUrl": ["https://example.com/new-image.jpg"],
  "street": "New Street Address",
  "location": {
    "city": "NewCity",
    "state": "NewState",
    "postalcode": "123456",
    "country": "USA"
  }
}
```

**Response (200):**

```json
{
  "success": true,
  "status": 200,
  "message": "Listing has been Updated!",
  "updatedList": { ... }
}
```

**Allowed Fields:**

- title
- description
- imageUrl
- street
- location

**Errors:**

- "Listing ID does not exist!" (missing listingId)
- "Listing Does not Exist!" (invalid listingId)
- "Listing Edit is Not Allowed!" (attempting to edit disallowed fields)

> **QUESTION 18:** Should users only be able to edit their own listings? Currently, the code doesn't verify ownership before allowing edits.

---

#### 4. **DELETE /list/deletelisting/:listingId**

Delete a listing.

**Authentication:** Required

**URL Parameters:**

- `listingId`: MongoDB ObjectId of the listing

**Response (200):**

```json
{
  "success": true,
  "status": 200,
  "message": "Listing Deleted Successfully!"
}
```

**Errors:**

- "Listing ID does not exist!"
- "Listing Does not Exist!"

> **QUESTION 19:** Should users only be able to delete their own listings? Same ownership verification issue as edit.

---

#### 5. **GET /list/all** (?)

**Status:** Not implemented yet

> **QUESTION 20:** Do you need a public endpoint to view ALL listings (for seekers browsing available housing)? This seems essential for the platform's purpose.

---

## 🔐 Authentication & Security

### JWT Authentication Flow

1. **Signup/Login:**

   - User submits credentials
   - Backend validates data
   - Password is hashed with bcrypt (10 salt rounds)
   - JWT token is generated with user ID
   - Token is set as HTTP-only cookie (expires in 1 hour)
   - User object returned to client

2. **Authenticated Requests:**

   - Client sends request with cookie
   - `userAuth` middleware extracts token
   - Token is verified with JWT secret
   - Token is checked against blacklist
   - User is fetched from database
   - User object attached to `req.user`

3. **Logout:**
   - Token is added to blacklist collection
   - Cookie is cleared

### Security Measures

✅ **Implemented:**

- Password hashing with bcrypt
- JWT token authentication
- Token blacklisting on logout
- CORS configuration
- Input validation with validator.js
- HTTP-only cookies
- Email uniqueness constraint
- Street address uniqueness (prevents duplicate listings)

⚠️ **Potential Improvements:**

- [ ] HTTPS enforcement in production
- [ ] Rate limiting on authentication endpoints
- [ ] Password reset functionality
- [ ] Email verification
- [ ] Account lockout after failed login attempts
- [ ] CSRF protection
- [ ] Helmet.js for security headers
- [ ] Input sanitization to prevent NoSQL injection
- [ ] File upload validation (if implementing image uploads)

> **QUESTION 21:** Do you plan to implement email verification for new accounts? This would require an email service (SendGrid, AWS SES, etc.).

> **QUESTION 22:** Should there be a "Forgot Password" feature? This would also require email functionality.

---

## ⚙️ Environment Configuration

### Backend Environment Variables (`.env`)

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/homely
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/homely?retryWrites=true&w=majority

# Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# CORS (Optional - if you need dynamic origins)
FRONTEND_URL=http://localhost:5173
```

**Important Notes:**

- ⚠️ Never commit `.env` file to version control
- ⚠️ Use strong, random JWT_SECRET in production
- ⚠️ Ensure MONGODB_URI has correct credentials and database name

### Frontend Environment Variables

Create `.env` in `Frontend/` directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000

# Optional: Other service API keys
# VITE_GOOGLE_MAPS_API_KEY=your_key_here
```

> **QUESTION 23:** Are there any other API keys needed for the frontend (maps, analytics, error tracking, etc.)?

---

## 🚀 Deployment Guide

### Backend Deployment

#### Prerequisites

- Node.js 16+ installed
- MongoDB instance (local or cloud)
- Environment variables configured

#### Steps

1. **Prepare Production Environment:**

   ```bash
   cd backend
   npm install --production
   ```

2. **Set Environment Variables:**

   - Set all required env vars on hosting platform
   - Ensure `NODE_ENV=production`

3. **Database Setup:**

   - Create MongoDB database
   - Update connection string
   - Run seed script if needed:
     ```bash
     node src/init/listingsSeed.js
     ```

4. **Start Server:**
   ```bash
   npm start
   ```

#### Recommended Hosting Platforms

- **Heroku**: Easy deployment with Git
- **Railway**: Modern platform with automatic deployments
- **DigitalOcean App Platform**: Scalable with managed database
- **AWS Elastic Beanstalk**: Enterprise-grade
- **Render**: Free tier available

> **QUESTION 24:** Where is the backend currently deployed, or where do you plan to deploy it?

---

### Frontend Deployment

#### Current Deployment

- **Platform:** Netlify
- **URL:** [https://thehomely.netlify.app](https://thehomely.netlify.app)

#### Build & Deploy Steps

1. **Build Production Bundle:**

   ```bash
   cd Frontend
   npm run build
   ```

   This creates optimized files in `dist/` directory.

2. **Netlify Deployment:**

   - Connect GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Set environment variables (VITE_API_BASE_URL, etc.)
   - Enable automatic deployments on push

3. **Custom Domain (Optional):**
   - Add custom domain in Netlify settings
   - Configure DNS records

#### Alternative Hosting Platforms

- **Vercel**: Optimized for React/Vite
- **GitHub Pages**: Free for public repos
- **AWS S3 + CloudFront**: Highly scalable
- **Firebase Hosting**: Google's platform

---

### Database Deployment

#### MongoDB Atlas (Recommended for Cloud)

1. **Create Cluster:**

   - Sign up at mongodb.com/cloud/atlas
   - Create free tier cluster
   - Select region closest to backend

2. **Configure Access:**

   - Create database user
   - Whitelist backend server IP (or 0.0.0.0/0 for testing)

3. **Get Connection String:**

   - Click "Connect" → "Connect your application"
   - Copy connection string
   - Replace `<password>` and `<dbname>`

4. **Update Backend:**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/homely?retryWrites=true&w=majority
   ```

> **QUESTION 25:** Are you using MongoDB Atlas, or do you have a self-hosted MongoDB instance?

---

### Seed Data

The backend includes seed data for testing:

**File:** `backend/src/init/listings.json`
**Script:** `backend/src/init/listingsSeed.js`

To populate database with sample listings:

```bash
cd backend
node src/init/listingsSeed.js
```

> **QUESTION 26:** Should the seed script be run in production, or is it only for development/testing?

---

## 🔄 Development Workflow

### Getting Started

1. **Clone Repository:**

   ```bash
   git clone https://github.com/rahulkumarpahwa/homely.git
   cd homely
   ```

2. **Backend Setup:**

   ```bash
   cd backend
   npm install
   # Create .env file with required variables
   npm run dev
   ```

3. **Frontend Setup (new terminal):**

   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

4. **Access Application:**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3000

### Development Scripts

**Backend:**

- `npm start` - Production mode
- `npm run dev` - Development with nodemon (auto-restart)
- `npm test` - Run tests (not implemented yet)

**Frontend:**

- `npm run dev` - Development server (Vite)
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Git Workflow

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "Add feature"`
3. Push to GitHub: `git push origin feature/your-feature`
4. Create Pull Request
5. Merge after review

---

## 🧪 Testing & Debugging

### Current Testing Status

⚠️ **Tests are not implemented yet**

Package.json shows:

```json
"test": "echo \"Error: no test specified\" && exit 1"
```

### Recommended Testing Strategy

**Backend:**

- **Unit Tests:** Jest + Supertest

  - Test route handlers
  - Test validation functions
  - Test middleware

- **Integration Tests:**
  - Test API endpoints
  - Test database operations
  - Test authentication flow

**Frontend:**

- **Unit Tests:** Vitest + React Testing Library

  - Test components
  - Test Redux reducers/slices
  - Test utility functions

- **E2E Tests:** Playwright or Cypress
  - Test complete user flows
  - Test authentication
  - Test listing creation/editing

> **QUESTION 27:** Do you plan to implement automated testing? If so, which testing framework would you prefer?

### Debugging Tips

**Backend Debugging:**

```javascript
// In VS Code, add .vscode/launch.json:
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Backend",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/backend/src/app.js",
      "envFile": "${workspaceFolder}/backend/.env"
    }
  ]
}
```

**Frontend Debugging:**

- Use React DevTools extension
- Use Redux DevTools extension
- Check Network tab for API calls
- Console.log in components (remove in production)

**Common Issues:**

1. **CORS Errors:**

   - Ensure frontend URL is in backend corsOptions
   - Check credentials: true in both CORS and Axios

2. **Authentication Fails:**

   - Check token in cookies (Application tab)
   - Verify JWT_SECRET matches between requests
   - Check if token is blacklisted

3. **Database Connection Fails:**
   - Verify MONGODB_URI is correct
   - Check network connectivity
   - Ensure database user has permissions

---

## 🚧 Future Enhancements

### Planned Features (Based on README)

1. **Donations System:**
   - Payment gateway integration (Stripe/PayPal)
   - Donation tracking
   - Donor dashboard
   - Thank you emails

> **QUESTION 28:** Which payment provider would you like to use for donations?

2. **Advanced Search & Filters:**

   - Filter listings by location, capacity, amenities
   - Map-based search
   - Distance calculation
   - Save favorite listings

3. **Messaging System:**

   - In-app messaging between hosts and seekers
   - Email notifications
   - Message history

4. **Review & Rating System:**

   - Seekers can rate stays
   - Hosts can rate seekers
   - Review comments
   - Average rating calculation

5. **Admin Dashboard:**

   - User management
   - Listing moderation
   - Analytics and statistics
   - Report handling

6. **Booking System:**

   - Request to stay
   - Accept/reject requests
   - Booking calendar
   - Check-in/check-out dates

7. **Verification System:**

   - Email verification
   - Phone verification
   - Identity verification
   - Trusted host badges

8. **Internationalization:**

   - Multi-language support
   - Multiple currencies
   - Regional date/time formats

9. **Accessibility:**

   - Screen reader support
   - Keyboard navigation
   - High contrast mode
   - WCAG 2.1 compliance

10. **Performance:**
    - Image optimization (lazy loading, CDN)
    - Code splitting
    - Caching strategies
    - Database indexing

> **QUESTION 29:** Which of these features are highest priority for you? Would you like me to help design/implement any of them?

---

## 📞 Support & Contact

**Developer:** Rahul Kumar Pahwa  
**GitHub:** [@rahulkumarpahwa](https://github.com/rahulkumarpahwa)  
**Repository:** [https://github.com/rahulkumarpahwa/homely](https://github.com/rahulkumarpahwa/homely)  
**Live Demo:** [https://thehomely.netlify.app](https://thehomely.netlify.app)

---

## 📝 License

This project is licensed under the **ISC License**.

---

## 🙏 Acknowledgments

- Built with compassion for those affected by displacement
- Powered by the open-source community
- Inspired by humanitarian values

---

**Last Updated:** October 21, 2025  
**Document Version:** 1.0.0

---

## 📋 Summary of Questions for Review

Here's a consolidated list of all questions I have about the project:

1. Are donations currently implemented? Which payment gateway?
2. API versioning strategy?
3. Does Navbar show different options for authenticated vs. unauthenticated users?
4. Which mapping service? API key needed?
5. Are GetHelp, GetInvolved, About, Donate interactive or static?
6. Where is user auth state stored (Redux/localStorage)?
7. Protected routes implementation?
8. Specific color palette/brand guidelines?
9. Additional CORS origins needed?
10. JWT token validity duration (2 hours OK)?
11. Mobile validation? User roles?
12. How are ratings determined?
13. Postal code format for international support?
14. Auto-cleanup for blacklisted tokens?
15. Production backend URL?
16. Delete user should delete their listings?
17. How are map coordinates obtained?
18. Verify listing ownership before edit?
19. Verify listing ownership before delete?
20. Need public endpoint for all listings?
21. Email verification for new accounts?
22. Forgot password feature?
23. Other API keys needed (maps, analytics)?
24. Where is backend deployed/planned?
25. MongoDB Atlas or self-hosted?
26. Run seed script in production?
27. Testing framework preferences?
28. Payment provider for donations?
29. Priority features from enhancement list?

Please review these questions and provide answers so I can update the documentation accordingly!
