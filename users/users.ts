import express, {Request, Response, NextFunction} from "express";

const userRouter = express.Router();

userRouter.post('/login', (req: Request, res: Response) => {
    res.status(201);
    res.send('Login')
});

userRouter.post('/register', (req: Request, res: Response) => {
    res.send('Register')
})

export { userRouter }