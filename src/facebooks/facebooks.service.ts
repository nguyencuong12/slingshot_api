import { Injectable } from '@nestjs/common';
import { FacebookOrderDto } from './dto/facebook-order';
import { productOrderInf } from 'src/interfaces/facebook';
import { FacebookOrderReponse } from 'src/classes/facebook/facebookClasses';

@Injectable()
export class FacebooksService {
  sendMessageOrderToFacebook(orderInfo: FacebookOrderDto) {
    let totalPrice = 0;
    orderInfo.productOrder.forEach((item) => {
      totalPrice = totalPrice + item.productPrice * item.amount;
    });
    console.log('ORDER', orderInfo);
    return new FacebookOrderReponse(
      orderInfo.userOrder,
      orderInfo.phoneOrder,
      orderInfo.addressOrder,
      totalPrice,
      orderInfo.productOrder,
      orderInfo.orderID,
    );
  }
}
