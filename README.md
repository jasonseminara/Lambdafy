# Lambdafy


### Summary
##### A music playlist sharing application that allows users to add their favorite Spotify playlists to a community board. In additionally, each user may edit or delete their posting at anytime. This project was built following the MVC model.


### App Screenshot

![Main Page](https://user-images.githubusercontent.com/40147976/43845601-5d8d15d0-9afa-11e8-9151-f38a850dbb3d.png)


### Frameworks Used
##### JavaScript ES6, Node.js, Express.js, PostgreSQL, EJS, CSS.

### Middleware Dependencies Used
##### Morgan, PG-Promise, Body-Parser, Nodemon, Method-Override


### Project Drafts

##### User Stories:
![User Stories](https://user-images.githubusercontent.com/40147976/43845610-60b2f612-9afa-11e8-9e9a-0524e3af8126.jpg)

##### Entity-Relationship Diagrams:
![Entity-Relationship Diagram (Original)](https://media.git.generalassemb.ly/user/14920/files/c8791ebc-9581-11e8-9471-7da461a3225c)

![Entity-Relationship Diagram (Adjusted](https://user-images.githubusercontent.com/40147976/43845607-5f2de4aa-9afa-11e8-88be-8c035b2b6978.jpg)

##### Wireframes:
![Wireframe](https://media.git.generalassemb.ly/user/14920/files/c1b3cff0-9581-11e8-9e13-9520d83eb78b)

### Code Snippet Highlight

##### Controller Functions for Post and Put HTTP Methods:
![screen shot 2018-08-08 at 10 28 48](https://user-images.githubusercontent.com/40147976/43846036-5b88d700-9afb-11e8-865c-01ca30c26847.png)

##### This snippet was particularily challenging for me to get working properly. The create function requires an object parameter with the key value pairs I had specified in my PostgreSql query in my model. 

##### Model Function for PostgrSQL Insert:
![screen shot 2018-08-08 at 10 29 49](https://user-images.githubusercontent.com/40147976/43846078-74b54b46-9afb-11e8-96ca-417d0121ce9b.png)

##### Passing in any other parameter will not match the SQL table template, and will result in an error. This is also the case when updating an existing entry from the database.


### Features in Progress
##### This project was intended to implement Spotify's Web Api to fetch artists, albumns, tracks, and other metadata where users can connect their account, search Spotify's database, create and share playlists. In addition, user authentication will be added to allow users to log in and access a user-specific section.


### Video (Duration: 14:18)
##### [Walkthrough Video](https://youtu.be/2G87EWff1bg)

### Instructions For Running Code
##### * Clone this repository in your terminal, and run the follow commands:
#####   1. NPM init
#####   2. NPM install express morgan pg-promise body-parser method-override ejs
#####   3. Node server.js

### Resources Used
##### In-class examples:
######  * [Quote-sta-gram](https://git.generalassemb.ly/wdi-nyc-lambda/quote-sta-gram)
######  * [Soda-lab](https://git.generalassemb.ly/wdi-nyc-lambda/soda-lab)


###### Conceptualized and Coded by Kendrick Z.
