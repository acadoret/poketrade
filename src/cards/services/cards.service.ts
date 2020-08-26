import { Injectable } from '@nestjs/common'
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { IQuery } from 'pokemon-tcg-sdk-typescript/dist/sdk';

@Injectable()
export class CardsService {
    constructor() {
        // const pokemon = require('pokemontcgsdk')
    }

    /**
     * Find card by property 
     * Pass JSON object with properties 
     * ex : { supertype: 'pokemon', subtype: 'mega' }
     * @param where JSON Object
     * @returns Promise<Card[]>
     */
    async findBy(where: PokemonTCG.IQuery[]): Promise<PokemonTCG.Card[]> {
        return PokemonTCG.Card.where(where)
    }

    async findAll(page = 1, pageSize = 10): Promise<PokemonTCG.Card[]> {
        return PokemonTCG.Card.all()
    }

    async findById(id: string): Promise<PokemonTCG.Card> {
        return PokemonTCG.Card.find(id)
    }
}