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

// Recipes

{

id: integer
title: String
ingredients: String
instructions: string
category_id: integer [1 = Breakfast, 2 = Lunch, 3 = Dinner]
user_id: integer


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




//Recipes by username (GET): "/api/users/:id/recipes"


//New Recipe (Post): "/api/recipe"

Required Fields: 

{

title: "",
ingredients: "",
instructions: "",
category_id: "[1 = Breakfast, 2 = Lunch, 3 = Dinner]"
user_id: ""

}


//Update Recipe (PUT) : "/api/recipe/:id"


//Delete Recipe (DELETE) : "/api/recipe/:id"

```

