import { Controller, Get,Post ,Query} from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("HES")
    return this.appService.getHello();
  }
  @Get("/search")
  getSearch(@Query() query){
    console.log("PARAM",query)
  }
  @Post('/hello')
  printSomething(){
    console.log("REQUEST COMMING !!!");
    return {customE:"ss"}
  }
  
}
