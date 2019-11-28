const express = require('express');

var books = [{
        tittle: "book1",
        genere: "history",
        author: "victor hugo",
        img: "bookicon.png",
        content: `It is a long established fact
       that a reader will be distracted by
       nthe readable content of a page
        when looking at its layout.
        The point of using Lorem Ipsum
        is that it has a more-or-less normal
        distribution of letters, as opposed
        using 'Content here, content here',
        making it look like readable English.
        Many desktop publishing packages and
        web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum
         will uncover many web sites still in their infancy.`
    },
    {
        tittle: "book2",
        genere: "history",
        author: "victor hugo",
        img: "bookicon.png",
        content: `It is a long established fact
       that a reader will be distracted by
       nthe readable content of a page
        when looking at its layout.
        The point of using Lorem Ipsum
        is that it has a more-or-less normal
        distribution of letters, as opposed
        using 'Content here, content here',
        making it look like readable English.
        Many desktop publishing packages and
        web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum
         will uncover many web sites still in their infancy.`
    },
    {
        tittle: "book2",
        genere: "history",
        author: "victor hugo",
        img: "bookicon.png",
        content: `It is a long established fact
       that a reader will be distracted by
       nthe readable content of a page
        when looking at its layout.
        The point of using Lorem Ipsum
        is that it has a more-or-less normal
        distribution of letters, as opposed
        using 'Content here, content here',
        making it look like readable English.
        Many desktop publishing packages and
        web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum
         will uncover many web sites still in their infancy.`
    },
    {
        tittle: "book3",
        genere: "history",
        author: "victor hugo",
        img: "bookicon.png",
        content: `It is a long established fact
       that a reader will be distracted by
       nthe readable content of a page
        when looking at its layout.
        The point of using Lorem Ipsum
        is that it has a more-or-less normal
        distribution of letters, as opposed
        using 'Content here, content here',
        making it look like readable English.
        Many desktop publishing packages and
        web page editors now use Lorem Ipsum as their
        default model text, and a search for 'lorem ipsum
         will uncover many web sites still in their infancy.`
    },
];

var booksrouter = express.Router()

function router(nav) {
    booksrouter.route('/').get(
        (req, res) => {
            res.render(
                'books', {
                    nav,
                    tittle: "Books",
                    books
                }
            )
        });
    booksrouter.route('/addbook').get(
        (req, res) => {
            res.render(
                'addbook', {
                    nav,
                    tittle: "Add Book"
                }
            )
        });
    booksrouter.route('/save').post(
        (req, res) => {
            //res.send("form submitted");
            console.log(req.body.bookname);
        });



    booksrouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render('book', {
                nav,
                tittle: "books",
                book: books[id]
            });
        });
    return booksrouter;
}



module.exports = router;