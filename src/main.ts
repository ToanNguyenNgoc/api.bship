import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CONST } from './utils';
import { customOptions, options } from './swagger/inddex';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document, customOptions);

  await app.listen(CONST.env.APP_PORT);
  console.log(`Run port: ${CONST.env.APP_PORT}`);
}
bootstrap();
