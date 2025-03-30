import { Controller, Get, Query } from '@nestjs/common';
import { PasswordService } from './password.service';

@Controller('password')
export class PasswordController {
  constructor(private passwordService: PasswordService) {}

  @Get('generate')
  generatePassword(
    @Query('length') length: string,
    @Query('special') special: string,
  ) {
    const passwordLength = parseInt(length, 10) || 12;
    const includeSpecial = special === 'true';
    
    return {
      password: this.passwordService.generatePassword(passwordLength, includeSpecial),
    };
  }
}
