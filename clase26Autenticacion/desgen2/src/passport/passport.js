const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
let usuarios = [];


//-----------------
//
//    RECORDAR QUE POR DEFECTO PASSPORT TOMA USERNAME COMO DATO,
//    SI LO CAMBIAMOS (POR NOMBRE, MAIL U OTRA COSA) HAY QUE AGREGAR
//    EN EL MIDDLEWARE EL DATO usernameField: 'nombre'
//
//-------------------

passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) { 

    //busco usuario
    let user = usuarios.find(usuario => usuario.username==username)
    if(!user) return done(null, false) 
    //valido password
    let credencialesOk = user.username==username && user.password==password
    if(!credencialesOk) return done(null, false) 

    return done(null, user);
  })
);

passport.use('register', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, username, password, done) {
    findOrCreateUser = function(){
        //busco usuario
        let usuario = usuarios.find(usuario => usuario.username==username)
        if(usuario) return done(null, false)
        //sino existe lo creo
        let user = {};
        user.username = username;
        user.password = password;
        user.contador = 0;
        usuarios.push(user)
        return done(null, user);
    }
    process.nextTick(findOrCreateUser);
  })
)

passport.serializeUser(function(user, done) {
    done(null, user.username);
});
   
  passport.deserializeUser(function(username, done) {
    let usuario = usuarios.find(usuario => usuario.username == username)
    done(null, usuario);
});