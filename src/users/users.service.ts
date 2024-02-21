import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService){}

    async getUser(id:string, decodeuser:any){
        const user = await this.prisma.user.findUnique({
            where : {
                id:parseInt(id)
            }
        })

        if (!user) {
            throw new NotFoundException()
        }

        if (user.id !==parseInt(decodeuser.id)) {
            throw new ForbiddenException()
        }

        delete user.password

        return {user}
    }

    async Updateuser(id:string, decodeuser:any, newusername:string){
        const user = await this.prisma.user.findUnique({
            where : {
                id:parseInt(id)
            }
        })

        if (!user) {
            throw new NotFoundException()
        }

        if (user.id !==parseInt(decodeuser.id)) {
            throw new ForbiddenException()
        }

        await this.prisma.user.update({
            where: {
              id: parseInt(id)
            },
            data: {
              username: newusername
            }
          });

        delete user.password

        return {
            message:'update succesful'
        }
    }

    async getAllUsers(){
        return await this.prisma.user.findMany({
            select:{id:true,username:true}
        })
    }
}
