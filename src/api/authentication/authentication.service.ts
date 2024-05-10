import { Injectable } from '@nestjs/common';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';

@Injectable()
export class AuthenticationService {
  findAll() {
    return `This action returns all authentication`;
  }

  login(createAuthenticationDto: LoginAuthenticationDto) {
    return 'This action adds a new authentication';
  }

  register(updateAuthenticationDto: RegisterAuthenticationDto) {
    return `This action updates a authentication`;
  }
}
