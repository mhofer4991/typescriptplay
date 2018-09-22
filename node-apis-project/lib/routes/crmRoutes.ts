// /lib/routes/crmRoutes.ts

import {Request, Response} from "express";

export class Routes {       
    public routes(app): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        }).post((req: Request, res: Response) => {
            console.log('post :OOOOO');
            res.status(200).send({
                message: 'yeah post :)',
                body: req.body
            }) 
        })
    }
}