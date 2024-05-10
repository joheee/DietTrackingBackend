import { Injectable } from '@nestjs/common';
import { LoginAuthenticationDto } from './dto/login-authentication.dto';
import { RegisterAuthenticationDto } from './dto/register-authentication.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthenticationService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        username: true,
      },
    });
  }

  async login(loginAuthenticationDto: LoginAuthenticationDto) {
    return await this.prisma.user.findUnique({
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
  }

  async register(loginAuthenticationDto: LoginAuthenticationDto) {
    return await this.prisma.user.create({
      data: {
        username: loginAuthenticationDto.username,
        password: loginAuthenticationDto.password,
      },
    });
  }

  fillDetail(RegisterAuthenticationDto: RegisterAuthenticationDto) {}
}
