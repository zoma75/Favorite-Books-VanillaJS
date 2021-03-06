(function() {
  const engine = {
    init: function(){
      this.cashDom();
      this.bindEvents();
    },
    cashDom: function() {
      this.bookList = document.querySelector('#to-read ul');
      this.addForm = document.forms['add-book'];
      this.bookName = this.addForm.querySelector('input[type="text"]').value;
      this.searchInput = document.forms['search-form'].querySelector('#search');
    },
    bindEvents: function () {
      this.bookList.addEventListener('click', this.removeBook.bind(this));
      this.addForm.addEventListener('submit', this.addBook.bind(this));
      this.searchInput.addEventListener('keyup', this.searchBook.bind(this));
      },
    removeBook: function (e) {
      if(e.target.classList.contains('delete')){

        const li = e.target.parentElement;
    
        this.bookList.removeChild(li);
      }
    },
    addBook: function (e) {
      e.preventDefault();

      const bookName = this.addForm.querySelector('input[type="text"]').value;

      if (bookName !== '') {
        //this is working method

        // bookList.innerHTML += '<li><span class="book">'+bookName+'</span><i class="fa fa-trash delete" aria-hidden="true"></i></li>';
        //
        // addForm.querySelector('input[type="text"]').value = '';

        // This is another working method
        const li = document.createElement('li');
        const span = document.createElement('span');
        const i = document.createElement('i');

        span.setAttribute('class', 'book');
        span.textContent = bookName;
        i.setAttribute('class', 'fa fa-trash delete');
        i.setAttribute('aria-hidden', 'true');

        li.appendChild(span);
        li.appendChild(i);

        this.bookList.appendChild(li);

        this.addForm.querySelector('input[type="text"]').value = '';
      }
    },
    searchBook: function(e){
      const searchKey = e.target.value.toLowerCase();
      var books = this.bookList.getElementsByTagName('li');

      Array.from(books).forEach(function(book){
        var bookTitle = book.querySelector('.book').textContent;

        if(searchKey != ''){
          if(bookTitle.toLowerCase().indexOf(searchKey) != -1){
            book.style.display = "block";
          } else {
            book.style.display = "none";
          }
        } else {
          Array.from(books).forEach(function(book){
            book.style.display = "block";
        });
      }
      });
    }
  }

  engine.init();

})();
