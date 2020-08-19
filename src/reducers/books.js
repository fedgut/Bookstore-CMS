// const createBook = (state, action) => {
//   return [...state.books,
//   {
//     id: action.id,
//     title: action.title,
//     category: action.category
//   }];
// }

// const removeBook = (state, action) => {
//   return [...state.books].map(book => {
//     if(book.id != action.id) {
//       book;
//     }
//   });
// }

const booksReducer = (state = [], action) => {
  // switch(action.type) {
  //   case 'CREATE_BOOK':
  //     return createBook(state, action);
  //   break;
  //   case 'REMOVE_BOOK':
  //     return removeBook(state, action);
  //   break;
  //   default:
  //     return state;
  // }
  return "";
}

export default booksReducer;