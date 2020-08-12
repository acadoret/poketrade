import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { CardsService } from './cards.service';

@Controller('cards')
export class CardsController {
    constructor(private readonly cardService: CardsService) { }


    @Post()
    create(@Body() createCardDto): string {
        return `Ajout d'une carte`
    }

    @Get()
    findAll(@Query() query): string {
        return `This action returns all cards (limit : ${query.limit})`;
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Carte #${id}`;
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateCardDto): string {
        return `MAJ de la Carte #${id}`
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Suppression de la Carte #${id}`
    }
}