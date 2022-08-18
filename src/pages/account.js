import { useEffect } from "react";
import AccountTabs from "../components/account/account-tabs";
import { useLocation } from 'react-router-dom';
const Account = () => {
    const { state } = useLocation();

    useEffect(() => {
        console.debug(state.value, " 어카운트에서  state")
    }, [])
    return (
        <>
            <AccountTabs value={state.value}></AccountTabs>
        </>
    )
}

Account.getLayout = (page) => (
    { page }
);
export default Account;