'use strict';


//Question 3
// const arrayNames = ["whatever inside"];  // Declare the array type of string 
// const arrayNames = ['Mohmoud', 'Razan', 'John','Ahmed','Raghad','Bashar'];
// function upperCase (arrayNames)          // Function declaration and passes the array as a parameter 
// {
//     arrayNames.forEach(element => {          // Use for each to go through the array and each item to convert it to uppercase (element == arrayNames[i])
    
//     console.log('UpperCase element : ', element.ToUpperCase);     // convert the item to uppercase 
// });


// for (let i = 0;i<arrayNames.lenght;i++)
// {
//     console.log('UpperCase element : ', arrayNames[i].ToUpperCase);
// }

// } // End of uppercase function 


/************************************* Application Questions **********************************************/ 

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



