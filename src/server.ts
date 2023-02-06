import "express-async-errors" // Serve para o midlleware de error 
import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes/index.routes';
import { AppError } from './errors/AppError';

const app = express()

app.use(express.json())

app.use(routes)

app.use((error: Error, request: Request, res: Response, next: NextFunction) => {

    // Se o erro for do tipo do erro q estou tratando no caso o 'AppError'
    if (error instanceof AppError) return res.status(error.statusCode).json({status:"error", message: error.message})

    console.log(error);
    
    // Se for um erro não tratado
    return res.status(500).json({status:"error", message: `Internal error server - ${error.message}`})
})

app.listen(3333, () => console.log(`Server is runing in port 3333`));