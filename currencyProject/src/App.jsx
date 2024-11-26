import Input from "./components/Input";
import UseCurrencyInfo from "./customHooks/UseCurrencyInfo";
import { useState } from "react";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = UseCurrencyInfo(from);

  const convert = () => {
    setconvertedAmount(amount * Number(currencyInfo[to]));
  };

  const swapToFrom = () => {
    let fromValue = from;
    setfrom(to);
    setto(fromValue);
    setconvertedAmount(amount);
    setamount(convertedAmount);
  };
  const currenyOptions = Object.keys(currencyInfo);
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Input label="From" 
              amount = {amount}
              currencyOptions = {currenyOptions}
              onCurrencyChange={(currency)=>setamount(currency)}
              selectCurrency ={from}
              onAmountChange={(amount)=>setamount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapToFrom}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input label="To" 
              amount = {convertedAmount}
              currencyOptions={currenyOptions}
              onCurrencyChange={(currency)=>setamount(currency)}
              selectCurrency ={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
