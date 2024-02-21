import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUser(@Param() params: {id:string}, @Req() req){
    const decodeuser = req.user as {id:string, username:string}
    return this.usersService.getUser(params.id,decodeuser)
  }

  @UseGuards(JwtAuthGuard)
  @Post('update/:id')
  UpdateUser(@Param() params: {id:string}, @Req() req,@Body() newuser:{username:string}){
    const decodeuser = req.user as {id:string, username:string}
    return this.usersService.Updateuser(params.id,decodeuser,newuser.username)
  }

  @Get()
  getAllUsers(){
    return this.usersService.getAllUsers()
  }
}
