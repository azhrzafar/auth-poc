import { Controller, Request, Post, UseGuards, Response } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Response as Res } from 'express';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req, @Response() res: Res) {
    const token = await this.authService.login(req.user);
    return res.set({ authorization: token }).json({ name: 'John' });
  }
}
