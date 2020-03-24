//un callback es una función que se ejecuta dentro de
//una función o que se ejecuta cuando ocurre 'x' acción

//setTimeout(()=>{
//    console.log('hola mundo')
//}, 4000)


getUsuarioById = (id, callback) => {
    const user = {
        nombre: 'Moy6',
        id
    }

    if(id ===20){
        callback('el usuario no existe en la BD')
    }else{
        callback(null, user);
    }

}

getUsuarioById(50, (err, user)=>{

    if(err){
        return console.log(err);
    }

    console.log('usuario de bd', user)
});