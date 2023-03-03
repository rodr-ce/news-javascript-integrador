const navSideBarBtnOpen = document.querySelector('#menu-toggle-open')
const navSideBarBtnClose = document.querySelector('#menu-toggle-close')
const navSideBarOverlay = document.querySelector('.header__nav__overlay')
const navSideBar = document.querySelector('.header__nav')
const bookmarkToggleBtn = document.querySelector('#toggle-bookmarks')
const bookmarkContainer = document.querySelector('.bookmarks-panel')
const bookmarksDesc = document.querySelector('.bookmarks-description')
const bookmarksList = document.querySelector('.bookmark-list')
const bookmarkOverlay = document.querySelector('.bookmarks__overlay')
const categorySeleccion = document.querySelector('#seleccion')
const categoryLiga = document.querySelector('#liga')
const categoryLibertadores = document.querySelector('#libertadores')
const newsFeed = document.querySelector('#newsfeed')

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

const animations = () => {
  navSideBarBtnOpen.addEventListener('click', toggleNavBar)
  navSideBarBtnClose.addEventListener('click', toggleNavBar)
  navSideBarOverlay.addEventListener('click', toggleNavBar)
  bookmarkToggleBtn.addEventListener('click', toggleBookmarks)
  bookmarkOverlay.addEventListener('click', toggleBookmarks)
}

animations()