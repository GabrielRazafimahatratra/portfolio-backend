import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Un gramme d\'action bat 100 kilos de savoir';
  }
}
