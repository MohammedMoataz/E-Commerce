import { INestApplication, ValidationPipe } from "@nestjs/common";

export default class ValidationPipes {
    static setup(app: INestApplication) {
        app.useGlobalPipes(new ValidationPipe());
    }
}