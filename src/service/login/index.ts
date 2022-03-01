import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  signIn(): string {
    return 'Hello World!';
  }
}
