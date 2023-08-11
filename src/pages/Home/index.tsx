import { ChakraProvider /*, Flex*/ } from "@chakra-ui/react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import SimpleBottomNavigation from "../../components/Category";
import "./home.css";
import GridLayout from "../../components/GridLayout";
/*import ProductsList from "../../components/Productlist";*/
import SimpleBottomNavigation from "../../components/Category";

export default function Home() {
  return (
    <ChakraProvider>
      <GridLayout>
        {/* <ProductsList /> */}
        <SimpleBottomNavigation />
      </GridLayout>
      {/* <Flex direction="column" alignItems="center" minW="1685px" maxW="1685px">
        <Header />
        <SimpleBottomNavigation />
      </Flex>
      <Footer /> */}
    </ChakraProvider>
  );
}
