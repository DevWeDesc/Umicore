import { useEffect /*, useState */ } from "react";
//import { api } from "../../lib/axios";
import { produtos } from "./products";
import {
  //Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import "./product.css";
//import SimpleBottomNavigation from "../Category";

interface PropsList {
  categories: string;
}

interface ProductsFilt {
  id: number;
  urlImagem?: string;
  titulo?: string;
  categoria?: string;
  descricao?: string;
  preco?: string;
}

export default function ProductsList({ categories }: PropsList) {
  const navigate = useNavigate();
  //const [products, setproducts] = useState([]);

  // async function GetProduts() {
  //   const products = await api.get("/src/assets/listagem.json");
  //   setproducts(products.data.produtos);
  // }

  useEffect(() => {
    //GetProduts();
    // const ProductsFiltered = produtos.filter((prod: ProductsFilt) =>
    //   prod.categoria === categories ? prod : "Sem categoria"
    // );
    console.log(produtos);
  }, []);
  return (
    <ChakraProvider>
      <Flex justifyContent="center" mt="4">
        <Flex
          w="100%"
          direction="row"
          wrap="wrap"
          justifyContent="left"
          gap="4"
          minW="1230px"
        >
          {produtos ? (
            produtos.map((product: ProductsFilt) => (
              <>
                {categories === "Todas Opções" || categories === "" ? (
                  <Card
                    cursor="pointer"
                    w="390px"
                    maxW="lg"
                    onClick={() => navigate(`/Product/${product.id}`)}
                  >
                    <CardBody display="flex" flexDirection="column">
                      <Image
                        src={product.urlImagem}
                        alt="Green double couch with wooden legs"
                        h="300"
                        objectFit="contain"
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{product.titulo}</Heading>
                        <Text>{product.categoria}</Text>
                        <Text>
                          {product.descricao?.substring(0, 158).concat("...")}
                        </Text>
                        <Text
                          color="green"
                          fontWeight="semibold"
                          fontSize="2xl"
                        >
                          R$ {product.preco},00
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing="2">
                        <Button variant="solid" colorScheme="blue">
                          Comprar
                        </Button>
                        <Button variant="ghost" colorScheme="blue">
                          <AiOutlineStar />
                          Adicionar aos Favoritos
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                ) : (
                  product.categoria == categories && (
                    <Card
                      cursor="pointer"
                      w="415px"
                      maxW="lg"
                      onClick={() => navigate(`/Product/${product.id}`)}
                    >
                      <CardBody display="flex" flexDirection="column">
                        <Image
                          src={product.urlImagem}
                          alt="Green double couch with wooden legs"
                          h="300"
                          objectFit="contain"
                        />
                        <Stack mt="6" spacing="3">
                          <Heading size="md">{product.titulo}</Heading>
                          <Text>
                            {product?.descricao
                              ?.substring(0, 158)
                              .concat("...")}
                          </Text>
                          <Text
                            color="green"
                            fontWeight="semibold"
                            fontSize="2xl"
                          >
                            R$ {product.preco},00
                          </Text>
                        </Stack>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <ButtonGroup spacing="2">
                          <Button variant="solid" colorScheme="blue">
                            Comprar
                          </Button>
                          <Button variant="ghost" colorScheme="blue">
                            <AiOutlineStar />
                            Adicionar aos Favoritos
                          </Button>
                        </ButtonGroup>
                      </CardFooter>
                    </Card>
                  )
                )}
              </>
            ))
          ) : (
            <h1>Sem produtos</h1>
          )}
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}
