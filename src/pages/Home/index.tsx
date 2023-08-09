import { ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SimpleBottomNavigation from "../../components/Category";
import "./home.css";

export default function Home() {
  return (
    <ChakraProvider>
      <Flex direction="column" alignItems="center" minW="1685px" maxW="1685px">
        <Header />
        <SimpleBottomNavigation />
      </Flex>
      <Footer />
    </ChakraProvider>
  );
}
