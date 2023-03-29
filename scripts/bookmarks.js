let currentCategory = seleccion
let bookmarkSaveBtns = document.querySelectorAll('.bookmark-btn')
let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

const saveToLocalStorage = (elements) => {
  localStorage.setItem("bookmarks", JSON.stringify(elements));
};

const saved = (bookmark) => {
  return currentCategory.indexOf(bookmark)
}

const getBookmarkHTML = (article) => {
  return `
  <li class="bookmark-list-element">
    <p><span>${article.title}</span></p>
    <p class="bookmark-source">En <span>${article.source.name}<span></p>
    <p class="bookmark-link"><a href="${article.url}">Ir a la noticia</a></p>
    <button class="bookmark-delete-btn"><i class="fa-solid fa-x"></i></button>
  </li>
  `
}

const addBookmarkListeners = () => {
  let bookmarkDeleteBtns = document.querySelectorAll('.bookmark-delete-btn')
  for (let i = 0; i < bookmarkDeleteBtns.length; i++) {
    bookmarkDeleteBtns[i].addEventListener('click', function () {
      bookmarks.splice(i, 1)
      marker(bookmarkSaveBtns[i])
      saveToLocalStorage(bookmarks)
      renderBookmarks()
    })
  }
}

const renderBookmarks = () => {
  if (!bookmarks.length) {
    bookmarksDesc.innerHTML = 'No hay elementos guardados'
    bookmarksList.innerHTML = ''
  } else {
    bookmarksDesc.innerHTML = `Tienes ${bookmarks.length} elemento(s) guardado(s)`
    bookmarksList.innerHTML = ''
    for (let i = 0; i < bookmarks.length; i++) {
      let currentBookmark = getBookmarkHTML(bookmarks[i])
      bookmarksList.innerHTML += currentBookmark
    }
    addBookmarkListeners()
  }
}

const saveBookmark = (i) => {
  let article = currentCategory[i];
  let index = bookmarks.findIndex((e) => e.title === article.title);
  if (index === -1) {
    bookmarks.push(article);
  } else {
    bookmarks.splice(index, 1);
  }
  marker(bookmarkSaveBtns[i])
  saveToLocalStorage(bookmarks)
  renderBookmarks()
};

renderBookmarks()

const showLibertadores = () => {
  currentCategory = [...libertadores]
  newsFeed.innerHTML = ''
  categoryLibertadores.classList.add('selected-category')
  renderArticles(libertadores)
  categorySeleccion.classList.remove('selected-category')
  categoryLiga.classList.remove('selected-category')
  bookmarkSaveBtns = document.querySelectorAll('.bookmark-btn')
  bookmarker()
  colorize()
}

const showLigaProfesional = () => {
  currentCategory = [...ligaprofesional]
  newsFeed.innerHTML = ''
  categoryLiga.classList.add('selected-category')
  renderArticles(ligaprofesional)
  categorySeleccion.classList.remove('selected-category')
  categoryLibertadores.classList.remove('selected-category')
  bookmarkSaveBtns = document.querySelectorAll('.bookmark-btn')
  bookmarker()
  colorize()
}

const showSeleccion = () => {
  currentCategory = [...seleccion]
  newsFeed.innerHTML = ''
  categorySeleccion.classList.add('selected-category')
  renderArticles(seleccion)
  categoryLiga.classList.remove('selected-category')
  categoryLibertadores.classList.remove('selected-category')
  bookmarkSaveBtns = document.querySelectorAll('.bookmark-btn')
  bookmarker()
  colorize()
}

const bookmarker = () => {
  for (let i = 0; i < bookmarkSaveBtns.length; i++) {
    bookmarkSaveBtns[i].addEventListener('click', function () { saveBookmark(i) });
  }
}

const marker = (e) => {
  e.classList.toggle('marked');
}

const colorize = () => {
  for (let i = 0; i < currentCategory.length; i++) {
    if (bookmarks.some((b) => b.title === currentCategory[i].title)) {
      bookmarkSaveBtns[i].classList.add('marked');
    }
  }
}

const tabCategories = () => {
  categoryLibertadores.addEventListener('click', showLibertadores)
  categoryLiga.addEventListener('click', showLigaProfesional)
  categorySeleccion.addEventListener('click', showSeleccion)
}

tabCategories()
colorize()
bookmarker()
