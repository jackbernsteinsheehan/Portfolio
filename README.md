# Newsletter Backend

This is a simple backend server for handling newsletter subscriptions.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Subscribe to Newsletter
- **URL**: `/api/subscribe`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Success Response**: 
  - Status: 200
  ```json
  {
    "message": "Successfully subscribed to newsletter",
    "email": "user@example.com"
  }
  ```
- **Error Responses**:
  - Status: 400 - Invalid email or missing email
  - Status: 409 - Email already subscribed

### View All Subscriptions (Testing Only)
- **URL**: `/api/subscriptions`
- **Method**: `GET`
- **Response**:
  ```json
  {
    "subscriptions": ["email1@example.com", "email2@example.com"]
  }
  ``` 