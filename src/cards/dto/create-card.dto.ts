import { ApiProperty } from '@nestjs/swagger';
/**
 * DTO Class for cards Document
 */
export class CreateCardDto {
    @ApiProperty()
    id: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    tags: string[];
    @ApiProperty()
    nationalPokedexNumber: number;
    @ApiProperty()
    imageUrl: string;
    @ApiProperty()
    imageUrlHiRes: string;
    @ApiProperty()
    types: string[]
    @ApiProperty()
    supertype: string
    @ApiProperty()
    subtype: string
    @ApiProperty()
    evolvesFrom: string
    @ApiProperty()
    hp: string;
    @ApiProperty()
    retreatCost: string[];
    @ApiProperty()
    convertedRetreatCost: number;
    @ApiProperty()
    number: string;
    @ApiProperty()
    artist: string;
    @ApiProperty()
    rarity: string;
    @ApiProperty()
    series: string;
    @ApiProperty()
    _set: string;
    @ApiProperty()
    setCode: string;

    attacks: [{
        name: string,
        text: string,
        cost: string[],
        damage: string,
        convertedEnergyCost: number,
    }]

    weaknesses: [{
        type: string,
        value: string
    }]
}