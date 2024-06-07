import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @ApiOperation({ summary: 'login user' })
  @Post()
  create(@Body() createAuthenticationDto: LoginAuthenticationDto) {
    return this.authenticationService.login(createAuthenticationDto);
    }
    
  @ApiOperation({ summary: 'register user' })
  @Patch()
  update(@Body() createAuthenticationDto: LoginAuthenticationDto) {
    return this.authenticationService.register(createAuthenticationDto);
  }
}
