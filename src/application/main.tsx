import { Layouts } from "components";
import { ErrorBoundary } from "./error-boundary";
import * as Pages from "pages";

export const Application = () => {
  return (
    <ErrorBoundary>
      <Layouts.Main>
        <Pages.Main />
      </Layouts.Main>
    </ErrorBoundary>
  );
}