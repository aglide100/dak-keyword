import React, { ReactNode } from "react";

export type LoadingErrorProps = {
  children: ReactNode;
};

export const LoadingError: React.FC<LoadingErrorProps> = ({ children }) => {
  return (
    <div className="h-46 bg-aqua flex justify-center align-middle">
      <p>Sorry, failed to load {children} </p>
    </div>
  );
};

export default LoadingError;
