/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
//import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import "./details.css";
//import { api } from "../../lib/axios";

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

  const produtos = [
    {
      id: 1,
      urlImagem:
        "https://m.media-amazon.com/images/I/51UnpqyKrEL._AC_SX679_.jpg",
      titulo: "Smartphone Modelo XYZ",
      preco: "1.200",
      descricao:
        "O Smartphone Modelo XYZ é um dispositivo de última geração que combina tecnologia avançada com design elegante. Sua tela OLED de alta qualidade oferece cores vibrantes e contrastes nítidos, proporcionando uma experiência visual excepcional. A câmera de alta resolução captura fotos e vídeos com detalhes impressionantes, mesmo em condições de pouca luz. Com um processador poderoso e ampla capacidade de armazenamento, você terá desempenho rápido e espaço suficiente para todos os seus aplicativos e arquivos. Além disso, recursos como reconhecimento facial e sensor de impressão digital garantem a segurança dos seus dados. Este smartphone é a escolha perfeita para quem busca o que há de mais moderno em tecnologia móvel.",
      categoria: "Eletrônicos e Tecnologia",
    },
    {
      id: 2,
      urlImagem:
        "https://m.media-amazon.com/images/I/71+H83HTfXL._AC_SX300_SY300_.jpg",
      titulo: "Notebook Ultrabook Marca ABC",
      preco: "1.800",
      descricao:
        "O Notebook Ultrabook Marca ABC é a combinação ideal entre desempenho e portabilidade. Sua construção leve e elegante torna-o perfeito para levar a qualquer lugar, seja para o escritório ou para se divertir. Equipado com um processador de última geração e memória RAM de alto desempenho, você pode executar tarefas complexas com facilidade. A tela de alta resolução proporciona imagens nítidas e cores vivas, tornando-o ideal para trabalho e entretenimento. Além disso, a bateria de longa duração garante que você possa usar o notebook durante todo o dia sem se preocupar com recargas constantes. Se você está em busca de um companheiro confiável e eficiente, o Notebook Ultrabook Marca ABC é a escolha certa.",
      categoria: "Eletrônicos e Tecnologia",
    },
    {
      id: 3,
      urlImagem:
        "https://m.media-amazon.com/images/I/71O697TvdhL.__AC_SY300_SX300_QL70_ML2_.jpg",
      titulo: "Bicicleta Mountain Bike Modelo 123",
      preco: 600.0,
      descricao:
        "A Bicicleta Mountain Bike Modelo 123 é a companheira perfeita para suas aventuras off-road. Projetada para enfrentar terrenos desafiadores, esta bicicleta possui suspensão dupla que proporciona um passeio suave mesmo em trilhas irregulares. Os freios a disco oferecem excelente controle de frenagem, garantindo sua segurança durante as descidas. Seu quadro resistente e durável foi projetado para suportar impactos e oferecer estabilidade durante os percursos mais radicais. Independentemente de estar enfrentando montanhas ou trilhas na floresta, a Bicicleta Mountain Bike Modelo 123 é a escolha certa para os entusiastas do ciclismo que buscam aventura e emoção.",
      categoria: "Esportes e Lazer",
    },
    {
      id: 4,
      urlImagem:
        "https://m.media-amazon.com/images/I/61qif4R55hL.__AC_SX300_SY300_QL70_ML2_.jpg",
      titulo: "Fones de Ouvido Bluetooth",
      preco: 100.0,
      descricao:
        "Os Fones de Ouvido Bluetooth oferecem uma experiência auditiva imersiva e sem fio. Com tecnologia de cancelamento de ruído ativo, você pode desfrutar da sua música favorita sem distrações indesejadas. Os drivers de alta qualidade proporcionam um som cristalino e graves profundos, tornando cada faixa uma experiência emocionante. A conectividade Bluetooth permite que você se mova livremente sem se preocupar com fios emaranhados. Além disso, os fones são projetados para serem confortáveis, mesmo durante longas sessões de audição. Seja para música, chamadas telefônicas ou para assistir a filmes, esses fones de ouvido são a escolha perfeita para quem busca qualidade e conveniência.",
      categoria: "Eletrônicos e Tecnologia",
    },
    {
      id: 5,
      urlImagem:
        "https://m.media-amazon.com/images/I/91rQ3XfEYzL.__AC_SX300_SY300_QL70_ML2_.jpg",
      titulo: "Câmera DSLR Profissional",
      preco: "1.500",
      descricao:
        "A Câmera DSLR Profissional é a ferramenta essencial para fotógrafos que buscam capturar imagens excepcionais. Equipada com uma lente intercambiável de alta qualidade, esta câmera oferece versatilidade para fotografar uma ampla gama de cenas. Seu sensor de alta resolução captura detalhes impressionantes e reproduz cores precisas. Além disso, recursos avançados como modos de cena, controle manual e foco automático rápido permitem que você tenha total controle sobre suas fotos. Seja para retratos deslumbrantes, paisagens expansivas ou eventos emocionantes, a Câmera DSLR Profissional é a escolha definitiva para fotógrafos que buscam qualidade excepcional e criatividade ilimitada.",
      categoria: "Eletrônicos e Tecnologia",
    },
    {
      id: 6,
      urlImagem: "https://m.media-amazon.com/images/I/31zx1zh1PZS._AC_.jpg",
      titulo: "Tênis Esportivo",
      preco: 80.0,
      descricao:
        "O Tênis Esportivo é o parceiro ideal para suas atividades esportivas e estilo de vida ativo. Projetado com conforto e durabilidade em mente, este tênis oferece suporte aos seus pés durante os treinos e exercícios. Sua sola flexível proporciona excelente aderência e tração, permitindo que você se mova com confiança em qualquer superfície. Além disso, o design moderno e elegante faz com que o tênis seja adequado para uso casual também. Independentemente de estar correndo na pista, treinando na academia ou simplesmente dando um passeio, o Tênis Esportivo oferece o equilíbrio perfeito entre desempenho e estilo.",
      categoria: "Esportes e Lazer",
    },
    {
      id: 6,
      urlImagem:
        "https://d1q83jvjv6c875.cloudfront.net/Custom/Content/Products/11/47/114771_tenis-nike-revolution-6-unissex-preto-branco135835_m2_638199203784097266.jpg",
      titulo: "Tênis Esportivo",
      preco: 80.0,
      descricao:
        "O Tênis Esportivo é o parceiro ideal para suas atividades esportivas e estilo de vida ativo. Projetado com conforto e durabilidade em mente, este tênis oferece suporte aos seus pés durante os treinos e exercícios. Sua sola flexível proporciona excelente aderência e tração, permitindo que você se mova com confiança em qualquer superfície. Além disso, o design moderno e elegante faz com que o tênis seja adequado para uso casual também. Independentemente de estar correndo na pista, treinando na academia ou simplesmente dando um passeio, o Tênis Esportivo oferece o equilíbrio perfeito entre desempenho e estilo.",
      categoria: "Esportes e Lazer",
    },
    {
      id: 6,
      urlImagem:
        "https://cdnv2.moovin.com.br/carolinacalcados/imagens/produtos/det/tenis-nike-downshifter-12-feminino-8ec0b3f3184d480af36aefdde86a0999.jpg",
      titulo: "Tênis Esportivo",
      preco: 80.0,
      descricao:
        "O Tênis Esportivo é o parceiro ideal para suas atividades esportivas e estilo de vida ativo. Projetado com conforto e durabilidade em mente, este tênis oferece suporte aos seus pés durante os treinos e exercícios. Sua sola flexível proporciona excelente aderência e tração, permitindo que você se mova com confiança em qualquer superfície. Além disso, o design moderno e elegante faz com que o tênis seja adequado para uso casual também. Independentemente de estar correndo na pista, treinando na academia ou simplesmente dando um passeio, o Tênis Esportivo oferece o equilíbrio perfeito entre desempenho e estilo.",
      categoria: "Esportes e Lazer",
    },
    {
      id: 7,
      urlImagem:
        "https://m.media-amazon.com/images/I/61lkymCCwAL.__AC_SX300_SY300_QL70_ML2_.jpg",
      titulo: "Relógio Inteligente",
      preco: 200.0,
      descricao:
        "O Relógio Inteligente combina estilo e funcionalidade em um único acessório. Além de mostrar as horas, ele também monitora suas atividades diárias, como passos, calorias queimadas e frequência cardíaca. Você receberá notificações de mensagens e chamadas diretamente no seu pulso, permitindo que você fique conectado enquanto está em movimento. Com um design elegante e uma variedade de opções de mostradores, este relógio é adequado tanto para ocasiões formais quanto para atividades esportivas. Graças à sua conectividade com smartphones, você pode controlar a reprodução de música e tirar fotos remotamente. O Relógio Inteligente é a escolha perfeita para quem busca um estilo de vida moderno e conectado.",
      categoria: "Acessórios de Moda",
    },
    {
      id: 8,
      urlImagem:
        "https://m.media-amazon.com/images/I/612T5rQrMqL.__AC_SX300_SY300_QL70_ML2_.jpg",
      titulo: "Cadeira Ergonômica para Escritório",
      preco: 250.0,
      descricao:
        "A Cadeira Ergonômica para Escritório foi projetada para proporcionar conforto e suporte durante longas horas de trabalho. Seu design ergonômico ajuda a manter uma postura adequada, reduzindo o estresse e o desconforto nas costas. Com ajustes personalizáveis, como altura do assento e apoio lombar, você pode adaptar a cadeira às suas necessidades individuais. Além disso, o estofamento de alta qualidade oferece acolchoamento e respirabilidade, garantindo conforto ao longo do dia. Se você passa muito tempo em frente ao computador ou realiza tarefas no escritório, a Cadeira Ergonômica para Escritório é uma escolha essencial para manter sua saúde e produtividade.",
      categoria: "Móveis e Decoração",
    },
    {
      id: 9,
      urlImagem:
        "https://platinacosmeticos.fbitsstatic.net/img/p/divino-potao-2-em-1-creme-para-pentear-creme-hidratante-70159/256642.jpg?w=420&h=420&v=no-change&qs=ignore",
      titulo: "Creme de Cabelo Skala",
      preco: 20.0,
      descricao:
        "O creme de cabelo revitalizante nutre e hidrata profundamente os fios, deixando-os mais macios, brilhantes e saudáveis. Sua fórmula exclusiva repara danos, reduz o frizz e proporciona um toque suave que dura o dia todo.",
      categoria: "Saúde e Bem-Estar",
    },
    {
      id: 10,
      urlImagem:
        "data:image/jpeg;base64,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",
      titulo: "Livro Markus Susaki",
      preco: 250.0,
      descricao:
        "Este livro envolvente mergulha os leitores em uma emocionante jornada através de mundos imaginários e personagens cativantes. Com reviravoltas surpreendentes e uma narrativa envolvente, é uma leitura imperdível para quem busca escapar para aventuras incríveis.",
      categoria: "Livros e Entretenimento",
    },
  ];

  async function GetProduts() {
    //const products = await api.get("/src/assets/listagem.json");
    produtos.filter((product: any) =>
      product.id == id ? setproduct(product) : null
    );
  }

  console.log(product);
  useEffect(() => {
    GetProduts();
  }, []);

  return (
    <ChakraProvider>
      <Box mt="12">
        <Flex alignItems="center" direction="column">
          <Flex w="100%" pr="10">
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
