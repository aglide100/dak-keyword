import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props) {
        super(props);
    }
    public state: State = {
        hasError: false,
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <>Get some error...</>;
        }

        return this.props.children;
    }
}
