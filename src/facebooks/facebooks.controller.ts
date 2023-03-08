import { Controller ,Get, Post} from '@nestjs/common';
import { FacebooksService } from './facebooks.service';

@Controller('facebooks')
export class FacebooksController {
    constructor(private readonly facebookService:FacebooksService) {
    }
    @Post("/orders")
    sendMessageOrderToFacebook(orderInfo:string) {
     
        return this.facebookService.sendMessageOrderToFacebook(orderInfo)

      }
}
