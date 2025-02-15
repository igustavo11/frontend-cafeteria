import { Orders } from "./components/orders";
import {api} from '@/services/api'
import {getCookieServer} from '@/lib/cookieServer'
import {OrderProps} from '@/lib/oder.type'

async function getOrders(): Promise<OrderProps[] | []> {
    try{

        const token = getCookieServer();

        const response = await api.get("/orderstotal",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return response.data || []

    }catch(err){
        console.log(err);
        return[];
    }
}

export default async function Dashboard(){

    const orders = await getOrders();

    console.log(orders);

    return(
        <>
            <Orders orders={orders}/>
        </>
    )
}