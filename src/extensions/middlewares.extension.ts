import { INestApplication } from "@nestjs/common";
import helmet from "helmet";

export default class MiddlewaresExtension {
    static setup(app: INestApplication) {
        app.use(helmet());
        app.enableCors();
    }
}