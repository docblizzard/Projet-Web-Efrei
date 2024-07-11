import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";
import { JWTToken } from "./user.model";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async getUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput):
    Promise<User | null > {
        return await this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }
    // Filter the user that is already connected
    async getAllUser(username: string):
    Promise<User[] | null > {
        const users = await this.prisma.user.findMany({
            where :{
                username: {
                    not: username
                }
            }
        });
        return users
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User>{
        return this.prisma.user.create({
            data: {
                username: data.username,
                password: data.password
            }
        });
    }


}