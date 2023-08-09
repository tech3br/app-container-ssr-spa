import React from "react";
import ReactDOMServer from "react-dom/server.js";
import Root from "./root.component.js";

export async function serverRender(props) {

  const htmlStream = ReactDOMServer.renderToString(<Root {...props} />);

  return { content: htmlStream };
}