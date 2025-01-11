import helmet from "helmet";

export default class MiddlewaresExtension {
    static middlewares(app: any) {
        app.use(helmet());
        app.enableCors();
    }
}