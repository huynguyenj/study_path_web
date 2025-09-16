/*eslint-disable */
import React, { type ErrorInfo, type ReactNode } from 'react'
type ErrorBoundaryProps = {
  children: ReactNode;  // child component
  fallback?: ReactNode; // optional: custom fallback UI
};

type ErrorBoundaryState = {
  hasError: boolean;
};
class ErrorBoundaries extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> { 
      constructor(props: ErrorBoundaryProps) {
            super(props)
            this.state = { hasError: false }
      }
        static getDerivedStateFromError(error: any): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
            console.log(error)
            return { hasError: true }
      }
       componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
      console.log(error, errorInfo)
      }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback
    }

    return this.props.children
  }
}
export default ErrorBoundaries