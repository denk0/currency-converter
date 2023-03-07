import Header from "./components/Header";
import GlobalStyle from "./styled/global";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./styled/theme";
import { createContext, useEffect, useState } from "react";
import AppConfig from "./models/AppConfig";
import ExchangeRatesService from "./services/ExchangeRates";
import MainScene from "./scenes/Main";
import ExchangeRate from "./models/ExchangeRate";

const defaultAppConfig: AppConfig = {
  baseCurrency: { code: "UAH" },
  availableCurrencies: [
    {
      code: "USD",
    },
    {
      code: "EUR",
    },
  ],
};

export const AppConfigContext = createContext<AppConfig>(defaultAppConfig);
export const ExchangeRatesContext = createContext<ExchangeRate[]>([]);

const App = () => {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);

  const loadExchangeRates = async () => {
    const exchangeService = new ExchangeRatesService();
    const rates = await exchangeService.getExchangeRatesForToday(
      defaultAppConfig.baseCurrency,
      defaultAppConfig.availableCurrencies,
    );
    setExchangeRates(rates);
  };

  useEffect(() => {
    loadExchangeRates();
  }, []);

  if (!exchangeRates.length) {
    return <>Loading...</>;
  }

  return (
    <AppConfigContext.Provider value={defaultAppConfig}>
      <ThemeProvider theme={defaultTheme}>
        <ExchangeRatesContext.Provider value={exchangeRates}>
          <Header />
          <MainScene />
        </ExchangeRatesContext.Provider>
        <GlobalStyle />
      </ThemeProvider>
    </AppConfigContext.Provider>
  );
};

export default App;
