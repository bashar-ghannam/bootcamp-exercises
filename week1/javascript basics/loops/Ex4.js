let postsID = 1;
let commentID = 1;

const posts = [
  {
    id: 1,
    text: 'Love this product',
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: 'Idiot has no idea' },
      { id: 2, text: 'Fool!' },
      { id: 3, text: 'I agree!' },
    ],
  },
  {
    id: 3,
    text: 'So glad I found this. Bought four already!',
    comments: [],
  },
];

posts[postsID].comments = posts[postsID].comments.filter(
  (comment) => comment.id != commentID
);

console.log(posts);
