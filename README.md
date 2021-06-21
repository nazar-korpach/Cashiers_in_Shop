# Cashiers in Shop
Cashiers in Shop is a mini project for chatbot studio

## Installation

Before start install all required dependencies
```bash
npm install
```

## Usage
Before you run a program create postgres DB and write it's url into .env file
After that run migrations
```bash
npm run migration:run
```

To run program at first uncoment main function in app.ts file and than write this in command line
```bash
npm start
```
To verify that program work currently you can run jest tests
```bash
npm test
```

## License
[MIT](https://choosealicense.com/licenses/mit/)