


        var socket = io();

        // LOS .on son para escuchar suscesos
        socket.on('connect', function(){
            console.log('Conectado al servidor');
        })

        socket.on('disconnect',function(){
            console.log('Perdimos conexion con el servidor');
        })

        //Los .emmit son enviar informacion

        socket.emit('enviarMensaje',{
            usuario: 'Javier',
            mensaje:'Hola mundo'
        },function(resp){
            console.log('respuesta server:',resp);
        });

        socket.on('enviarMensaje',function(mensaje){
            console.log('Servidor :' , mensaje);
        }) 
