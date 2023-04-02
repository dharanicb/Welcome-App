import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onClickButton = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  render() {
    const {isSubscribe} = this.state
    const buttonText = isSubscribe ? 'Subscribe' : 'Subscribed'

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you!Happy Learning</p>
        <button type="button" onClick={this.onClickButton}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
