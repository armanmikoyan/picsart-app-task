# Backend API Documentation

This backend API provides endpoints for user management, authentication, and post management.

## Table of Contents

- [Endpoints](#endpoints)
  - [Authentication](#authentication)
  - [User Management](#user-management)
  - [Post Management](#post-management)

## Endpoints

### Authentication

#### Login

- **URL:** `/auth/login`
- **Method:** `POST`
- **Description:** Logs in a user.
- **Request Body:**
  - `username`: String (required)
  - `password`: String (required)
- **Response:** 
  - Success: HTTP 200 OK
  - Failure: HTTP 400 Bad Request

#### Logout

- **URL:** `/auth/logout`
- **Method:** `POST`
- **Description:** Logs out a user.
- **Authorization:** Bearer Token
- **Response:** 
  - Success: HTTP 200 OK
  - Failure: HTTP 401 Unauthorized

### User Management

#### Register User

- **URL:** `/user/register-user`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  - `username`: String (required, unique)
  - `password`: String (required)
- **Response:** 
  - Success: HTTP 200 OK
  - Failure: HTTP 400 Bad Request

#### Update Username

- **URL:** `/user/update-username`
- **Method:** `PATCH`
- **Description:** Updates the username of a user.
- **Request Body:**
  - `username`: String (required)
- **Authorization:** Bearer Token
- **Response:** 
  - Success: HTTP 200 OK
  - Failure: HTTP 400 Bad Request or HTTP 401 Unauthorized

#### Update Password

- **URL:** `/user/update-password`
- **Method:** `PATCH`
- **Description:** Updates the password of a user.
- **Request Body:**
  - `password`: String (required)
- **Authorization:** Bearer Token
- **Response:** 
  - Success: HTTP 200 OK
  - Failure: HTTP 400 Bad Request or HTTP 401 Unauthorized

#### Delete User

- **URL:** `/user/delete-user`
- **Method:** `DELETE`
- **Description:** Deletes a user account.
- **Authorization:** Bearer Token
- **Response:** 
  - Success: HTTP 200 OK
  - Failure: HTTP 400 Bad Request or HTTP 401 Unauthorized

### Post Management

#### Create Post

- **URL:** `/userpost/post`
- **Method:** `POST`
- **Description:** Creates a new post.
- **Request Body:**
  - `title`: String (required)
  - `body`: String (required)
- **Authorization:** Bearer Token
- **Response:** 
  - Success: HTTP 200 OK
  - Failure: HTTP 400 Bad Request or HTTP 401 Unauthorized

#### Delete Post

- **URL:** `/userpost/delete-post`
- **Method:** `DELETE`
- **Description:** Deletes a post.
- **Request Body:**
  - `postId`: String (required)
- **Authorization:** Bearer Token
- **Response:** 
  - Success: HTTP 200 OK
  - Failure: HTTP 400 Bad Request or HTTP 401 Unauthorized

#### Update Post

- **URL:** `/userpost/update-post`
- **Method:** `PATCH`
- **Description:** Updates a post.
- **Request Body:**
  - `postId`: String (required)
  - `newPostTitle`: String (optional)
  - `newPostBody`: String (optional)
- **Authorization:** Bearer Token
- **Response:** 
  - Success: HTTP 200 OK
  - Failure: HTTP 400 Bad Request or HTTP 401 Unauthorized
