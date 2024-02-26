import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store/index.js";


// const root = ReactDOM.createRoot(document.getElementById("root"));

// if (import.meta.env.MODE === "development") {
//   // When development, setup the MSW.
//   // import the worker (under the browser.ts file)
//   import("./mockServices/browser")
//     .then(({ worker }) => {
//       // Start the worker.
//       worker.start();
//     })
//     .then(() => {
//       // Render the application.
//       root.render(
//         <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
//       );
//     });
// } else {
//   // Render the application in production without the MSW.
//   root.render(
//     <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
