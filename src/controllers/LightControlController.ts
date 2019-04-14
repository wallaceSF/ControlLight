import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

import {ContactSchema} from "../models/models";
import {LightControlSchema} from "../models/modelst";

const Contact = mongoose.model('Contact', ContactSchema);
const LightControl = mongoose.model('LightControl', LightControlSchema);

export class LightControlController {

    public create(req: Request, res: Response) {
        let newLightControl = new LightControl({amount: 193, unitPrice: 0.81399});

        newLightControl.save((err, contact) => {
            if(err){
                res.send(err);
            }
        });

        res.json("{teste: 1}");
    }

    public findAll (req: Request, res: Response) {

        // let newContact = new Contact( {firstName:'teste', lastName:'j'});
        //
        // newContact.save((err, contact) => {
        //     if(err){
        //         res.send(err);
        //     }
        //  //   res.json(contact);
        // });

        LightControl.find({}, (err, contact) => {
            if(err){
                console.log('anm,anam,n');
                res.send(err);
            }

            console.log(contact);
            res.json(contact);
        });



    }


}