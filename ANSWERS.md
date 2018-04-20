<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    Middleware is a function that runs in between a request and response.
    Sessions are a unique place to store data that persists between requests.
    bcrypt is a cryptographic function that has a variable difficulty.
    JWTs (JSON Web Tokens) are pieces of data stored in the browser once authenticated that are passed back to the server to confirm that a user has access to a resource.

2.  What does bcrypt do in order to prevent attacks?
    bcrypt incorporates a random salt and a variable cost factor. Just to authenticate one needs to know this salt and cost factor otherwise it is an extraordinary amount of work.

3.  What are the three parts of the JSON Web Token?
    Header - Information about the cryptographic algorithm used and type
    Payload - The data being transfered
    Signature - The header and payload encoded along with a secret string that are then all put together and run through the algorithm

4.  What are a few different places that sessions can be stored?
    Cookies, databases, JWTs, session store, memory cache
