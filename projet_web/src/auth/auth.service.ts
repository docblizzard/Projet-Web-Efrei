import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput, JWTToken, User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService) {}

  async signIn(data: CreateUserInput): Promise<JWTToken> {
    const user = await this.usersService.getUser({username: data.username});
    if (user?.password !== data.password) {
      throw new UnauthorizedException();
    }
    const payload = { id: user.id, username: user.username };

    return {
        token: await this.jwtService.signAsync(payload),
      };
  }

  async getUserbyToken(token: JWTToken): Promise<User> {
    const user = await this.jwtService.decode(token.token)
		return user
	}
}
