import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthenticationService {
  constructor(private prisma: PrismaService) {}

  async login(loginAuthenticationDto: LoginAuthenticationDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          username: loginAuthenticationDto.username,
          AND: {
            password: loginAuthenticationDto.password,
          },
        },
        select: {
          username: true,
          userDetail: true,
        },
      });

      if (!user) {
        throw new NotFoundException('User not found or incorrect credentials');
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException(
        `An error occurred during login: ${error.message}`,
      );
    }
  }

  async register(registerAuthenticationDto: RegisterAuthenticationDto) {
    try {
      return await this.prisma.user.create({
        data: {
          username: registerAuthenticationDto.username,
          password: registerAuthenticationDto.password,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `An error occurred during registration: ${error.message}`,
      );
    }
  }
}
