import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './schema/card.schema';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
    constructor(@Inject('CARD_MODEL') private cardModel: Model<Card>,) { }

    async create(createCardDto: CreateCardDto): Promise<Card> {
        const createdCard = new this.cardModel(createCardDto);
        return createdCard.save();
    }

    async findAll(): Promise<Card[]> {
        return this.cardModel.find().exec();
    }
}