# BackEnd
Repository for Project's Back End

[api](https://ptbw191-secretfamilyrecipes.herokuapp.com/)


### Schemas

```
// Users

{

Id: Integer

username: string

email: string 

password: string

}

```

### Endpoints

```
// Get All Recipes: "/"


// Registration (POST):  "/api/auth/register"

Required Fields:

{

username: " ",

email : " ",

password : "" 

}

Status Codes:

-201: Success
-500: Server Error



// Login (POST):  "/api/auth/login"

Required Fields:

{

 username : " ",
 password : ""

}

Status Codes:

-200: Success
-401: Bad Request ~ Invalid Credentials
-500: Server Error

```

