import { Injectable, NestMiddleware } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class AuthenticateMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('hello');

    next();
  }
}
