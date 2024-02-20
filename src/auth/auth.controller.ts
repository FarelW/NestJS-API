import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register-dto';
import { LoginDto } from './dto/login-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto:RegisterDto){
    return this.authService.signup(dto)
  }

  @Post('signin')
  signin(@Body() dto:LoginDto, @Req() req, @Res() res){
    return this.authService.signin(dto,req,res)
  }

  @Get('signout')
  signout(@Req() req, @Res() res){
    return this.authService.signout(req,res)
  }
}
