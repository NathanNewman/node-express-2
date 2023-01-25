### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  - Jason Web Token, used to authenticate data sent to the server.

- What is the signature portion of the JWT?  What does it do?
  - It is a combination of the encoded header, payload, and secret key.
  - It is appended to the end of the JWT, separated from the header and payload by a ".".
  - Used for authentication.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  - The payload is encoded using Base64 encoding. 
  - Base64 encoding is reversible and therefore not considered encryption.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  - When a user logs in to a website, the server authenticates them.
  - The server creates a JWT and sends it to the browser to be stored as a cookie.
  - The user sends the JWT back to the server during requests that require it.
  - The server authenticates the JWT. It's handy to use middleware to accomplish this.

- Compare and contrast unit, integration and end-to-end tests.
  - Unit tests test individual functions or methods.
  - Integration tests test how different parts of an application communicate and work together.
  - End-to-end tests test the final product. Usually testing from the user prespective.
  - Though end-to-end tests can be coded, they are also often conducted using testers.
  - Unit tests are less complicated than Integration tests, which are less complicated than End-to-end tests.

- What is a mock? What are some things you would mock?
  - A dummy version of a software component used for testing purposes.
  - A database is something that is commonly mocked.

- What is continuous integration?
  - A software development practice where developers integrate their code into a shared repository.
  - The repository has automated build and test processes.
  - The purpose is to quickly identify integration problems.

- What is an environment variable and what are they used for?
  - A value that can be passed to an application at runtime.
  - They are used for sensitive information like secret keys and api keys.

- What is TDD? What are some benefits and drawbacks?
  - Test Drive Development is a practice where developers write tests before writing code for the application.
  - It can make debugging easier and often causes code to be cleaner.
  - It can be difficult to setup, as the developer has to fully understand the code before writing it.

- What is the value of using JSONSchema for validation?
  - It prevents users from inserting invalid information into the database.

- What are some ways to decide which code to test?
  - Code coverage, test the code that will be used the most.
  - Risk assessment, test the code that poses the greatest risk to the programs operation.
  - Regression testing, test the code that has been modified most recently.
  - Defect density, test the code that has the most defects.

- What does `RETURNING` do in SQL? When would you use it?
  - RETURNING gets data from a non-SELECT clause.
  - INSERT and DELETE clauses change information in the database, but do not by default return a value.

- What are some differences between Web Sockets and HTTP?
  - Web Sockets are dynamic and change data on a web page without the need of a page refresh.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
    - Hard to say. 
    - I slightly prefer the python syntax to javascript. The need for curly braces in functions and classes increases the chance for mistakes. Python requires proper indentation, but that's common practice in javascript anyway as it makes code more readable.
    - Setting up virtual environments in flask was more tedious than not having to in express.
    - Promises in javascript are more complicated, but also allow for more functionality by making multiple request at a time, effectively speeding up runtime.
    - Both python and node have many additional libraries, so I think each has plenty of options.
    - Overall I think Flask is slightly easier to use, but Express might be slightly more functional.
    - I think Express is typically better for web development, but Flask might be better when web development isn't the only purpose. I know python is used a lot in data science so a Flask webpage for a data science team might make more sense than Express.
    
