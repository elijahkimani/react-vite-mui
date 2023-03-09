import { queryClient } from "./api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/home/home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/mui-theme";
import "./styles/app.css";
import MainLayout from "./components/layout";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout>
          <HomePage />
        </MainLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
