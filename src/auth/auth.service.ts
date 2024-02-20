import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RegisterDto } from './dto/register-dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt'
import { LoginDto } from './dto/login-dto';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService,private jwt:JwtService) {}

    async signup(dto:RegisterDto){
        const {email,username,password} = dto

        const emailfound = await this.prisma.user.findUnique({
            where: {email}
        })

        if (emailfound) {
            throw new BadRequestException('email already used')
        }

        const userfound = await this.prisma.user.findUnique({
            where: {email}
        })

        if (userfound) {
            throw new BadRequestException('username already exists')
        }

        const hashedPassword = await bcrypt.hash(password,10)

        await this.prisma.user.create({
            data:{
                email:email,
                username:username,
                password:hashedPassword
            },
        })

        return {
            message:'signup succesful'
        }
    }
    async signin(dto:LoginDto, req:Request, res:Response){
        const {username,password} = dto

        const userfound = await this.prisma.user.findUnique({
            where: {username}
        })

        if (!userfound) {
            throw new BadRequestException(`No username named ${username}`)
        }

        const ispasswordvalid = await bcrypt.compare(password,userfound.password)

        if (!ispasswordvalid) {
            throw new BadRequestException('Wrong password')
        }

        const token = await this.jwt.signAsync({id:userfound.id,email:userfound.email},{secret: process.env.JWT_SECRET})

        if (!token) {
            throw new ForbiddenException()
        }

        
        res.cookie('token',token)

        return res.send({
            message: 'Login succesful'
        })
    }
    async signout(req:Request, res:Response){
        res.clearCookie('token')

        return res.send({
            message: "Logout succesful"
        })
    }
}
