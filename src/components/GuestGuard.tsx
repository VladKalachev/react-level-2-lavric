import { observer } from "mobx-react";
import useStore from "../hooks/useStore";
import { ReactNode } from 'react'
import Navigate from "../router/Navigate";

const GuestGuard = observer(function ({ children }: { children: ReactNode }){
	const { auth: { user, isReady } } = useStore();
	
	return <>
		{ isReady && <>
			{ !user && children }
			{ user && <Navigate to="/office" /> }
		</> }
	</>;
})

export default GuestGuard;