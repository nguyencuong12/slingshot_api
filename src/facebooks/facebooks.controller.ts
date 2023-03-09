import { Body, Controller, Get, Post } from '@nestjs/common';
import { FacebookOrderDto } from './dto/facebook-order';
import { FacebooksService } from './facebooks.service';

@Controller('facebooks')
export class FacebooksController {
  constructor(private readonly facebookService: FacebooksService) {}
  @Post('/orders')
  sendMessageOrderToFacebook(@Body() orders: FacebookOrderDto) {
    // productOrdeInf;
    return this.facebookService.sendMessageOrderToFacebook(orders);
  }
}
