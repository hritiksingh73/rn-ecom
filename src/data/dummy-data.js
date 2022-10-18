class Category {
  constructor(id, title, imageUrl, rating) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.rating = rating;
  }
}
export const CATEGORIES = [
  new Category(
    'c1',
    'Contrary to popular',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfjYNJfmFGQdBHw68pZiVy5ZENsiZ42dWNNhmRxO44lld0i_zXOcvvEDHH6tcJJ-vS1E&usqp=CAU',
    '⭐️⭐️⭐️⭐️⭐️',
  ),

  new Category(
    'c2',
    'Tho standard',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofkNfwe0XsruyEPsdDP0wsHn4Td_3ytViJg&usqp=CAU',
    '⭐️⭐️⭐️⭐️⭐️',
  ),
  new Category(
    'c3',
    'Hampden-Sydney',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcek6Tm_JFIYdr93aJQ5ZQYoE09MsIQgnoA&usqp=CAU',
    '⭐️⭐️⭐️⭐️⭐️',
  ),

  new Category(
    'c4',
    'Nullam ornare',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqdlBtInKP3H7Of1wSZNqCpUqLQ77Kg2JmQ&usqp=CAU',
    '⭐️⭐️⭐️⭐️⭐️',
  ),

  new Category(
    'c5',
    'Vegetables',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7a8WqdvagJUk-untXd8QF9o58agab-3hlyw&usqp=CAU',
    '⭐️⭐️⭐️⭐️⭐️',
  ),

  new Category(
    'c6',
    'Fruits',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFyY7Z9f2ChYUTaGUOp7-g6AO2pl-a2Gn4g&usqp=CAU',
    '⭐️⭐️⭐️⭐️⭐️',
  ),
];
