import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Product/:id" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
