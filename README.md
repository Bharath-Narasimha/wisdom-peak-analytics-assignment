
# Customer Management API

This API provides basic CRUD operations and search/filter functionalities for managing customer records. It allows you to create, read, update, delete, and search for customers based on various criteria.

## Features

- **Create a Customer**  
  Create a new customer with the details: `name`, `email`, `phone`, and `company`.

- **Get All Customers**  
  Retrieve a list of all customers.

- **Update a Customer**  
  Update an existing customer by their unique `id`. You can modify their `name`, `email`, `phone`, and `company`.

- **Delete a Customer**  
  Delete an existing customer by their unique `id`.

- **Search Customers**  
  Search for customers by `name`, `email`, or `phone`. It supports partial matching.

- **Filter Customers by Company**  
  Filter customers by the `company` field to get customers from a specific company.

## Endpoints

### 1. **Create a Customer**

- **URL:** `/customers`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "company": "Company ABC"
  }
  ```
- **Response:**  
  - **Status Code:** 201  
  - **Body:**
    ```json
    {
      "message": "Customer created",
      "customer": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "123-456-7890",
        "company": "Company ABC"
      }
    }
    ```

---

### 2. **Get All Customers**

- **URL:** `/customers`
- **Method:** `GET`
- **Response:**  
  - **Status Code:** 200  
  - **Body:**  
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "123-456-7890",
        "company": "Company ABC"
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com",
        "phone": "987-654-3210",
        "company": "Company XYZ"
      }
    ]
    ```

---

### 3. **Update a Customer**

- **URL:** `/customers/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "name": "Johnathan Doe",
    "email": "johnathan@example.com",
    "phone": "123-456-7891",
    "company": "Company ABC"
  }
  ```
- **Response:**  
  - **Status Code:** 200  
  - **Body:**
    ```json
    {
      "message": "Customer updated",
      "customer": {
        "id": 1,
        "name": "Johnathan Doe",
        "email": "johnathan@example.com",
        "phone": "123-456-7891",
        "company": "Company ABC"
      }
    }
    ```

---

### 4. **Delete a Customer**

- **URL:** `/customers/:id`
- **Method:** `DELETE`
- **Response:**  
  - **Status Code:** 200  
  - **Body:**
    ```json
    {
      "message": "Customer deleted"
    }
    ```

---

### 5. **Search Customers**

- **URL:** `/customers/search`
- **Method:** `GET`
- **Query Parameters:**  
  - `query` (string): Search term for `name`, `email`, or `phone`.
  
- **Example URL:** `/customers/search?query=john`
- **Response:**  
  - **Status Code:** 200  
  - **Body:**  
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "123-456-7890",
        "company": "Company ABC"
      }
    ]
    ```

---

### 6. **Filter Customers by Company**

- **URL:** `/customers/filter`
- **Method:** `GET`
- **Query Parameters:**  
  - `company` (string): The company to filter customers by.
  
- **Example URL:** `/customers/filter?company=Company ABC`
- **Response:**  
  - **Status Code:** 200  
  - **Body:**  
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "123-456-7890",
        "company": "Company ABC"
      }
    ]
    ```

---

## Technologies Used
- **Node.js** - Server-side JavaScript environment.
- **Express.js** - Web framework for Node.js.
  
