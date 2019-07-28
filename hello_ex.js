let book = { title: 'javaポケットリファレンス', publish: '技術評論社', price: 2680, other: {keyword: 'java', logo: 'logo.jpg'} };
let {title, other, other: {keyword, logo} } = book;
console.log(title);
console.log(other);
console.log(keyword);
console.log(book);
