import { StyledCurrencyRateDisplay } from "./styled";
import ExchangeRate from "../../models/ExchangeRate";

interface Props {
  data: ExchangeRate;
}

const CurrencyRateDisplay = ({ data: { currency, rate } }: Props) => {
  return (
    <StyledCurrencyRateDisplay>
      <div>{currency.code}</div>
      <div>{rate}</div>
    </StyledCurrencyRateDisplay>
  );
};

export default CurrencyRateDisplay;
