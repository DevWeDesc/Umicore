import { Box, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Text } from "@chakra-ui/react";
import Logo from "../../assets/Logo_Umicore_2017.png";
import { GenericModal } from "../Modal";
import {
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Flex maxH="7rem" w="80%" alignItems="center">
      <Flex w="15rem">
        <img
          src={Logo}
          alt=""
          style={{ width: "100%", objectFit: "contain" }}
        />
      </Flex>
      <Flex w="80%" h="98px" alignItems="end">
        <Flex
          h="4rem"
          bg="white"
          w="100%"
          rounded="2xl"
          px="10"
          py="2"
          justifyContent="space-between"
        >
          <Box textAlign="center" fontWeight="semibold">
            <Text>Olá WeDesc!</Text>
            <Text>desenvolvimento@wedesc.com</Text>
          </Box>
          <Flex alignItems="center">
            <Button
              colorScheme="blue"
              px="8"
              onClick={() => setModalOpen(true)}
            >
              Sair
            </Button>
            <GenericModal isOpen={modalOpen} onClose={closeModal}>
              <ModalContent>
                <ModalHeader>
                  Tem certeza de que deseja sair da sua conta?
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text fontWeight="bold" mb="1rem">
                    Ao sair, você será desconectado da sua conta atual e
                    precisará fazer login novamente para acessar sua conta. Se
                    você tem tarefas não concluídas ou informações importantes
                    não salvas, verifique se salvou tudo antes de sair. Deseja
                    continuar e sair da conta?
                  </Text>
                </ModalBody>

                <ModalFooter w="100%">
                  <Button
                    w="50%"
                    colorScheme="blue"
                    mr={3}
                    onClick={() => setModalOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    w="50%"
                    colorScheme="red"
                    onClick={() => {
                      setModalOpen(false);
                      toast.success("Deslogado com sucesso!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                      navigate("/");
                    }}
                  >
                    Sair da Conta
                  </Button>
                </ModalFooter>
              </ModalContent>
            </GenericModal>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
