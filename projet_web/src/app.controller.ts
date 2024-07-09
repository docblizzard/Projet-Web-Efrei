import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly userService: UserService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('user')
  // async getUserByUsername(
  //   @Body('username') username: string): Promise<User>{
  //     return this.userService.User({username: username});
  //   }
  
	// @Post('user')
	// async createUser(
	// 	@Body() userData: { username: string, password: string },
	// ): Promise<User> {
	// 	const { username, password } = userData;
	// 	return this.userService.createUser({
	// 		username,
	// 		password
	// 	})
	// }
}
