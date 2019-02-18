class Greeting extends React.Component {
    render() {
      return <h1>Hi {this.props.name}</h1>
    }
  }
  
  CustomButton.defaultProps = {
    name: 'guest'
  };