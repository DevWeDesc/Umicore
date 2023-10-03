import {
  Box,
  Button,
  ChakraProvider,
  Checkbox,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../assets/Logo_Umicore_2017 (2).png";

interface IUser {
  email: string;
  password: string;
}

export default function FormLogin() {
  const navigate = useNavigate();
  const [user, setuser] = useState<IUser>({ email: "", password: "" });

  return (
    <ChakraProvider>
      <Flex direction="column" w="100%" mt="0">
        <Flex justifyContent="center" mb="10">
          <img style={{ width: "70%" }} src={Logo} alt="" />
        </Flex>
        <Text>Digite seu E-mail</Text>
        <Input
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setuser({ ...user, email: e.target.value })}
        ></Input>
        <Text mt="4">Digite sua Senha </Text>
        <Input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        ></Input>
        <Flex justifyContent="center" mt="5">
          <Checkbox> Lembrar de Mim?</Checkbox>
        </Flex>
        <Button
          w="100%"
          mt="4"
          colorScheme="blue"
          onClick={() => {
            if (
              user.email === "desenvolvimento@wedesc.com" &&
              user.password === "123"
            ) {
              toast.success("Logado com sucesso!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              navigate("Home");
            } else {
              toast.error("E-mail ou Senha Incorreto!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          }}
        >
          Entrar
        </Button>

        <Box mt="8" textDecoration="underline" textAlign="center">
          <a href="">Esqueceu sua senha ?</a>
          <br />
          <a href="">Não tem uma conta? Cadastre Aqui!</a>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
