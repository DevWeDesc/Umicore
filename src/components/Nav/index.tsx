import { Flex, FormLabel, Input, Select, Stack, Text } from "@chakra-ui/react";

import { useState } from "react";
import { GenericModal } from "../Modal";
import {
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
//import axios from "axios";
// import { useForm /*, SubmitHandler*/ } from "react-hook-form";
// //import { TextField } from "@mui/material";
// import { object, string /*, number , date */ } from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { api } from "../../lib/axios";
// import { toast } from "react-toastify";
//import { RealoadContext } from "../../context/reloadContext";
// import { useReloadContext } from "../../context/reloadContext";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// const Schema = object({
//   photo: string().required("O Link é Obrigatório"),
//   title: string().required("O Titulo é Obrigatório"),
//   description: string().required("A Descrição é  Obrigatória"),
//   price: string().required("O Preço Obrigatório"),
//   category: string().required("A Categoria é Obrigatória"),
// });

// type FormData = yup.InferType<typeof Schema>;

// type Inputs = {
//   photo: string;
//   title: string;
//   description: string;
//   price: string;
// };

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // const { setReload } = useReloadContext();
  //   //const [reload, setReload] = useState(false);

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<FormData>({
  //     resolver: yupResolver(Schema),
  //   });
  //   const onSubmit = async (data: FormData) => {
  //     await api
  //       .post("http://localhost:3000/products", {
  //         photo: data.photo,
  //         title: data.title,
  //         description: data.description,
  //         price: data.price,
  //         category: data.category,
  //       })
  //       .then(() => {
  //         ReloadedTrue();
  //         toast.success("Anuncio criado com sucesso!", {
  //           position: "top-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           theme: "light",
  //         });
  //         setModalOpen(false);
  //       });
  //   };

  //   function ReloadedTrue() {
  //     if (setReload) {
  //       setReload(true);
  //     }
  //   }

  // try {
  //   console.log("Dados Enviados com sucesso");
  // } catch (error) {
  //   console.log(error);
  // }

  // axios({
  //   method: "post",
  //   url: "/user/12345",
  //   data: {
  //     firstName: "Fred",
  //     lastName: "Flintstone",
  //   },
  // });

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Flex
      h="20rem"
      mt="12"
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      px="5"
      py="10"
      bg="white"
      rounded="xl"
    >
      <Text fontWeight="bold" fontSize="21px" w="100%" mb="10">
        Menu
      </Text>
      {/* <a href="" style={{ width: "100%" }}>
        <Text w="100%" fontSize="18">
          Dashboard
        </Text>
      </a> */}
      <a
        onClick={() => navigate("/Home")}
        style={{ width: "100%", cursor: "pointer" }}
      >
        <Text w="100%" fontSize="18">
          Listagem de Produtos
        </Text>
      </a>
      <a
        onClick={() => setModalOpen(true)}
        style={{ width: "100%", cursor: "pointer" }}
      >
        <Button
          w="100%"
          fontSize="18"
          textAlign="left"
          colorScheme="whatsapp"
          fontWeight="normal"
          mt="3"
        >
          <Text display="flex" alignItems="center">
            Anunciar <IoIosAdd style={{ color: "white", fontSize: "30px" }} />
          </Text>
        </Button>
      </a>

      <GenericModal isOpen={modalOpen} onClose={closeModal}>
        <ModalContent>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <ModalHeader>Reduza, reuse e recicle!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Adicionar Foto do seu produto</FormLabel>
            <Stack>
              <Input
                // {...register("photo")}
                focusBorderColor="lime"
                placeholder="Adicionar Foto do seu produto"
              />
              {/* <Text color="red.600">{errors.photo?.message}</Text> */}
            </Stack>
            <FormLabel mt="5">Titulo do seu produto</FormLabel>
            <Stack>
              <Input
                // {...register("title")}
                focusBorderColor="lime"
                placeholder="Insira o Titulo do seu produto"
              />
              {/* <Text color="red.600">{errors.title?.message}</Text> */}
            </Stack>
            <FormLabel mt="5">Descrição do seu produto</FormLabel>
            <Stack>
              <Input
                // {...register("description")}
                focusBorderColor="lime"
                placeholder="Insira a Descrição do seu produto"
              />
              {/* <Text color="red.600">{errors.description?.message}</Text> */}
            </Stack>
            <FormLabel mt="5">Preço do seu produto</FormLabel>
            <Stack>
              <Input
                // {...register("price")}
                focusBorderColor="lime"
                placeholder="Insira o Preço do seu produto"
              />
              {/* <Text color="red.600">{errors.price?.message}</Text> */}
            </Stack>
            <FormLabel mt="5">Categoria do seu produto</FormLabel>
            <Stack>
              <Select
                // {...register("category")}
                focusBorderColor="lime"
                placeholder="Insira a Categoria do seu produto"
              >
                <option value="Eletrônicos e Tecnologia">
                  Eletrônicos e Tecnologia
                </option>
                <option value="Acessórios de Moda">Acessórios de Moda</option>
                <option value="Móveis e Decoração">Móveis e Decoração</option>
                <option value="Esportes e Lazer">Esportes e Lazer</option>
                <option value="Saúde e Bem-Estar">Saúde e Bem-Estar</option>
                <option value="Livros e Entretenimento">
                  Livros e Entretenimento
                </option>
              </Select>
              {/* <Text color="red.600">{errors.category?.message}</Text> */}
            </Stack>
          </ModalBody>

          <ModalFooter w="100%">
            <Button
              w="50%"
              colorScheme="whatsapp"
              mr={3}
              //onClick={() => setModalOpen(false)}
              type="submit"
            >
              Cadastrar Produto
            </Button>
            <Button
              w="50%"
              colorScheme="red"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Cancelar
            </Button>
          </ModalFooter>
          {/* </form> */}
        </ModalContent>
      </GenericModal>
    </Flex>
  );
}
