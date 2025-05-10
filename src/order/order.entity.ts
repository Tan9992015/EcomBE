import { OrderProductEntity } from "src/orderProduct/orderProduct.entity";
import { UserEntity } from "src/user/user.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum ORDER_STATUS  {
    PENDING = 'pending', // đang xử lý
    CONFIRMED = 'confirmed', // đã xác nhận
    SHIPPING = 'shipping', // đang giao hàng
    DELIVERED = 'delivered', // giao hàng thành công
    CANCELLED = 'cancelled', // đơn hàng bị hủy
}

@Entity()
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id:number

    @Column({
        type:'enum',
        enum:ORDER_STATUS,
        default:ORDER_STATUS.PENDING,
    })
    status:ORDER_STATUS


    @UpdateDateColumn()
    updatedAt:Date

    @DeleteDateColumn()
    deletedAt:Date

    @Column('decimal')
    totalPrice:number

    @ManyToOne(()=>UserEntity,user=>user.order)
    user:UserEntity

    @OneToMany(()=>OrderProductEntity,orderProduct=>orderProduct.order)
    orderProduct:OrderProductEntity[]
}