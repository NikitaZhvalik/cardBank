import Header from "../../layout/Header/Header"

import Balance from "./Balance/Balance"
import Cards from "./Cards/Cards"
import Contacts from "./Contacts/Contacts"
import GetMoney from "./GetMoney/GetMoney"
import History from "./History/History"
import InviteCode from "./InviteCode/InviteCode"

const Index = () => {
    return (
        <div className="container">
            <Header />
            
            <div className="min-h-[88vh] grid grid-rows-4 grid-cols-4 grid-flow-col gap-4">
                <div className="p-6 bg-light row-span-3 col-span-1 rounded-2xl">
                    <Cards />
                </div>
                <div className="p-6 bg-light row-span-1 col-span-1 rounded-2xl bg-[url('/src/assets/imgs/getMoney/money.jpg')] bg-top bg-no-repeat bg-contain">
                    <GetMoney />
                </div>
                
                <div className=" row-span-1 col-span-3 grid grid-cols-2 gap-4">
                    <div className="p-6 bg-light rounded-2xl">
                        <Balance />
                    </div>
                    <div className="p-6 bg-dark rounded-2xl bg-[url('/src/assets/imgs/invite/code.png')] bg-top bg-no-repeat bg-contain">
                        <InviteCode />
                    </div>
                </div>
                <div className="p-6 bg-light row-span-1 col-span-3 rounded-2xl">
                    <Contacts />
                </div>
                <div className="p-6 bg-light row-span-2 col-span-3 rounded-2xl">
                    <History />
                </div>
            </div>
        </div>
    )
}
 
export default Index;