// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: false,
  }

  onSubscribed = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getBtn = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const btnText = this.getBtn()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <div className="btn-cont">
          <button className="button" type="button" onClick={this.onSubscribed}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
