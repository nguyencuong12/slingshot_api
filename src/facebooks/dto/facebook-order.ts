import { productOrderInf } from "src/interfaces/facebook";


export class FacebookOrderDto{
    userOrder?:string;
    phoneOrder:string;
    addressOrder:string;
    productOrder?:[
     productOrderInf
    ]
 

  
}