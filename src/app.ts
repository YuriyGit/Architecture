import express, {Express} from "express";
import 'dotenv/config'
import {userRouter} from './users/users'
import {Server} from 'http'

export class App {
    app: Express;
    server: Server
    PORT: number;

    constructor() {
        this.app = express();
        this.PORT = Number(process.env.PORT) || 3000;
        this.server = this.app.listen(this.PORT);
    }

    useRouter() {
        this.app.use('/users', userRouter);
    }


    public async init() {
        this.useRouter();

        this.app.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT}`);
        });
    }
}