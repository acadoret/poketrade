import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { config } from './config'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { WebsiteModule } from './website/website.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${config.DB_MONGO_HOST}/${config.DB_MONGO_NAME}`),
    CardsModule,
    DatabaseModule,
    WebsiteModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
