import express from 'express';
import cors from 'cors';
import {router} from '../routes/usuarios.js'


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        this.middlewares();

        this.routes();

    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //parseo y lectura del body
        this.app.use(express.json());

        //Drectotio publico
        this.app.use(express.static('public'))
    }


    routes(){

        this.app.use(this.usuariosPath, router);
    }


    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Corriendo en puerto ', this.port);
            });
    }
}


export {Server};