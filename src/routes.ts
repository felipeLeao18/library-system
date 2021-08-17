import { Router } from "express";
import { CreateBookController } from "./controllers/CreateBookController";
import { GetBookController } from "./controllers/GetBookController";
import { ListBookController } from "./controllers/ListBooksController";


const router = Router();
const createBookController = new CreateBookController();
const listBooksController = new ListBookController();
const getBookController = new GetBookController();

router.post("/books", createBookController.handle);
router.get("/books", listBooksController.handle);
router.get('/books/:id', getBookController.handle);

export { router };
