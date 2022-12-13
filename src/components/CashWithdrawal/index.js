// Write your code here
import {Component} from 'react'

import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  decreaseAmount = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="profile-section">
            <div className="profile-pic">
              <p className="profile-pic-name">S</p>
            </div>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{balance}</p>
              <p className="rupee-para">in Rupees</p>
            </div>
          </div>
          <div className="withdraw-section">
            <p className="withdraw-para">Withdraw</p>
            <p className="choose-amount">CHOOSE SUM (IN RUPEES)</p>
            <ul className="amount-btn-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominationAmount={eachItem}
                  key={eachItem.id}
                  onClickingAmount={this.decreaseAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
