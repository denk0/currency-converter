import { Row, Separator, StyledConverter } from "./styled";
import Input from "../UI/Input";
import Select from "../UI/Select";
import { Fragment, useContext, useMemo, useState } from "react";
import { AppConfigContext, ExchangeRatesContext } from "../../App";
import { convertCurrency, generateExchangeMatrix } from "../../utils/currency";

const Converter = () => {
  const { availableCurrencies, baseCurrency } = useContext(AppConfigContext);
  const exchangeRates = useContext(ExchangeRatesContext);

  const exchangeMatrix = useMemo(() => {
    if (exchangeRates) {
      return generateExchangeMatrix(
        exchangeRates[0].rate,
        exchangeRates[1].rate,
      );
    }
    return {};
  }, [exchangeRates]);

  const currenciesList = useMemo(
    () =>
      [baseCurrency, ...availableCurrencies].map((currency) => currency.code),
    [baseCurrency, availableCurrencies],
  );

  const [exchangeRows, setExchangeRows] = useState<
    { value: string; currency: string }[]
  >([
    {
      value: "",
      currency: currenciesList[0],
    },
    {
      value: "",
      currency: currenciesList[1],
    },
  ]);

  const convert = (row: number) => {
    const newState = [...exchangeRows];

    const converted = convertCurrency(
      parseFloat(newState[row].value || ""),
      newState[row].currency,
      newState[row === 0 ? 1 : 0].currency,
      exchangeMatrix,
    );

    if (converted) {
      newState[row === 0 ? 1 : 0].value = `${converted.toFixed(2)}`;
      setExchangeRows(newState);
    } else {
      newState[0].value = "";
      newState[1].value = "";
      setExchangeRows(newState);
    }
  };

  const handleCurrencySelection = (row: number, newSelection: string) => {
    const newState = [...exchangeRows];
    newState[row].currency = newSelection;
    setExchangeRows(newState);
    convert(row);
  };

  const handleAmountChange = (row: number, newAmount: string) => {
    const newState = [...exchangeRows];
    newState[row].value = newAmount;
    setExchangeRows(newState);
    convert(row);
  };

  return (
    <StyledConverter>
      {exchangeRows.map((exchangeRow, index: number) => {
        return (
          <Fragment key={`exchange-row-${index}`}>
            <Row>
              <Input
                name={`${index}`}
                placeholder={exchangeRows[index].currency}
                value={exchangeRows[index].value}
                type="number"
                onChange={(event) =>
                  handleAmountChange(index, event.currentTarget.value)
                }
              />
              <Select
                value={exchangeRows[index].currency}
                options={currenciesList}
                onChange={(value: string) =>
                  handleCurrencySelection(index, value)
                }
              />
            </Row>
            {index === 0 && (
              <Separator>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g id="XMLID_1_">
                    <path
                      id="XMLID_6_"
                      d="M180.1,454.3V241.1h-30.7v213.2L39.6,343.5l-21.4,21.4L165.2,512l146.2-147.1L290,343.5L180.1,454.3z
                         M164.3,469.2L164.3,469.2L164.3,469.2L164.3,469.2z M471.5,168.5L361.7,57.7v215h-30.7v-215L221.1,168.5l-21.4-21.4L346.8,0
                        l147.1,147.1L471.5,168.5z"
                    />
                  </g>
                </svg>
              </Separator>
            )}
          </Fragment>
        );
      })}
    </StyledConverter>
  );
};

export default Converter;
