# 301-assessment

## Question 1 :

- My Answer :  Based on the original data we works on , Map it will be as the same size of the truthy array , Filter it will be the same size or less based on the filtering condition . 

### Filter : method creates an array filled with all array elements that pass a test, does not execute the function for array elements without values,does not change the original array.

### MAP :  method creates a new array with the results of calling a function for every array element, method calls the provided function once for each element in an array, in order, does not execute the function for array elements without values, this method does not change the original array.


## Question 2 :

- Nothing , the code have errors : (wrong tag name because the jquery can't have the button then id name so it is not working beacuse of that , but the function syntax is right ( standalone function inside the click event ) . 


## Question 3 :

<!-- const arrayNames = ["whatever inside"];  // Declare the array type of string  -->
const arrayNames = ['Mohmoud', 'Razan', 'John','Ahmed','Raghad','Bashar'];

function upperCase (arrayNames)          // Function declaration and passes the array as a parameter 
{
    arrayNames.forEach(element => {          // Use for each to go through the array and each item to convert it to uppercase (element == arrayNames[i])
    
    console.log('UpperCase element : ', element.ToUpperCase);     // convert the item to uppercase 
});


for (let i = 0;i<arrayNames.lenght;i++)
{
    console.log('UpperCase element : ', arrayNames[i].ToUpperCase);
}

} // End of uppercase function 



# Application 


require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const server = express();
server.use(cors());

// First Route 
server.get('/',(Request,Response) =>
{
Response.status(200).send('Home Page');
});

// Second Route 
const object = { Name :'Nawal', age : 31};

server.get('/data',(Request,Response) =>
{
Response.status(200).json(object);
});

// Third Route 
server.get('/error',(Request,Response) =>
{
Response.status(404).send('Not Found');
});


server.listen(PORT, () => console.log('Listens on port ' , PORT));



