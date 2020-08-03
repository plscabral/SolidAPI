import { Router } from "express";
import { createUserController } from "./useCases/CreateUser/Index";

const router = Router();

router.post('/users', (req, res) => {
    return createUserController.handle(req, res);
});

export { router };