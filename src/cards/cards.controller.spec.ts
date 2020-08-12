import { Test } from '@nestjs/testing';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { Query } from '@nestjs/common';
import { Card } from './schema/card.schema';

describe('CardsController', () => {
  let cardsController: CardsController;
  let catsService: CardsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CardsController],
      providers: [CardsService],
    }).compile();

    catsService = moduleRef.get<CardsService>(CardsService);
    cardsController = moduleRef.get<CardsController>(CardsController);
  });

  describe('findAll', () => {
    it('should return an array of cards', async () => {
      const result = this.catsService.findById('xy7-4');
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
      expect(await cardsController.findAll({
        'page': 1,
        'pageSize': 1
      })).toBe(result);
    });
  });

  describe('findById', () => {
    it('should return an array of cards', async () => {
      const result = this.catsService.findById('xy7-4');
      jest.spyOn(catsService, 'findById').mockImplementation(() => result);
      expect(await cardsController.findOne('xy7-4')).toBe(result);
    });
  });

  
});