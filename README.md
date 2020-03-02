# Express Simple Server

This is a simple NodeJS application that servers a simple API.

To run the app, open the prompt and run "node index.js".

## How to use the server

You can add values to an arbitrary key by sending a post request to the following endpoint:

http://localhost:3000/metric/{KEY_NAME}

the post body needs to be a JSON, with the following format:

    {
        value: 0
    }

To retrieve these data, simply do a post request to the following endpoint:

http://localhost:3000/metric/{KEY_NAME}

The endpoint will respond the sum of the values you send in the last hour.

## Some technical details

 - The server is built with Express;

 - The database operations are separated in the "database" folder;

 - The routes implementations are in the "routes" folder;

 - The index file runs the server and includes the routers. The routers retrieve/insert data in the database and return an answer;

 - The answer follows the JSend pattern (a simple specification for JSON  - communication);