import Transaction from "../Transaction";

import { useSelector } from "react-redux";

const data = [
    {
        id: "0",
        title: "Argent Bank Checking (x8349)",
        amount: "$2,082.79",
        descritpion: "Available Balance",
    },
    {
        id: "1",
        title: "Argent Bank Savings (x6712)",
        amount: "$10,928.42",
        descritpion: "Available Balance",
    },
    {
        id: "2",
        title: "Argent Bank Credit Card (x8349)",
        amount: "$184.30",
        descritpion: "Current Balance",
    },
];

function Transactions( {setEdit} ) {
    // function Transactions({ editPage = false }) {
    // const user = useSelector((store) => store.user);
    // console.log(editPage)

    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {data.map((dataItem) => (
                <Transaction dataItem={dataItem} key={dataItem.id} setEdit={setEdit} />
            ))}
        </>
    );
}

export default Transactions;
