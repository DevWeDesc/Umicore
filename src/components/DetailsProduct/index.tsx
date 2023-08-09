/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import "./details.css";

interface Product {
  id: number;
  urlImagem: string;
  titulo: string;
  descricao: string;
  preco: string;
}

export default function DetailsProduct() {
  const [product, setproduct] = useState({} as Product);
  const { id } = useParams();

  async function GetProduts() {
    const products = await api.get("/src/assets/listagem.json");
    products.data.produtos.filter((product: any) =>
      product.id == id ? setproduct(product) : null
    );
  }

  console.log(product);
  useEffect(() => {
    GetProduts();
  }, []);

  return (
    <ChakraProvider>
      <Box mt="20" mb="20">
        <Flex alignItems="center" direction="column">
          <Flex w="85%">
            <Card
              h="100%"
              p="8"
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Image
                p="5"
                objectFit="contain"
                //minW="500px"
                maxW="500px"
                src={product.urlImagem}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="lg">{product.titulo}</Heading>

                  <Text py="6" fontSize="19px" color="gray">
                    {product.descricao}
                  </Text>
                  <Text
                    color="green"
                    fontWeight="semibold"
                    fontSize="3xl"
                    mb="4"
                  >
                    R$ {product.preco},00
                  </Text>
                  <Flex>
                    <Button variant="solid" colorScheme="whatsapp">
                      <Flex alignItems="center">
                        <BsCashCoin size="22px" /> <Text ml="4"> Comprar</Text>
                      </Flex>
                    </Button>
                    <Button ml="4" variant="solid" colorScheme="blue">
                      <AiOutlineStar size="30px" />{" "}
                      <Text ml="4"> Adicionar aos Favoritos </Text>
                    </Button>
                  </Flex>
                  <Box mt="10">
                    <Text fontSize="25px" fontWeight="bold" mb="">
                      Opções para Contato
                    </Text>

                    <a href="https://api.whatsapp.com/send?phone=5511937302594">
                      <Button
                        bg="whatsapp.500"
                        _hover={{ backgroundColor: "whatsapp.600" }}
                      >
                        <FaWhatsapp
                          size={24}
                          style={{
                            color: "white",
                          }}
                        />
                      </Button>
                    </a>
                  </Box>
                </CardBody>
              </Stack>
            </Card>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
