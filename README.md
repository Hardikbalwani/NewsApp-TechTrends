# TechTrends - Tech News Aggregator

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Requirements](#requirements)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

---

## Introduction

TechTrends is a tech news aggregator web application built using React and Bootstrap. It utilizes the [NewsAPI](https://newsapi.org/) to fetch the latest technology-related news from various sources and presents it in an organized and user-friendly manner. This documentation provides an overview of the project, its features, and how to set it up for local development.

---

## Features

TechTrends offers the following key features:

1. **News Categories:** Browse news articles by categories such as Technology, Science, Gadgets, and more.

2. **Search Functionality:** Search for specific news articles or topics of interest.

3. **Responsive Design:** The app is built using Bootstrap, ensuring it looks great on various screen sizes and devices.

4. **Real-time Updates:** News articles are fetched in real-time, keeping you up-to-date with the latest tech news.

5. **Source Filtering:** Filter news articles by the source they originate from.

6. **Pagination:** Navigate through multiple pages of news articles.

---

## Requirements

Before you can run TechTrends on your local machine, you'll need the following dependencies:

- Node.js (v14 or higher)
- npm (v7 or higher)
- A NewsAPI API key (get it [here](https://newsapi.org/))

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Hardikbalwani/techtrends.git
   ```

2. Navigate to the project directory:

   ```bash
   cd techtrends
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

---

## Configuration

To configure TechTrends with your NewsAPI key:

1. Create a `.env` file in the project root directory.

2. Add your NewsAPI key to the `.env` file:

   ```
   REACT_APP_NEWS_API_KEY=YOUR_API_KEY_HERE
   ```

   Replace `YOUR_API_KEY_HERE` with your actual NewsAPI key.

---

## Usage

Once you've installed and configured the project, you can run it locally:

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your web browser and go to `http://localhost:3000` to access TechTrends.

---

## Contributing

We welcome contributions to make TechTrends even better. If you'd like to contribute, please follow these guidelines:

1. Fork the repository on GitHub.

2. Create a new branch with a descriptive name for your feature or bug fix.

3. Make your changes and ensure the code is well-documented and follows best practices.

4. Create a pull request with a clear title and description of your changes.

5. Our team will review your pull request, provide feedback, and merge it once it's ready.

---

## License

TechTrends is open-source software licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software as per the terms of the license. See the [LICENSE](LICENSE) file for more details.
