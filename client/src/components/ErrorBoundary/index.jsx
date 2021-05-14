/* eslint-disable react/destructuring-assignment */
import React from 'react';

/**
 * Wrapper class to catch application error
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log error if caught
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
