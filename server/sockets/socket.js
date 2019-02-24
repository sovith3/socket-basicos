const { io } = require('../server');

io.on('connection',(client)=>{
    console.log('Usuario Conectado');

    client.on('disconnect',function(){
        console.log('Usuario DEsconectado');
    })


    client.emit('enviarMensaje',{
        usuario:'administrador',
        mensaje:'asdasdasda'
    })

    //Escuchar el cliente

    client.on('enviarMensaje',(data,callback)=>{
       console.log(data);

       client.broadcast.emit('enviarMensaje',data)
        /*if(mensaje.usuario){
            callback({
                resp:'Todo salio bien'
            })
        }else{
            callback({
                resp:'todo sallio mal'
            })
        }*/


    })

})