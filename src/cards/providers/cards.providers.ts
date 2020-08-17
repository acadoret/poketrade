
import { Connection } from 'mongoose';
import { CardSchema } from '../models/schema/card.schema';

export const cardsProviders = [
    {
        provide: 'CARD_MODEL',
        useFactory: (connection: Connection) => connection.model('Card', CardSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];