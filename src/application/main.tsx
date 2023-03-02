import { ErrorBoundary } from "./error-boundary";

export const Application = () => {
  return (
    <ErrorBoundary>
      <div className="App">
        Hello World
      </div>
    </ErrorBoundary>
  );
}