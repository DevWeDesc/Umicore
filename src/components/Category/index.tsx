import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductsList from "../Productlist";
import { api } from "../../lib/axios";

const theme = createTheme({
  typography: {
    fontFamily: "Dax, Arial, sans-serif", // Substitua "Arial, sans-serif" pelas fontes de fallback desejadas
  },
});

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [category, setCategory] = React.useState([]);
  const [categorySelected, setCategorySelected] = React.useState("");

  async function getCategorys() {
    const categories = await api.get("/src/assets/category.json");
    setCategory(categories.data.categorias);
  }

  React.useEffect(() => {
    getCategorys();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "81.4%", mt: 2 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {category.map((category: any) => (
            <BottomNavigationAction
              label={category.nome}
              onClick={() => setCategorySelected(category.nome)}
            />
          ))}
        </BottomNavigation>
      </Box>
      <ProductsList categories={categorySelected} />
    </ThemeProvider>
  );
}
