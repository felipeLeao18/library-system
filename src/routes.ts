import { Router } from "express";
import { CreateBookController } from "./controllers/CreateBookController";
import { GetBookController } from "./controllers/GetBookController";
import { ListBookController } from "./controllers/ListBooksController";
import { UpdateBookController } from "./controllers/UpdateBookController";
import { DeleteBookController } from "./controllers/DeleteBookController";


const router = Router();
const createBookController = new CreateBookController();
const listBooksController = new ListBookController();
const getBookController = new GetBookController();
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();

router.post("/books", createBookController.handle);
router.get("/books", listBooksController.handle);
router.get('/books/:id', getBookController.handle);
router.put('/books/:id', updateBookController.handle);
router.delete('/books/:id', deleteBookController.handle);

export { router };
