import { OrderItemProps } from "@/providers/order";

export function calculateTotalOrder(orders: OrderItemProps[]){
    return orders.reduce((total, item)=> {
        const itemTotal = parseFloat(item.product.price) * item.amout;
        return total + itemTotal

    },0)
}