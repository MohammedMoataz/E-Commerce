import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default class SwaggerExtension {
    private static readonly config = new DocumentBuilder()
        .setTitle('E-Commerce APIs Documentation')
        .setDescription('The E-Commerce APIs Documentation')
        .setVersion('1.0')
        .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name: 'JWT',
            description: 'Enter JWT token',
            in: 'header',
        }, 'JWT')
        .setContact(
            'Mohammed Moataz',
            'https://mohammed-moataz.vercel.app/',
            'imohammedmoataz@gmail.com'
        )
        .build();

    static setup(app: INestApplication) {
        const documentFactory = () => SwaggerModule.createDocument(
            app,
            SwaggerExtension.config, {
            autoTagControllers: true,
            deepScanRoutes: true,
        });

        SwaggerModule.setup('api-docs', app, documentFactory);
    }
}