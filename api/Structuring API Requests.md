# API Endpoints

## Public API Endpoints

**Definition:**  
Routes that can be accessed without authentication. Any client can send requests without a token.

**Characteristics:**

- No login required.  
- No authentication token needed.  
- Used for public or non-sensitive data.  

**Purpose:**

- Show public content.  
- Allow account creation.  
- Enable login operations.  

---

## Private API Endpoints

**Definition:**  
Protected routes that require authentication, and sometimes authorization. Only registered users with a valid token can access them.

**Characteristics:**

- Require a token.  
- May depend on user roles.  
- Handle sensitive or personal data.  

**Purpose:**

- Protect user data.  
- Prevent unauthorized access.  
- Control sensitive operations.  

---

## API Endpoint Components

An API endpoint is the URL where a client sends a request to get data or perform an operation.

**Components:**

1. **Method** – Type of operation (`GET`, `POST`, `PUT`, `DELETE`).  
2. **Path** – The route to a resource.  
3. **Base URL** – The main URL of the API.  

---

## Path Parameters

**Definition:**  
Values in the URL to identify a specific resource.  

**Purpose:**  

- Specify which item to fetch, update, or delete.  

---

## Query Parameters

**Definition:**  
Values after `?` in the URL that provide extra information about the request.  

**Purpose:**  

- Used for filtering, searching, or sorting.  
- Multiple parameters are separated with `&`.
