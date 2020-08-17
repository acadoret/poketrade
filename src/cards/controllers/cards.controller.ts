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

// @ApiHeader({
//     name: 'X-MyHeader',
//     description: 'Custom header',
// })
@ApiTags('cards')
@Controller('cards')
export class CardsController {
    constructor(private readonly cardService: CardsService) { }

    @Post()
    @ApiCreatedResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createCardDto: CreateCardDto) {
        return this.cardService.create(createCardDto);
    }

    @Get()
    @ApiOkResponse({ status: 201, description: 'Cards fetched'})
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    findAll(@Query() query): Promise<Card[]> {
        console.log(query)
        let cards = this.cardService.findAll(query.page, query.pageSize);
        return cards;
    }

    @Get(':id')
    @ApiOkResponse({ status: 201, description: 'Card fetched' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    findOne(@Param('id') id): Promise<Card> {
        return this.cardService.findById(id);
    }

    @Put(':id')
    @ApiOkResponse({ status: 201, description: 'Cards updated' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    update(@Param('id') id, @Body() updateCardDto): string {
        return `MAJ de la Carte #${id}`
    }

    @Delete(':id')
    @ApiOkResponse({ status: 201, description: 'Cards deleted' })
    @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
    delete(@Param('id') id): string {
        return `Suppression de la Carte #${id}`
    }
}