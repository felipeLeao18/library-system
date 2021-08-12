import { Router } from "express";
import { CreateBookController } from "./controllers/CreateBookController";
import { ListBookController } from "./controllers/ListBooksController";

const router = Router();

const createBookController = new CreateBookController();
const listBooksController = new ListBookController();

router.post("/books", createBookController.handle);
router.get("/books", listBooksController.handle);

export { router };
