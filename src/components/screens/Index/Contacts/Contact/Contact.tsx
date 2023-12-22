import { FC } from "react";
import { RxAvatar } from "react-icons/rx";

const Contact:FC = () => {
    return (
        <div className="flex-col items-center justify-center gap-2 ">
            <RxAvatar size={45}/>
            <p>Name</p>
        </div>
    );
}
 
export default Contact;