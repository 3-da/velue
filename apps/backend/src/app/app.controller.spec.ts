import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('getRoot', () => {
    it('should return API information with endpoints', () => {
      const appController = app.get<AppController>(AppController);
      const result = appController.getRoot();
      expect(result).toHaveProperty('message', 'Velué API');
      expect(result).toHaveProperty('endpoints');
      expect(Array.isArray(result.endpoints)).toBe(true);
    });
  });

  describe('getHealth', () => {
    it('should return health status', () => {
      const appController = app.get<AppController>(AppController);
      const result = appController.getHealth();
      expect(result).toHaveProperty('status', 'ok');
      expect(result).toHaveProperty('timestamp');
      expect(result).toHaveProperty('uptime');
    });
  });
});
