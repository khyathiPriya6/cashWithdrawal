// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationAmount, onClickingAmount} = props
  const {value} = denominationAmount

  const onClickAmount = () => {
    onClickingAmount(value)
  }

  return (
    <li className="container">
      <button className="amount" type="submit" onClick={onClickAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
