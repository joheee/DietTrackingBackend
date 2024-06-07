import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @ApiOperation({ summary: 'login user' })
  @Post()
  @ApiBody({
    description: 'Create a new user',
    type: LoginAuthenticationDto,
    examples: {
      example1: {
        summary: 'template login user',
        description: 'Example payload for login new user',
        value: {
          username: 'aaaaa',
          password: 'aaaaa',
        },
      },
    },
  })
  create(@Body() createAuthenticationDto: LoginAuthenticationDto) {
    return this.authenticationService.login(createAuthenticationDto);
  }

  @ApiOperation({ summary: 'register user' })
  @Patch()
  @ApiBody({
    description: 'Create a new user',
    type: LoginAuthenticationDto,
    examples: {
      example1: {
        summary: 'template register user',
        description: 'Example payload for register new user',
        value: {
          username: 'aaaaa',
          password: 'aaaaa',
        },
      },
    },
  })
  update(@Body() createAuthenticationDto: LoginAuthenticationDto) {
    return this.authenticationService.register(createAuthenticationDto);
  }
}
