import {Router} from 'express';
import {CreateBookController} from "./controllers/CreateBookController"

const router = Router();

const createBookController = new CreateBookController();

router.post('/books',createBookController.handle);

export {router};