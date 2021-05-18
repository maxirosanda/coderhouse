const normalizr = require("normalizr");
const normalizar = normalizr.normalize;
const denormalizar = normalizr.denormalize;
const schema = normalizr.schema;
const util = require('util');

const originalData = {
    "id": "123",
    "author": {
      "id": "1",
      "name": "Paul"
    },
    "title": "My awesome blog post",
    "comments": [
      {
        "id": "324",
        "commenter": {
          "id": "2",
          "name": "Nicole"
        }
      }
    ]
}
// Define a users schema
const user = new schema.Entity('users');
 
// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
});
 
// Define your article
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
});
 
const normalizedData = normalizar(originalData, article);


// console.log("-------------OBJETO ORIGINAL---------------")
console.log(JSON.stringify(normalizedData).length)


console.log("-------------OBJETO NORMALIZADO---------------")
print(normalizedData);
console.log(JSON.stringify(normalizedData).length)


// console.log("-------------OBJETO DENORMALIZADO---------------")
// print(dataDeNormalizada);
// console.log(JSON.stringify(dataDeNormalizada).length)

function print(objeto) {
    console.log(util.inspect(objeto,true,12,true))
}
