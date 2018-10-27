import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var compiler = webpack({
    plugins: [
        new HtmlWebpackPlugin()
    ]
});

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    logLevel: 'silent'
});

import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(devMiddleware);
  app.use(require('webpack-hot-middleware')(compiler, {
      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
  await app.listen(3000);
}
bootstrap();
