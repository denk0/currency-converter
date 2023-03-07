import { Item, StyledCurrencyRatesList } from "./styled";
import { useContext } from "react";
import { ExchangeRatesContext } from "../../App";
import CurrencyRateDisplay from "../CurrencyRateDisplay";

const CurrencyRatesList = () => {
  const currencyRates = useContext(ExchangeRatesContext);

  return (
    <StyledCurrencyRatesList>
      {currencyRates.map((currencyRate) => (
        <Item key={currencyRate.currency.code}>
          <CurrencyRateDisplay data={currencyRate} />
        </Item>
      ))}
    </StyledCurrencyRatesList>
  );
};

export default CurrencyRatesList;
