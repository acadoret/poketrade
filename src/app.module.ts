import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/poketrade'),
    CardsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
