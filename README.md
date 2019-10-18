# csc-315-assignment
# Sum Finder application

This application is used to find the sum of numbers entered in the parameter part of the query string of the URL

## Examples
 - 127.0.0.1:3000/5/6/7 --> should return an xml file containing:
 ```js
    <xml>
        <firstNumber>5</firstNumber>
        <secondNumber>6</secondNumber>
        <thirdNumber>7</thirdNumber>
        <sum>18</sum>
    </xml>
   ```

The code for the application is contained in the 'index.js' file.
To run the application:

    - Install nodejs on your computer
    - Open a terminal
    - Change the current directory to the working project directory
    - enter the command `node index` on your terminal and open the url:
        - `localhost:3000/5/6/7`
