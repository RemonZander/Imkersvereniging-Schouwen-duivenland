import {Application} from "express";
import * as express from 'express'
import * as http from "http";
import * as bodyParser from "body-parser";

class Express {
    public app: Application = express();

    public async Express(): Promise<http.Server> {
        this.app.use(bodyParser({
            extended: false
        }))
        this.app.set("json spaces", 2);
    }
}