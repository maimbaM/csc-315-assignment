const express = require('express');

const app = express();

app.get("/", (request, response) => {
    response.send("<p>Enter the the url with the following format:</p>"
        +
        "<code>localhost:3000/5/6/7</code>"
        +
        "<p>The numbers in the parameters are entered as per your choice</p>"
    );
});

app.listen(3000);

app.get("/:num1/:num2/:num3", (request, response) => {
    let {num1} = request.params;
    let {num2} = request.params;
    let {num3} = request.params;
    let sum = Number(num1) + Number(num2) + Number(num3);
    response.type("application/xml");

    response.send(`<xml version="1.0.0"><firstNumber>${num1}</firstNumber><secondNumber>${num2}</secondNumber><thirdNumber>${num3}</thirdNumber><sum>${sum.toString()}</int></sum>`);
});
