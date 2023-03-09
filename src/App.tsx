import { queryClient } from "./api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/home/home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/mui-theme";
import "./styles/app.css";
import MainLayout from "./components/layout";
import {
  store as reduxStore,
  storePersistor as reduxStorePersistor,
} from "./store/redux";
import { PersistGate as ReduxPersistGate } from "redux-persist/integration/react";
import { Provider as ReduxStoreProvider } from "react-redux";
import { MobxStoreProvider } from "./store/mobx";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MobxStoreProvider>
        <ReduxStoreProvider store={reduxStore}>
          <ReduxPersistGate loading={null} persistor={reduxStorePersistor}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <MainLayout>
                <HomePage />
              </MainLayout>
            </ThemeProvider>
          </ReduxPersistGate>
        </ReduxStoreProvider>
      </MobxStoreProvider>
    </QueryClientProvider>
  );
}

export default App;
