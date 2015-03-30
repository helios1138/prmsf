# prmsf

```bash
npm install prmsf --save
```

```js
var p = require('prmsf');
```

```js
function connect() {
  return p.wrap((cb) => MongoClient.connect('mongodb://localhost:27017/mydb', cb));
}
```

```js
function connect() {
  return p.call(MongoClient.connect.bind(MongoClient), 'mongodb://localhost:27017/mydb');
}
```

```js
var mongoConnect = p.bind(MongoClient.connect, MongoClient);

function connect() {
  return mongoConnect('mongodb://localhost:27017/mydb');
}
```
