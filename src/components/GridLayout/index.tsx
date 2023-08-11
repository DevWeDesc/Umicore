import React, { ReactNode } from "react";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Header from "../Header";
import Nav from "../Nav";
//import ProductsList from "../Productlist";
import Footer from "../Footer";

interface GridProps {
  children: ReactNode;
}

export default function GridLayout({ children }: GridProps) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      bg="linear-gradient(to bottom, #fafafa , #598bb6, #031d33);"
    >
      <Grid
        maxW="1600px"
        templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
        gridTemplateRows={"100px 1fr 100px"}
        gridTemplateColumns={"250px 1fr"}
        minH="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"}>
          <Header />
        </GridItem>
        <GridItem pl="2" area={"nav"}>
          <Nav />
        </GridItem>
        <GridItem pl="7" area={"main"}>
          {children}
          {/* <ProductsList /> */}
        </GridItem>
        <GridItem minW="100%" area={"footer"}></GridItem>
      </Grid>
      <Footer />
    </Flex>
  );
}
