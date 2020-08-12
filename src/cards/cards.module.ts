import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CardSchema, Card } from './schema/card.schema';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { cardsProviders } from './cards.providers';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }])
  ],
  controllers: [CardsController],
  providers: [CardsService, cardsProviders]
})
export class CardsModule { }
