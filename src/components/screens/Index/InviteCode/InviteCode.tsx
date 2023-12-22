import { FC } from "react";
import { AiOutlineCopy } from "react-icons/ai";

import styles from "./styles.module.scss";
import Button from "../../../ui/Button/Button";

const InviteCode: FC = () => {
	return (
		<div>
		<p className="mb-4 max-w-xs text-light">
			InviteCode a friend with code below and redeem special bonus USD 15 from
			us!
		</p>
		<Button className="px-8 py-1 text-light flex justify-center items-center gap-y-2 gap-x-8 bg-gray">
			NIKITAZHVALIK-OCT2023
			<AiOutlineCopy size={30} />
		</Button>
		</div>
	);	
};

export default InviteCode;
