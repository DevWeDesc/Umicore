import FormLogin from "../../components/FormLogin";
import { Flex } from "@chakra-ui/react";
import "./login.css";

export default function Login() {
  return (
    <>
      <Flex
        w="100%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        bg="linear-gradient(to bottom, #fafafa , #598bb6, #031d33);"
      >
        <Flex
          direction="column"
          w="30%"
          paddingTop="5"
          paddingBottom="20"
          paddingX="20"
          alignContent="space-between"
          rounded="xl"
          backgroundColor="white"
        >
          <FormLogin />
        </Flex>
      </Flex>
    </>
  );
}
