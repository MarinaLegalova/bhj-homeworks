const fontSize = document.querySelectorAll('.font-size');
const book = document.getElementById('book');
 
fontSize.forEach(button => {
  button.addEventListener('click', (event) => {
   event.preventDefault();
 
  fontSize.forEach(btn => btn.classList.remove('font-size_active'));
 
  event.target.classList.add('font-size_active');
 
  const size = event.target.dataset.size;
 
  book.classList.remove('book_fs-small', 'book_fs-big');
 
    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
});