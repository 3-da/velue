import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(): { message: string; endpoints: string[] } {
    return {
      message: 'Velué API',
      endpoints: ['/api/health', '/api/auth', '/api/user', '/api/coins', '/api/training-sessions']
    };
  }

  @Get('health')
  getHealth(): { status: string; timestamp: string; uptime: number } {
    return this.appService.getHealth();
  }

  @Get('favicon.ico')
  @HttpCode(HttpStatus.NO_CONTENT)
  getFavicon(): void {
    // Return 204 No Content for favicon requests to prevent 404 errors
    return;
  }
}
