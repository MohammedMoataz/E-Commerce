import helmet from "helmet";

export default class MiddlewaresExtension {
    static setup(app: any) {
        app.use(helmet());
        app.enableCors();
    }
}