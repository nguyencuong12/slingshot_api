import { Injectable } from '@nestjs/common';

@Injectable()
export class FacebooksService {


    sendMessageOrderToFacebook(orderInfo:string){
        return "ORDER FACEBOOK"
    }
}
