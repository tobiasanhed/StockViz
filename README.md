# What is StockViz?
StockViz is an investment management application.  It helps you keep track of your investments by visualizing the present value of your portfolio and assets.  StockViz always keeps you up to date by downloading the latest financial market data from various *providers*.  The goal is to provide the most fundamental tools for keeping track of your investments without cluttering the interface with complex analysis tools etc.

![Screenshot](images/screenshot1.png)

## Acquiring StockViz
Click [here](https://github.com/tobiasanhed/StockViz/releases) to download the latest release of StockViz.

## Building and running
**Prerequisites**

* [Node.js](https://nodejs.org/en/)

Enter the following commands in your terminal to build and run the application:

```bash
git clone https://github.com/tobiasanhed/StockViz.git
cd StockViz
npm install && ./node_modules/.bin/typings install
npm run build && npm run start
```

## Built with
* [Electron](http://electron.atom.io/) - Build cross platform desktop apps with JavaScript, HTML, and CSS
* [Material-UI](http://www.material-ui.com/) - A set of React components that Implement Google's Material Design
* [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine
* [React](https://facebook.github.io/react/) - A JavaScript library for building user interfaces
* [TypeScript](https://www.typescriptlang.org/) - A free and open-source programming language developed and maintained by Microsoft

## Contributors
* [Philip Arvidsson](https://github.com/philiparvidsson) - *Vision and architecture.*
* [Tobias Ånhed](https://github.com/tobiasanhed) - *Implementation and visual design.*

## About the project
During the time of writing our [bachelor’s thesis](https://github.com/philiparvidsson/Sequence-to-Sequence-Learning-of-Financial-Time-Series), we delved deeper into various financial markets.  We decided we might as well start trading while waiting for our predictive models to complete their calculations (taking *hours* at a time—literally).  To keep track of our investments easily, we developed StockViz.
