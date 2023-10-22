function Transaction({ dataItem }) {

    // console.log(setEdit)
    return (
        // <section className={`account ${setEdit ? "transaction-bg" : ""}`}>
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{dataItem.title}</h3>
                <p className="account-amount">{dataItem.amount}</p>
                <p className="account-amount-description">
                    {dataItem.description}
                </p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">
                    View transactions
                </button>
            </div>
        </section>
    );
}

export default Transaction;
