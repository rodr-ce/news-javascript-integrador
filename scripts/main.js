const navSideBarBtnOpen = document.querySelector('#menu-toggle-open')
const navSideBarBtnClose = document.querySelector('#menu-toggle-close')
const navSideBarOverlay = document.querySelector('.header__nav__overlay')
const navSideBar = document.querySelector('.header__nav')
const bookmarkToggleBtn = document.querySelector('#toggle-bookmarks')
const bookmarkContainer = document.querySelector('.bookmarks-container')
let bookmarkSaveBtns = document.querySelectorAll('.bookmark-btn')
const bookmarksDesc = document.querySelector('.bookmarks-description')
const bookmarksList = document.querySelector('.bookmark-list')
const categorySeleccion = document.querySelector('#seleccion')
const categoryLiga = document.querySelector('#liga')
const categoryLibertadores = document.querySelector('#libertadores')

/* ANIMACIONES */

const toggleNavBar = () => {
  if (navSideBar.classList.contains('toggle__nav')) {
    navSideBar.classList.remove('toggle__nav');
  } else {
    navSideBar.classList.add('toggle__nav')
  }
}

const toggleBookmarks = () => {
  if (bookmarkContainer.classList.contains('toggle__bookmarks')) {
    bookmarkContainer.classList.remove('toggle__bookmarks')
  } else {
    bookmarkContainer.classList.add('toggle__bookmarks')
  }
}

/* MARCADORES */

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

const saveToLocalStorage = (elements) => {
  localStorage.setItem("bookmarks", JSON.stringify(elements));
};

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
  let article = currentCategory[i]; // cambiar para usar la categoria seleccionada
  let index = bookmarks.findIndex((e) => e.title === article.title);

  if (index === -1) {
    bookmarks.push(article);
  } else {
    bookmarks.splice(index, 1);
  }
  saveToLocalStorage(bookmarks)
  renderBookmarks()
};

renderBookmarks()

/* render categories */

let currentCategory = seleccion

const renderLib = () => {
  currentCategory = [...libertadores]
  newsFeed.innerHTML = ''
  categoryLibertadores.classList.add('selected-category')
  renderArticles(libertadores)
  categorySeleccion.classList.remove('selected-category')
  categoryLiga.classList.remove('selected-category')
  bookmarkSaveBtns = document.querySelectorAll('.bookmark-btn')
  bookmarker()
}

const renderLigaPro = () => {
  currentCategory = [...ligaprofesional]
  newsFeed.innerHTML = ''
  categoryLiga.classList.add('selected-category')
  renderArticles(ligaprofesional)
  categorySeleccion.classList.remove('selected-category')
  categoryLibertadores.classList.remove('selected-category')
  bookmarkSaveBtns = document.querySelectorAll('.bookmark-btn')
  bookmarker()
}

const renderSeleccion = () => {
  currentCategory = [...seleccion]
  newsFeed.innerHTML = ''
  categorySeleccion.classList.add('selected-category')
  renderArticles(seleccion)
  categoryLiga.classList.remove('selected-category')
  categoryLibertadores.classList.remove('selected-category')
  bookmarkSaveBtns = document.querySelectorAll('.bookmark-btn')
  bookmarker()
}

const animations = () => {
  navSideBarBtnOpen.addEventListener('click', toggleNavBar)
  navSideBarBtnClose.addEventListener('click', toggleNavBar)
  navSideBarOverlay.addEventListener('click', toggleNavBar)
  bookmarkToggleBtn.addEventListener('click', toggleBookmarks)
  categoryLibertadores.addEventListener('click', renderLib)
  categoryLiga.addEventListener('click', renderLigaPro)
  categorySeleccion.addEventListener('click', renderSeleccion)
}

const bookmarker = () => {
  for (let i = 0; i < bookmarkSaveBtns.length; i++) {
    bookmarkSaveBtns[i].addEventListener('click', function() { saveBookmark(i) });
  }
}

bookmarker()
animations()

/* for (let i = 0; i < bookmarkSaveBtns.length; i++) {
  bookmarkSaveBtns[i].addEventListener('click', function() { saveBookmark(i) });
} */