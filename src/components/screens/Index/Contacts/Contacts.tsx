import { FC } from "react";

import { BsPlusCircleDotted } from "react-icons/bs";

import Button from "../../../ui/Button/Button";
import styles from "./styles.module.scss"
import Contact from "./Contact/Contact";

const Contacts: FC = () => {
    return (
        <div className={styles.contacts}>
            <div className="mb-2 flex justify-between">
                <Button className="px-2 py-2" children={'Recent Contacts'} />
                <Button className="px-2 py-2" children={'All Contacts'} />
            </div>
            <div className="px-2 py-2 flex gap-x-6">
                <BsPlusCircleDotted className='cursor-pointer' size={45}/>
                <Contact />
                <Contact />
                <Contact />
                <Contact />
                <Contact />
            </div>
        </div>
    );
}
 
export default Contacts;