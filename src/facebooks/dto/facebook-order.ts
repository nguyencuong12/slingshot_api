import { productOrderInf } from 'src/interfaces/facebook';

export class FacebookOrderDto {
  orderID: string;
  userOrder: string;
  phoneOrder: string;
  addressOrder: string;
  productOrder: productOrderInf[];
}

// export class FacebookOrderReponse{
//     user:string;
//     phone:string;
//     address:string;

// }
