(async () => {
    
    const db = admin.firestore();
    const query = db.collection("usuarios");

    try {
        let id = 1;
        let doc = query.doc(`${id}`);
        // await doc.create({nombre: "jose", dni: 11223344});
        // id++;
        // doc = query.doc(`${id}`);
        // await doc.create({nombre: "Ana", dni: 22334455});
        // id++;
        // doc = query.doc(`${id}`);
        // await doc.create({nombre: "Diego", dni: 33445566});

        console.log("Datos insertados");

        const querySnapshot = await query.get();
        let docs = querySnapshot.docs;

        let response = docs.map( (doc) => ({
            id: doc.id,
            nombre: doc.data().nombre,
            dni: doc.data().dni
        }));
        console.log(response);

        id = 2;
        doc = query.doc(`${id}`);
        item = await doc.get();
        response = item.data();
        console.log(response);

        id = 2;
        doc = query.doc(`${id}`);
        item = await doc.update({dni: 55443322});
        console.log("El usuario a sido actualizado", item);
        
        id = 1;
        doc = await query.doc(`${id}`);
        item = await doc.delete();
        console.log("El usuario ha sido borrado exitosamente", item);
        
    } catch (e) {
        console.error(e)
    }
})()