import React from "react";
import Modal from "react-responsive-modal";

export default class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null, open: false };
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
      open: true
    });
  }
  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    if (this.state.errorInfo) {
      return (
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Something went wrong</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </Modal>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
