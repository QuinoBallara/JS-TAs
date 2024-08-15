const books = [
    {
        title: 'Norwegian Wood',
        author: 'Haruki Murakami'
    },
    {
        title: 'The Martian',
        author: 'Andy Weir'
    },
    {
        title: 'Children of Time',
        author: 'Adrian Tchaikovsky'
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton'
    },
    {
        title: 'Kafka on the Shore',
        author: 'Haruki Murakami'
    }
]

function getTheTitles(books) {
    let res = [];
    for (const elem of books) {
        res.push(elem.title);
    }
    console.log(res);
    return res;
}

getTheTitles(books);