import { ExchangeMatrix } from "../models/ExchangeMatrix";

const transformToUsualRate = (rate: number): number =>
  parseFloat((1 / rate).toFixed(2));

// TODO: make it more dynamic to pass more available currencies and change the base currency
const generateExchangeMatrix = (
  uahToUsd: number,
  uahToEur: number,
): ExchangeMatrix => {
  return {
    UAH: {
      USD: 1 / uahToUsd,
      EUR: 1 / uahToEur,
      UAH: 1,
    },
    USD: {
      UAH: uahToUsd,
      EUR: uahToUsd / uahToEur,
      USD: 1,
    },
    EUR: {
      UAH: uahToEur,
      USD: uahToEur / uahToUsd,
      EUR: 1,
    },
  };
};

const convertCurrency = (
  amount: number,
  fromCurrency: string,
  toCurrency: string,
  matrix: ExchangeMatrix,
): number => {
  const rate = matrix[fromCurrency][toCurrency];
  return amount * rate;
};

export { transformToUsualRate, generateExchangeMatrix, convertCurrency };
