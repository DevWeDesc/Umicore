import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import DetailsProduct from "../../components/DetailsProduct";

export default function Product() {
  return (
    <ChakraProvider>
      <Header />
      <DetailsProduct />
      <Footer />
    </ChakraProvider>
  );
}
