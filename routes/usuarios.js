import {Router} from 'express';
import { usuariosPut, usuariosGet, usuariosDelete, usuariosPatch, usuariosPost } from '../controllers/usuarios.js';

const router = Router();

router.get('/', usuariosGet);

  router.put('/:id', usuariosPut);

  router.post('/', usuariosPost);

  router.delete('/', usuariosDelete);

  router.patch('/', usuariosPatch);




export {
    router
}