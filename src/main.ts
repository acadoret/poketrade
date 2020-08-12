import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from'path';

import { config } from './config'
 

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /* SwaggerUI */
  const options = new DocumentBuilder()
    .setTitle(config.API_NAME)
    .setDescription(config.API_DESCRIPTION)
    .setVersion(config.API_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(config.API_DOC_ENDPOINT, app, document);
  
  /* Support for Twig  */
  app.useStaticAssets(config.APP_STATIC_ASSETS_PATH); 
  app.setBaseViewsDir(config.APP_BASE_VIEW_DIR_PATH); 
  app.setViewEngine(config.APP_VIEW_ENGINE);

  await app.listen(3000);

}
bootstrap();
