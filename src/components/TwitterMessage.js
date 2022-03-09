import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {

    let charMessage = this.props.maxChars - this.state.message.length

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
          onChange={this.handleMessageChange} value={this.state.message}
         />
         {charMessage}
      </div>
    );
  }
}

export default TwitterMessage;
