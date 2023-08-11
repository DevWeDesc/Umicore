import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductsList from "../Productlist";
//import { api } from "../../lib/axios";

const theme = createTheme({
  typography: {
    fontFamily: "Dax, Arial, sans-serif", // Substitua "Arial, sans-serif" pelas fontes de fallback desejadas
  },
});
interface CategoryProps {
  nome: string;
}
export default function SimpleBottomNavigation() {
  // const [value, setValue] = React.useState(0);
  //const [category, setCategory] = React.useState<Category[]>([]);
  const [categorySelected, setCategorySelected] = React.useState("");

  const category = [
    {
      id: 0,
      nome: "Todas Opções",
      descricao:
        "Smartphones, laptops, tablets, câmeras, acessórios eletrônicos, gadgets, dispositivos inteligentes",
    },
    {
      id: 1,
      nome: "Eletrônicos e Tecnologia",
      descricao:
        "Smartphones, laptops, tablets, câmeras, acessórios eletrônicos, gadgets, dispositivos inteligentes",
    },
    {
      id: 2,
      nome: "Acessórios de Moda",
      descricao:
        "Roupas masculinas, femininas e infantis, calçados, acessórios de moda, joias, bolsas, produtos de beleza",
    },
    {
      id: 3,
      nome: "Móveis e Decoração",
      descricao:
        "Móveis, decoração de interiores, utensílios domésticos, artigos para cama, mesa e banho, iluminação, produtos de limpeza",
    },
    {
      id: 4,
      nome: "Esportes e Lazer",
      descricao:
        "Equipamentos esportivos, roupas de academia, calçados esportivos, acessórios para atividades ao ar livre, jogos de tabuleiro",
    },
    {
      id: 5,
      nome: "Saúde e Bem-Estar",
      descricao:
        "Vitaminas, suplementos, produtos naturais, equipamentos de fitness, produtos para cuidados pessoais, produtos de beleza",
    },
    {
      id: 6,
      nome: "Livros e Entretenimento",
      descricao:
        "Livros impressos e digitais, eBooks, jogos de vídeo game, filmes, música, brinquedos, instrumentos musicais",
    },
  ];

  // async function getCategorys() {
  //   const categories = await api.get("/src/assets/category.json");
  //   //setCategory(categories.data.categorias);
  // }

  // React.useEffect(() => {
  //   getCategorys();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "97%", mt: 6.1 }}>
        <BottomNavigation
          showLabels
          // value={value}
          // onChange={(newValue) => {
          //   setValue(newValue);
          // }}
        >
          {category.map((Category: CategoryProps) => (
            <BottomNavigationAction
              label={Category.nome}
              onClick={() => setCategorySelected(Category.nome)}
            />
          ))}
        </BottomNavigation>
      </Box>
      <ProductsList categories={categorySelected} />
    </ThemeProvider>
  );
}
