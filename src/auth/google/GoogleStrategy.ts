import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile } from "passport";
import { Strategy } from "passport-google-oauth20";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL,
            scope: ['email', 'profile']
        });
    }
        /** WAITING FOR findOne TO BE IMPLEMENTED 
        async validate(accessToken: string, refreshToken: string, profile: Profile) {
        const { id, name, emails, photos } = profile
        const user = await userService.findOne(id) 
        if (!user) {
            const newUser = {
                email: profile.emails,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                accessToken
            }
            await userService.create(newUser)
            return accessToken
        }
        return user
        */      
}