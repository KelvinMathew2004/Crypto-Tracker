# 💸 Crypto Tracker

**Crypto Tracker** is a React-based web app that displays real-time cryptocurrency data. Users can explore price, market cap, and other details for dozens of cryptocurrencies, and use the search functionality to find a specific coin by its symbol. Built using the CryptoCompare API, the app is a lightweight tracker with both utility and educational value.

---

## 🧠 Overview

This app gives users quick insight into the ever-shifting world of cryptocurrencies. Leveraging the CryptoCompare API, it fetches live data and displays key stats like value, percent change, and market cap. Users can search for any coin in the displayed list using its symbol. Optionally, the app can also pull in and display known crypto news using the CryptoNews API.

---

## ✨ Features

- 📈 View a list of **at least 30 cryptocurrencies**
  - Includes image, name, and current USD price
- 🔍 **Search functionality** to filter coins by their **symbol**
- 🔗 Click on a cryptocurrency in the list to see **detailed information**
  - Includes description, algorithm, and price history
  - Each coin has its own **unique route** (e.g. `/coin/bitcoin`)
- 🚫 Graceful handling of invalid routes via a **custom 404 page**
- 📊 Display a **graph of a coin’s price change** over time
- 🚀 Optimizes performance using `AbortController` to **cancel ongoing CoinInfo API calls**

---

## 🚦 Routing Details

- `/` – Home page with the list of coins
- `/coin/:id` – Detail page for a specific coin
- `*` – Fallback route for 404 pages

All routing is handled using **React Router**, with nested components and parameterized routes for coin details.

---

## 🛠️ Built With

- React
- JavaScript (ES6+)
- HTML/CSS
- [React Router](https://reactrouter.com/)
- [CryptoCompare API](https://min-api.cryptocompare.com/)
- [CryptoScamDB API](https://min-api.cryptocompare.com/)

---

## 📸 Preview

> [Live Demo](https://crypto-know-it-all.netlify.app/)

- ✅ Home page showing all coins
- ✅ Detail view for a coin (e.g., `/coin/404Coin`)
- ✅ 404 page for invalid routes

---

## 📄 License

    Copyright [2025] [Kelvin Mathew]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0
