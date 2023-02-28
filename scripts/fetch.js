const key = '' // se iba a trabajar con newsapi.org pero el plan free solo lo permite en localhoost

/* 

const getNews = async () => {
  const response = await fetch(`https://newsapi.org/v2/everything?q=liga%20profesional%20argentina&language=es&pageSize=30&apiKey=${key}`)
  const { articles } = await response.json()
  return articles
}

 */

const newsFeed = document.querySelector('#newsfeed')

const transformDate = (date) => {
  let getdate = date.split('T')
  let newdate = getdate[0].split('-').reverse().join('/')
  return newdate
}

const getArticleHTML = (element) => {
  let articleDate = transformDate(element.publishedAt)
  return `<div class="article">
            <a href="${element.url}">
              <div class="article__title-container" style="background-image: url(${element.urlToImage});">
                <h2 class="article__title">${element.title}</h2>
              </div>
            </a>
            <p class="article__description">${element.description}</p>
            <p class="article__data">en <a class="article__data-link" href="${element.url}">${element.source.name}</a> (${articleDate})</p>
            <button class="bookmark-btn"><i class="fa-regular fa-bookmark"></i></button>
          </div>`
}

const renderArticles = (articles) => {
  for (let i = 0; i < articles.length; i++) {
    let currentArticle = getArticleHTML(articles[i])
    newsFeed.innerHTML += currentArticle
  }
}

async function init() {
  //const news = await getNews()
  renderArticles(seleccion)
}

init()

