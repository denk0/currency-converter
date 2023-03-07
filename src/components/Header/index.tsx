import { StyledHeader } from "./styled";
import CurrencyRatesList from "../CurrencyRatesList";

const Header = () => {
  return (
    <StyledHeader>
      <CurrencyRatesList />
    </StyledHeader>
  );
};

export default Header;
