import React from 'react';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

class Buggy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    throw new Error('I crashed!');
  }

  render() {
    return <h1 onClick={this.handleClick}>Throw error. click me</h1>;
  }
}


class ErrorComponent extends React.Component {

  render() {
    return (
      <ErrorBoundary>
        <Buggy />
      </ErrorBoundary>
    )
  }
}

export default ErrorComponent
