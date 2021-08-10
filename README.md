# book-search-engine

## Summary:

For this project, a fully operational application was provided in the source code, and the work entailed modifying the initial code work with the apollo server and client as well as Graphql instead of the regular RESTful API that was provided.

For this, the server.js was modified to use the apollo server, and the app.js to use the apollo client. Also, a schema folder was created in the server folder to contain the Graphql type definitions, and resolvers files, as well as queries and mutation files, were added to the utils folder in the client folder.

Finally, the code of the components was revised to use the queries and mutations from Graphql instead of the original calls to the express server.

## Functionality:

This application allows the user to search for books using the google books API, then add any given book to the user books selection. Then the user can choose to remove a book from the list at any given time.

## Deployed App Link:

[Google Books App](https://quiet-coast-77314.herokuapp.com/)

## Images:

![Home Page](/images/homepage.png)

![Login Form](/images/login-form.png)

![Sign-up Form](/images/sign-up-form.png)

![Saved Books Page](/images/saved-books.png)
