import {Request, Response} from "express";

import {Connection} from "../factory/fac";
import {LightControlController} from "../controllers/LightControlController";
import {IRouterMatcher} from "express-serve-static-core";
import * as core from "express-serve-static-core";

export class Routes {
    private _app: core.Express ;

    public _lightControlController: LightControlController = new LightControlController();


    constructor(app: core.Express){
        (new Connection());
        this._app = app;
    }


    public routes(): void {
        this._app.get('/ping-test', (req: Request, res: Response) => {
                res.status(200).send({
                    apk: Date.now()
                })
            });

        this._app.route('/find-all')
            .get((req: Request, res: Response) => {
                this._lightControlController.findAll(req, res);
            });

        this._app.route('/create')
            .get((req: Request, res: Response) => {
                this._lightControlController.create(req, res);
            });
    }
}
