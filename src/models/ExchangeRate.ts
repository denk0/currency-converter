import Currency from "./Currency";

export default interface ExchangeRate {
  currency: Currency;
  rate: number;
}
