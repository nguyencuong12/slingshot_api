import { Injectable } from '@nestjs/common';
import { FacebookOrderDto } from './dto/facebook-order';
import { productOrderInf } from 'src/interfaces/facebook';

@Injectable()
export class FacebooksService {
  sendMessageOrderToFacebook(orderInfo: FacebookOrderDto) {
    let _listProductOrder: productOrderInf[] = [];

    orderInfo.productOrder.forEach((item) => {
      _listProductOrder.push(JSON.parse(item.toString()));
    });

    _listProductOrder.forEach((item) => {
    
      console.log('PRICE', item.productPrice);
    });
    // console.log("USERNAME",orderInfo.userOrder);
    // console.log("LIST ",_listProductOrder);

    // return "ORDER FACEBOOK"
  }
}
