import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Card, CardSchema } from './models/schema/card.schema';
import { CardsController } from './controllers/cards.controller';
import { CardsService } from './services/cards.service';



@Module({
  imports: [],
  controllers: [CardsController],
  providers: [CardsService]
})
export class CardsModule { }
