import { Controller, Get } from '@nestjs/common';
import { LoginService } from '@service';

@Controller()
export class LoginController {
  constructor(private readonly logService: LoginService) {}

  @Get()
  signIn(): string {
    return this.logService.signIn();
  }
}
