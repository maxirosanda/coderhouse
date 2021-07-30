import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Alta documentacion')
    .setDescription('Documentacion de autitos chocadores')
    .setVersion('1.0.2')
    .addTag('autos')
    .build()

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
