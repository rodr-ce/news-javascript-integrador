let navSideBarBtnOpen = document.querySelector('#menu-toggle-open')
let navSideBarBtnClose = document.querySelector('#menu-toggle-close')
let navSideBarOverlay = document.querySelector('.header__nav__overlay')
let navSideBar = document.querySelector('.header__nav')
let bookmarkToggleBtn = document.querySelector('#toggle-bookmarks')
let bookmarkContainer = document.querySelector('.bookmarks-container')
let bookmarkSaveBtns = document.querySelectorAll('.bookmark-btn')
let bookmarksDesc = document.querySelector('.bookmarks-description')
let bookmarksList = document.querySelector('.bookmark-list')

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

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

const getBookmarkHTML = (bookmark) => {
  return `
  <li class="bookmark-list-element">
    <p><span>${bookmark.title}</span></p>
    <p class="bookmark-source">En <span>${bookmark.source.name}<span></p>
    <p class="bookmark-link"><a href="${bookmark.url}">Ir a la noticia</a></p>
    <button class="bookmark-delete-btn"><i class="fa-solid fa-x"></i></button>
  </li>
  `
}

const saveToLocalStorage = (element) => {
  localStorage.setItem("bookmarks", JSON.stringify(element));
};

const addBookmarkDeleteListeners = () => {
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
    addBookmarkDeleteListeners()
  }
}

renderBookmarks()

for (let i = 0; i < bookmarkSaveBtns.length; i++) {
  bookmarkSaveBtns[i].addEventListener('click', function () {
    let article = noticias[i];
    let index = bookmarks.findIndex((e) => e.title === article.title);

    if (index === -1) {
      bookmarks.push(article);
    } else {
      bookmarks.splice(index, 1);
    }
    saveToLocalStorage(bookmarks)
    renderBookmarks()
  });
}



const animations = () => {
  navSideBarBtnOpen.addEventListener('click', toggleNavBar)
  navSideBarBtnClose.addEventListener('click', toggleNavBar)
  navSideBarOverlay.addEventListener('click', toggleNavBar)
  bookmarkToggleBtn.addEventListener('click', toggleBookmarks)
}

animations()