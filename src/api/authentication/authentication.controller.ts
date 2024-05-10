import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Get()
  findAll() {
    return this.authenticationService.findAll();
  }

  @Post()
  create(@Body() createAuthenticationDto: LoginAuthenticationDto) {
    return this.authenticationService.login(createAuthenticationDto);
  }

  @Patch()
  update(@Body() updateAuthenticationDto: RegisterAuthenticationDto) {
    return this.authenticationService.register(updateAuthenticationDto);
  }
}
