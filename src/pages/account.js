import AccountTabs from "../components/account/account-tabs";

const Account = () => (
    <>
        <AccountTabs></AccountTabs>
    </>
);

Account.getLayout = (page) => (
    { page }
);
export default Account;