import { Controller, Get, Post, Put, Delete, Param, Body, Query, Render } from '@nestjs/common';


@Controller('website')
export class WebsiteController {

    /*** Homepage*/
    @Get('/') 
    @Render('home') 
    home() { 
        return {} 
    }
}
