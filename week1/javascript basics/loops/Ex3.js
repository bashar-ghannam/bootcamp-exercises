const posts = [
  { id: 1, text: 'Love this product' },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: 'So glad I found this. Bought four already!' },
];

console.log(
  posts.filter(
    (item) => !(item.text.includes('worst') || item.text.includes("DON'T BUY"))
  )
);
