
var admin = require("firebase-admin");

var serviceAccount = require("./db/test-firebase-d8405-firebase-adminsdk-4e5p3-371b20ec25.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://test-firebase-d8405.firebaseio.com"
});
console.log("DB connected");


( async () => {
    const db = admin.firestore();
    const query = db.collection("colores");


    let id = 1;
    // let doc = await query.doc(`${id}`);
    // let resultado = await doc.create({color: "red"});
    // id += 1;
    // doc = await query.doc(`${id}`);
    // resultado = await doc.create({color: "blue"});

    // id += 1;
    // doc = await query.doc(`${id}`);
    // resultado = await doc.create({color: "green"});

    // console.log("insertado: ", resultado);

    const querySnapshot = await query.get();
    let docs = querySnapshot.docs;

    let response = docs.map( doc => ({
        id: doc.id,
        color: doc.data().color
    }));

    console.log(response);
    
    let snapshot = await query.where("color", "==", "blue").get();
    // snapshot.forEach( doc => id = doc.id);
    // doc = await query.doc(`${id}`);
    // response = await doc.update({color: "navy"});
    // console.log(response);

    snapshot = await query.where("color", "==", "green").get();
    snapshot.forEach( doc => {id = doc.id});
    doc = await query.doc(`${id}`);
    response = await doc.delete();
    console.log(response);

})()
