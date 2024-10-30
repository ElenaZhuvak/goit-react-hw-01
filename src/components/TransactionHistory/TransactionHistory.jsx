import s from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
  return (
    <div className={s.tableBox}>
        <table className={s.table}>
            <thead className={s.tableHead}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
        {items.map(item => (
                <tr className={s.tableRow} key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
                </tr>
        ))}
            </tbody>
        </table>
    </div>
  )
}

export default TransactionHistory