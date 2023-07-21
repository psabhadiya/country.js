# Project Name

A brief description of your Node.js package and what it does.

## Installation

You can install this package using npm. Open your terminal and run the following command:

```bash
npm install country-fetcher
```

## Usage

Here's how you can use this package in your Node.js application:

**Node.js**
```bash
const getCountry = require('country-fetcher');
```
**If you are using Typescript**
```bash
import { getCountry } from "country-fetcher";
```

## Features
It helps getting country information using

- **Full Name:** United States of America
- **Alpha 2:** US
- **Alpha 3:** USA
- **Alternate Name:**: United States

## API Documentation
Use getCountry method to get the information.

`getCountry(name)`
It searches country in case insensitive manner.

name: Name/Alpha2/Alpha3/Alternate Name of the country


## Example
Below is the example how to use it.
```javascript
const getCountry = require('country-fetcher');

const country1 = getCountry('United States of America'); // OR getCountry('United States'); OR getCountry('US'); OR getCountry('USA');
console.log(country1); // Output: {}
```