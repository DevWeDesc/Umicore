import { ChakraProvider } from "@chakra-ui/react";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
import DetailsProduct from "../../components/DetailsProduct";
import GridLayout from "../../components/GridLayout";

export default function Product() {
  return (
    <ChakraProvider>
      <GridLayout>
        <DetailsProduct />
      </GridLayout>
      {/* <Header />*/}
    </ChakraProvider>
  );
}
