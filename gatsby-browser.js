import React from "react";
import { PageContextProvider } from "./src/context/PageContext";
import "./src/styles/site.css";
// import "./src/styles/atom-dark-prism.css";
import "./src/styles/markdown.css";

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
export const wrapRootElement = ({ element }) => (
  <PageContextProvider>{element}</PageContextProvider>
);
