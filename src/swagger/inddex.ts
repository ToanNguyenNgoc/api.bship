import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';
import { CONST } from 'src/utils';

export const API_TAG = {
  BSHIP: 'BSHIP',
  Auth: 'Auth',
  User: 'User',
  Ticket: 'Ticket',
  Order: 'Order',
  Init: 'Init',
  Media: 'Media',
};

export const options = new DocumentBuilder()
  .setTitle('Api')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag(API_TAG.BSHIP)
  // .addTag(API_TAG.User)
  // .addTag(API_TAG.Ticket)
  // .addTag(API_TAG.Order)
  // .addTag(API_TAG.Media)

  // .addTag(API_TAG.Init)
  // .addApiKey(
  //   {
  //     type: 'apiKey',
  //     name: 'x-api-key',
  //     in: 'header',
  //   },
  //   'x-api-key',
  // )
  .addBearerAuth(
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: CONST.name.JWT,
      description: 'Enter JWT token',
      in: 'header',
    },
    CONST.name.JWT,
  )
  .build();
export const customOptions: SwaggerCustomOptions = {
  customSiteTitle: 'Bship',
};
