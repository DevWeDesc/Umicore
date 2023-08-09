import App from "./App.tsx";
import * as React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Flex
        direction="column"
        alignItems="center"
        w="100%%"
        minH="100vh"
        bg="linear-gradient(to bottom, #fafafa , #598bb6, #031d33);"
      >
        <App />
      </Flex>
      <ToastContainer />
    </ChakraProvider>
  </React.StrictMode>
);
