import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const options = require('../client/webpack/webpack.dev.js');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var compiler = webpack(options);
const devMiddleware = require('webpack-dev-middleware')(compiler);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(devMiddleware);
  app.use(require('webpack-hot-middleware')(compiler));
  
  await app.listen(3000);
}
bootstrap();
