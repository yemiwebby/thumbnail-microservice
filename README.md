### Thumbnail and patching micro service

This platform provides a simple stateless microservice in Nodejs, with the following functionality

* Authentication
* JSON Patching
* Image thumbnail generation


## Features

* Users can login and receive a token to access the protected Routes
* Apply JSON Patch to a valid JSON object and return a resulting JSON Object
* Generate a thumbnail by providing an Image public URL


## API endpoints and functions

Type of request | route(endpoint)       | Description
----------------| ----------| --------------------
POST   |api/v1/auth/login|Authenticate and login a user
POST   |api/v1/json/patch|Patch a valid JSON object and return a resulting JSON Object
POST   |/api/v1/create/thumbnail|Accept a public URL and return a thumbnail


## Getting Started
Before proceeding with installation. Make sure you have [Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/)

### Create a parent project Directory
```bash
mkdir projectFolder
```

### Clone the Repo

```bash
$ git clone https://github.com/yemiwebby/thumbnail-microservice
```

### Navigate

```bash
$ cd thumbnail-microservice
```

### Install Dependencies
```bash
$ npm install
```

### Set up Private Key
Create a new file in the root directory `.env` and add a secret Key

```bash
SECRET_KEY=YOUR_PRIVATE_KEY_HERE
```

### Start the server
```bash
npm start
```

### Run Test
```bash
npm test
```

### Testing With Postman

#### For Authentication

![Authentication](https://user-images.githubusercontent.com/19610753/39090940-8ce7635c-45e2-11e8-8dbf-520d40ae7d8f.gif)

#### For Patching a JSON Object
Example: -

```bash
{
	"object": {
       "orders": [{"id": 123}, {"id": 456}, {"id": 789}],
       "total": 20.00,
       "currency": "USD"
    },
    
    "patch": [
      { "op": "add", "path": "/total", "value": 20.00 },
      { "op": "add", "path": "/currency", "value": "USD" }
    ]
}    
```

![Patch JSON](https://user-images.githubusercontent.com/19610753/39091395-f5dc5f4a-45ea-11e8-8750-f5cf24543654.gif)

#### For generating a thumbnail
Use a Valid Image URL

![Generate Thumbnail](https://user-images.githubusercontent.com/19610753/39091402-12dbd40e-45eb-11e8-9b57-bc9bdaa6e57c.gif)

### API Docs
After installing the application. Navigate to http://localhost:3000/api-docs/

### Author
[Olususi Oluyemi](https://twitter.com/yemiwebby)