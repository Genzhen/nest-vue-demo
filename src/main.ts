import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const resolve = path => require('path').resolve(__dirname, path);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useStaticAssets(resolve('../build'));
  app.setBaseViewsDir(resolve('../build'));

  await app.listen(3000);
}
bootstrap();
