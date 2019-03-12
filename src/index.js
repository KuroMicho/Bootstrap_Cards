//Framework para crear un servidor web facilmente

const express = require('express')

//Iniciamos el servidor web desde el metodo express()

const app = express()

//Metodo que permite al servidor web escuchar en puerto especifico


app.listen(3000,()=>{
    console.log("El servidor esta corriendo en http://localhost:3000/")
    
})