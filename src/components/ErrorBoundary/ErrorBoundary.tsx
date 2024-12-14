import React from 'react';

interface Props {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    console.log('error');
    return { hasError: true };
  }

  componentDidCatch() {

    // todo: add send error to sentry
  }

  render() {
    const { fallback, children } = this.props;

    const { hasError } = this.state;

    if (hasError) {
      return fallback;
    }

    return children;
  }
}
