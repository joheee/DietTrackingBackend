import { PartialType } from '@nestjs/swagger';
import { LoginAuthenticationDto } from './login-authentication.dto';

export class RegisterAuthenticationDto extends PartialType(
  LoginAuthenticationDto,
) {}
