import { Model } from 'mongoose';
import { Injectable, Inject, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from './schema/card.schema';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
    // constructor(@Inject('CARD_MODEL') private cardModel: Model<Card>,) { }
    constructor(
        @InjectModel(Card.name) 
        private cardModel: Model<Card>
    ) { }

    async create(createCardDto: CreateCardDto): Promise<Card> {
        const createdCard = new this.cardModel(createCardDto);
        return createdCard.save();
    }

    async findAll(page = 1, pageSize = 10): Promise<Card[]> {
        return this.cardModel.find().skip(page*pageSize).limit(pageSize).exec();
    }

    async findById(id: string): Promise<Card> {
        return this.cardModel.findById(id).exec();
    }

    // async update(id: string, card: CreateCardDto): Promise<Card> {
    //     this.cardModel.update({ id: id}, card);
    // }

    async deleteById(id: string): Promise<boolean>{
        this.cardModel.deleteOne({ id: id }).then(() => {
            console.log(`Card #${id} deleted`);
            return true;
        }).catch(function (error) {
            console.log(error); 
        }); 
        return false;
    }    
}