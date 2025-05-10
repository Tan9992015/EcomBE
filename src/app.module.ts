import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ResetTokenModule } from './resetToken/resetToken.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderProductModule } from './orderProduct/orderProduct.module';
import { MailModule } from './mail/mail.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'..','public'), // trỏ tới thư mục public
    }),
    TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'Tan9992015',
    database:'demo',
    autoLoadEntities: true,
    synchronize:true,
  }),
  UserModule,
  ResetTokenModule,
  ProductModule,
  OrderModule,
  OrderProductModule,
  AuthModule,
  MailModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
