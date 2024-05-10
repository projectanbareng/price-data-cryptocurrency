<template>
    <div class="cryptocurrency-list" :translucent="true">
      <p><button @click="getData" class="btn">Get Data</button></p>
      <table v-if="cryptocurrencies.length">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Simbol</th>
            <th>Harga USD</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cryptocurrency in cryptocurrencies" :key="cryptocurrency.name">
            <td>{{ cryptocurrency.name }}</td>
            <td>{{ cryptocurrency.symbol }}</td>
            <td class="price_data">{{ cryptocurrency.price_usd }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { getCryptocurrencies } from '@/Service/CryptocurrencyService';
  
  export default {
    data() {
      return {
        cryptocurrencies: [],
      };
    },
    methods: {
      async getData() {
        try {
          this.cryptocurrencies = await getCryptocurrencies();
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .cryptocurrency-list {
    margin: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th {
    padding: 8px;
    border: 1px solid black;
  }
  
  td {
    padding: 8px;
    border: 0px solid black;
  }
  
  tbody {
    border: 1px solid black;
  }
  
  .btn {
    background-color: #1E90FF;
    border: none;
    color: white;
    border-radius: 5px;
    padding: 15px 30px;
    cursor: pointer;
  }
  </style>
  