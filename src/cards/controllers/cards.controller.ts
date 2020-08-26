import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { 
    ApiBody, ApiTags, ApiResponse, 
    ApiOkResponse, ApiCreatedResponse, 
    ApiUnauthorizedResponse, ApiForbiddenResponse, 
    ApiHeader 
} from '@nestjs/swagger';


import { CardsService } from '../services/cards.service';
import { of, Observable } from 'rxjs';
import { Card } from '../models/schema/card.schema';
import { CreateCardDto } from '../models/dto/create-card.dto';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript';
import { IQuery } from 'pokemon-tcg-sdk-typescript/dist/sdk';

// @ApiHeader({
//     name: 'X-MyHeader',
//     description: 'Custom header',
// })
@ApiTags('cards')
@Controller('cards')
export class CardsController {
    constructor(private readonly cardService: CardsService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'Cards fetched' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    async findBy(@Body() where: PokemonTCG.IQuery[]) {
        return this.cardService.findBy(where)
    }

    @Get()
    @ApiOkResponse({ status: 201, description: 'Cards fetched'})
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    findAll(): Promise<PokemonTCG.Card[]> {
        let cards = this.cardService.findAll();
        return cards;
    }

    @Get(':id')
    @ApiOkResponse({ status: 201, description: 'Card fetched' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    findOne(@Param('id') id): Promise<PokemonTCG.Card> {
        return this.cardService.findById(id);
    }

    // @Put(':id')
    // @ApiOkResponse({ status: 201, description: 'Cards updated' })
    // @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    // update(@Param('id') id, @Body() updateCardDto): string {
    //     return `MAJ de la Carte #${id}`
    // }

    // @Delete(':id')
    // @ApiOkResponse({ status: 201, description: 'Cards deleted' })
    // @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    // delete(@Param('id') id): string {
    //     return `Suppression de la Carte #${id}`
    // }
}