import {response, request} from 'express';



const usuariosGet = (req = request, res = response) => {

  const {q, nombre =  'no name', apikey} = req.query;

    res.status(500).json({
        msg:'get API - controlador',
        q,
         nombre,
         apikey
    })
  }

const usuariosPut = (req, res = response) => {

  const {id} = req.params;

    res.status(500).json({
        msg:'put API - controlador',
        id
    })
  }


const usuariosPost = (req, res = response) => {

  const {nombre, edad} = req.body;

    res.status(201).json({
        msg:'post API - controlador',
        nombre, 
        edad
    })
  }

const usuariosDelete = (req, res = response) => {
    res.json({
        msg:'delete API - controlador'
    })
  }

const usuariosPatch = (req, res = response) => {
    res.json({
        msg:'patch API - controlador'
    })
  }


  export {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
  }