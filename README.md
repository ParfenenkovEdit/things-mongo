# Things BE v2

## Using this repository 

### Prerequisites

To use this repository, you need the following installed locally:

- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/)

### Start

1. Clone the repository and navigate to the directory

```bash
https://github.com/rolling-scopes-school/parfenenkovedit-ST2021Q1.git
cd things-mongo
```

2. Install dependencies

```bash
npm i
```
3. Create access.log and .env configuration file

3. Run one of the commands below

## Commands

Development server

```bash
npm run dev
```

Production build

```bash
npm run start
node index.js
```

## Heroku deploy

[https://things-mongo-parfenenkovedit.herokuapp.com/api/v2/things/](https://things-mongo-parfenenkovedit.herokuapp.com/api/v2/things/)

## Usage guide

`GET api/v2/things -> list of all things`  
`GET api/v2/things/:id -> select an existing thing`  
`POST api/v2/things -> create a new thing`  
`PUT api/v2/things/:id -> update an existing thing by its own id`  
`DELETE api/v2/things/:id -> delete an existing thing by its own id`

Your request should include:
* **title (required)** - string value
* **body (optional, null by default)** - an array of property objects. Each object should contain key and value fields

Example:
```json
    {
        "title": "Some title",
        "body": [
            {
                "key": "key for value",
                "value": "value for the key"
            },
            {
                "key": "another key for value",
                "value": "another value for the key"
            }
        ]
    }
```
