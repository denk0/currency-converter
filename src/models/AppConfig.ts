import Currency from "./Currency";

export default interface AppConfig {
  baseCurrency: Currency;
  availableCurrencies: Currency[];
}
