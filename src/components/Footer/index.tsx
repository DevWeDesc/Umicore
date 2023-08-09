import { ChakraProvider, Flex, Text } from "@chakra-ui/react";
import "./footer.css";

export default function Footer() {
  return (
    <ChakraProvider>
      <Flex
        mt="7rem"
        w="100%"
        bg="#031d33"
        h="8rem"
        color="white"
        alignItems="center"
        justifyContent="space-between"
        // px="20"
        position="relative"
        bottom="0"
      >
        {" "}
        <Text fontWeight="bold">
          Copyright © 2023 - Umicore. Todos os direitos reservados
        </Text>
        <Text fontWeight="bold">Powered By WeDesc</Text>
        <Flex gap="4" textDecoration="underline">
          <a href="">Termos de Uso</a>
          <a href="">Politicas de Privacidade</a>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
