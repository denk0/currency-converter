import { convertDateToString } from "../utils/date";
import Currency from "../models/Currency";
import ExchangeRate from "../models/ExchangeRate";
import { transformToUsualRate } from "../utils/currency";

type ExchangeRatesData = {
  base: string;
  date: string;
  success: boolean;
  timestamp: number;
  rates: {
    [key: string]: number;
  };
};

class ExchangeRatesService {
  private baseAPIUrl: string = "https://api.apilayer.com/";
  protected apiKey: string;
  protected currentDateString: string = "";

  constructor() {
    this.apiKey = process.env.REACT_APP_EXCHANGE_RATES_API_KEY ?? "";
    this.currentDateString = convertDateToString(new Date());
  }

  public getExchangeRatesForToday = async (
    baseCurrency: Currency,
    currenciesToConvert: Currency[],
  ): Promise<ExchangeRate[]> => {
    const exchangeRates: ExchangeRate[] = [];

    const url = `${this.baseAPIUrl}exchangerates_data/latest?base=${
      baseCurrency.code
    }&symbols=${currenciesToConvert
      .map((currency) => currency.code)
      .join(",")}&date=${this.currentDateString}`;

    const headers = new Headers();
    headers.append("apikey", this.apiKey);

    const options = {
      method: "GET",
      headers,
    };

    try {
      const response = await fetch(url, options);
      const data: ExchangeRatesData = await response.json();

      currenciesToConvert.forEach((currency) => {
        if (data.rates[currency.code]) {
          exchangeRates.push({
            currency: currency,
            rate: transformToUsualRate(data.rates[currency.code]),
          });
        }
      });
    } catch (error: any) {
      console.log(error);
      throw new Error("Failed to fetch exchange rates ");
    }

    return exchangeRates;
  };
}

export default ExchangeRatesService;
