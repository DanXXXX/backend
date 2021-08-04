var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

const express = require('express');
const app = express();

const port = 8050;


app.get('/', (req, res) => {
    console.log("Salut");

    res.send("Authors API");
});

// app.get('/authors/:authors', (req, res) => {
//     res.send(`authors ${req.params.authors} !`);
// });


// for (let index = authors; index < 5; index++) {
//         res.json({
//         authors[index].name;
//      authors[index].nationality;
     
//     });
     
// };


app.get('/authors/:authors/books', (req, res) => {
let authors = req.params.authors
let books = req.params.books
let i = authors
    for (i; i <= 5; i++) {
        res.json({
            author: aut[i].name,
            nationality: aut[i].nationality,
            books: aut[i].books
        })
    }
})
// app.get('/authors/:authors/books', (req, res) => {
// })
app.get('*', function (req, res) {
    res.send('404 ERROR')
})



// app.get('/nom/:name/pays/:nationality', function(req, res) {
//     res.send(`nom ${req.params.name} ! Tu es ${req.params.nationality} .`);
// });

// app.get('/authors/:authorsName/origine/:originePays/livre/:Livre', (req,res) => {
//     let nom = req.params.authorName;
//     let name = "";
//     let books = "";
//     let nationality = "";

//     switch (authors) {
//         case 1:
//         name : "Lawrence Nowell";
//         nationality : "UK";
//               books : ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
//             break;

//         case 2:
//         name : "William Shakespeare";
//         nationality : "UK";
//               books : ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
//             break;
        
//         case 3:
//         name : "Charles Dickens";
//         nationality : "US";
//               books : ["Oliver Twist", "A Christmas Carol"]
//             break;
        
//         case 4:
//         name : "Oscar Wilde";
//         nationality : "UK";
//               books : ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
//             break;

//         default:
//             name = none;
//             nationality = not found;
//             books = not;
//             break;
// //     }

//      res.json({
//         nom: name,
//         pays: nationality,
//         livre: books

//     });
// })


app.listen(port, () => {
    console.log(`The server is listening in port: ${port}`);
});



