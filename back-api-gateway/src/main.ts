import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core/core.module';
import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';
import configureSwagger from './core/swagger/configureSwagger';

//TODO: Корсы
//TODO: Термиус (хелч чек)
//TODO: свагер ресепшены

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  const configService = app.get(ConfigService);
  
  configureSwagger(app);
  
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
