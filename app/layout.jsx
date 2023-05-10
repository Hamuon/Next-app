import React from "react";
import MainNavigation from "./MainNavigation";
import MainFooter from "./MainFooter";

function layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>First app</title>
      </head>
      <body>
        <MainNavigation />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}

export default layout;
