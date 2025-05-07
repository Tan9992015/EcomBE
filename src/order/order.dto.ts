import { OrderProductDto } from "src/orderProduct/orderProduct.dto"
import { User } from "src/user/user.interface"
import { ORDER_STATUS } from "./order.entity"

export class OrderDto {
    id?:number
    totalPrice?:number
    user?:User // foreign
    status?:ORDER_STATUS
    orderProduct?:OrderProductDto[] // foreign
    // 2 foreign ok 
}