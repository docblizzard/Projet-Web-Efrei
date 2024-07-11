import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserInput, JWTToken, SignInResponse, User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService) {}

  async signIn(data: CreateUserInput): Promise<SignInResponse> {
    try {
      const user = await this.usersService.getUser({username: data.username});
      if (user?.password !== data.password) {
        throw new UnauthorizedException();
      }
      const payload = { id: user.id, username: user.username };
      const token = await this.jwtService.signAsync(payload)
      return {
        code: 200,
        response: 'User logged in',
        token: {token: token}
        };
    } catch(e){
      return {
            code: 503,
            response: 'Unexpected Error: ' + e,
            token: null
          }
        }
  }

  async getUserbyToken(token: JWTToken): Promise<User> {
    const user = await this.jwtService.decode(token.token)
		return user
	}
  
}
