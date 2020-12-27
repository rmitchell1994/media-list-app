import React, { Suspense } from "react";
import Routes from "./router";

const App: React.FC = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Routes />
    </Suspense>
  );
};

export default App;
