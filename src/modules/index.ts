import { Module } from '@nestjs/common';
import { LoginController } from '@controllers';
import { LoginService } from '@service';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService],
})
export class AppModule {}
