import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path'
import * as cookieParser from 'cookie-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  app.use(cookieParser())
  console.log('Template dir:', path.join(process.cwd(), 'src', 'mailtemplate'));
}
bootstrap();
