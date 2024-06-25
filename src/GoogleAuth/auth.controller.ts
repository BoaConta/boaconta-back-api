import { Controller, Get, UseGuards } from "@nestjs/common";
import { GoogleAuthGuard } from "./utils/Guards";

@Controller('auth')
export class AuthController {

    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    logInUser() {
        return { msg: 'Google login' };
    }

    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    googleRedirect() {
        return { msg: 'Ok' };
    }
}