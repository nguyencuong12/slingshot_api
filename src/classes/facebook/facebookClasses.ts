import { productOrderInf } from 'src/interfaces/facebook';

export class FacebookOrderReponse {
  user: string;
  phone: string;
  address: string;
  totalPrice: number;
  productOrder: productOrderInf[];
  orderID: string;
  constructor(
    user: string,
    phone: string,
    address: string,
    totalPrice: number,
    productOrder: productOrderInf[],
    orderID: string,
  ) {
    this.user = user;
    this.phone = phone;
    this.address = address;
    this.totalPrice = totalPrice;
    this.productOrder = productOrder;
    this.orderID = orderID;

    // this.productOrder = productOrder.map((item) => {
    //   return JSON.parse(item.toString());
    // });
  }
}
