# Auth API

## Register user

POST `{{BASE_URL}}`/api/auth/register

### Request body

**NOTE** : `lastName` is optinal

```json
{
  "name": "example_user_name",
  "firstName": "example_first_name",
  "lastName": "example_last_name",
  "email": "example@email.com",
  "password": "example_passwd",
  "confirmPassword": "example_passwd"
}
```

### Response

status code : 201(created)

```json
{
  "success": true,
  "data": {
    "id": "example_id",
    "name": "example_user_name",
    "firstName": "example_first_name",
    "lastName": "example_last_name",
    "email": "example@email.com"
  },
  "message": "user registered successfully"
}
```

## Login user

POST `{{BASE_URL}}`/api/auth/login

## Request body

```json
{
  "email": "example@email.com",
  "password": "example_passwd"
}
```

## Respose

status code: 404(not found)

```json
{
  "success": "false",
  "data": {},
  "message": "user does not exists"
}
```

status code: 400(bad request)

```json
{
  "success": "false",
  "data": {},
  "message": "password does not match"
}
```

status code: 200(success)

```json
{
  "success": "true",
  "token": "eyJhbG...",
  "message": "user logged-in successfully"
}
```
