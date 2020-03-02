# Name Counter 

This application reads two text files, one file contains a list of first names where the other is a book. The first names file is used as a reference in counting the number occurrences a listed name appears within the book. 

### Installing dependencies

```bash
$ npm install
```

## Getting Started

```bash
$ node server 
$ npm run watch
```
Once server is running you can test within browser or postman using URL - http://localhost:{port}
endpoints: 
- /name-count
- /name-count/{name-params}

You can see the full list of name counts within name-counts.txt once script has run. 

## Built With

* [Node](https://nodejs.org/en/docs/) - Dependency Management
* [Express](https://expressjs.com/) - The web framework used
