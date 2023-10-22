import { useState } from "react";
import { useSelector } from "react-redux";

import Welcome from "../components/User/Welcome";
import Transactions from "../components/User/Transactions";
import Edit from "../components/User/Edit";

function User() {
    const [edit, setEdit] = useState(false);
    const user = useSelector((store) => store.user);

    return (
        <main className={`main ${edit ? "" : "bg-dark"}`}>
            {edit ? <Edit setEdit={setEdit} /> : <Welcome setEdit={setEdit} />}
            <Transactions editPage={edit} />
        </main>
    );
}

export default User;
