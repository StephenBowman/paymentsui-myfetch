

const TransactionRow = (props) => {
    // .transaction. required to match transaction in map 
    // component in TransactionRow to pick up the data
    return(
        <tr>
        <td>{props.id}</td>
        <td>{props.date}</td>
        <td>{props.country}</td>
        <td>{props.currency}</td>
        <td>{props.amount}</td>
    </tr>
    )

}

export default TransactionRow;