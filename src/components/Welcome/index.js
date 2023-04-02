import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isLoggedIn: true}

  onSubscribe = () => (
    <button type="button" onClick={this.onSubscribed}>
      Subscribed
    </button>
  )

  onSubscribed = () => (
    <button type="button" onClick={this.onSubscribe}>
      Subscribe
    </button>
  )

  renderAuthButton = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn === true) {
      return (
        <button type="button" onClick={this.onSubscribe}>
          Subscribe
        </button>
      )
    }
    return (
      <button type="button" onClick={this.onSubscribed}>
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you!Happy Learning</p>
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default Welcome
