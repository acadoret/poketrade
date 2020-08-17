import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'; 

import { config } from './config'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({ rootPath: config.APP_STATIC_ROOT_PATH,}),
    MongooseModule.forRoot(`mongodb://${config.DB_MONGO_HOST}/${config.DB_MONGO_NAME}`),
    CardsModule,
    DatabaseModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
