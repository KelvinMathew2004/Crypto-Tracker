# 💸 Crypto Tracker

**Description:**  
Crypto Tracker is a React web app that brings real-time cryptocurrency data to your fingertips. Users can explore price, market cap, percent change, and other details for dozens of cryptocurrencies. Each coin has its own detail page with additional information and price history, while a search bar lets users quickly find coins by symbol. Built using the CryptoCompare API, the app is lightweight, informative, and easy to use.

---

## 🌟 Features

### 📊 Cryptocurrency Dashboard
- **List of coins:** View at least 30 cryptocurrencies with image, name, and current USD price.
- **Search by symbol:** Filter the list to find a specific coin quickly.
- **Known scams:** Optionally view a list of known cryptocurrency scams from a separate API (CryptoScamDB).

### 🔍 Coin Details
- **Detailed info:** Click on a coin to see its description, algorithm, and price history.
- **Unique routes:** Each coin has a dedicated route, e.g., `/coin/bitcoin`.
- **Price charts:** Visualize coin price changes over time.

### 🚦 Navigation
- `/` – Home page displaying all coins.
- `/coin/:id` – Detail page for a specific coin.
- `*` – Custom 404 page for invalid routes.
- Routing handled using **React Router**, with nested components and parameterized routes.

### ⚡ Performance & UX
- **AbortController:** Cancels ongoing CoinInfo API calls to optimize performance.
- **Responsive design:** Works well on desktop and mobile devices.
- **User-friendly UI:** Clean layout for quick scanning and interaction.

---

## 📸 Preview

> [Live Demo](https://crypto-know-it-all.netlify.app/)

![Crypto Know It All Walkthrough](./Walkthrough.gif)

---

## 🛠️ Built With

- React
- JavaScript (ES6+)
- HTML / CSS
- [React Router](https://reactrouter.com/)
- [CryptoCompare API](https://min-api.cryptocompare.com/)
- [CryptoScamDB API](https://min-api.cryptocompare.com/)

---

## ⚖️ License

    Copyright [2025] [Kelvin Mathew]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
