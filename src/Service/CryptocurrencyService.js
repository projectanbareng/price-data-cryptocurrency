import axios from 'axios';

const BASE_URL = 'https://api.coinlore.net/api/tickers/';
const SYMBOLS = ['BTC', 'ETH', 'USDT', 'BNB'];

export async function getCryptocurrencies() {
  const response = await axios.get(BASE_URL);
  return response.data.data.filter(crypto => SYMBOLS.includes(crypto.symbol));
}
