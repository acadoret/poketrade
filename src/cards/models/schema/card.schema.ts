import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Card extends Document {
    @Prop({ required: true })
    id: string;
    @Prop({ required: true })
    name: string;
    @Prop({ required: true })
    nationalPokedexNumber: number;
    @Prop()
    imageUrl: string;
    @Prop()
    imageUrlHiRes: string;
    @Prop([String])
    types: string[]
    @Prop()
    supertype: string
    @Prop()
    subtype: string
    @Prop()
    evolvesFrom: string
    @Prop()
    hp: string;
    @Prop([String])
    retreatCost: string[];
    @Prop()
    convertedRetreatCost: number;
    @Prop()
    number: string;
    @Prop()
    artist: string;
    @Prop()
    rarity: string;
    @Prop()
    series: string;
    @Prop()
    _set: string;
    @Prop()
    setCode: string;

    @Prop(raw({
        firstName: { type: String },
        lastName: { type: String }
    }))
    details: Record<string, any>;

    @Prop()
    attacks: [{
        name: string,
        text: string,
        cost: [string],
        damage: string,
        convertedEnergyCost: number,
    }]

    @Prop()
    weaknesses: [{
        type: string,
        value: string
    }]
}
export const CardSchema = SchemaFactory.createForClass(Card);