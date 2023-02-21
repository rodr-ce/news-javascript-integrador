let newsFeed = document.getElementById('newsfeed')

const keyAPI = 'fb29182220194524b0696687f46a2fed' // APIKEY fb29182220194524b0696687f46a2fed

/* ACA SE HACE EL PEDIDO A LA API

let news = []

const getNews = async () => {
    try {
        const response = await fetch (`https://newsapi.org/v2/top-headlines?country=ar&category=sports&q=selección%20argentina&pageSize=20&apiKey=${keyAPI}`)

                                    // https://newsapi.org/v2/everything?q=seleccion%20argentina&language=es&sources=clarin,ole,tyc-sports&sortBy=publishedAt&pageSize=30&page=1&apiKey=
                                    // https://newsapi.org/v2/everything?q=seleccion%20argentina&language=es&sortBy=publishedAt&apiKey=
                                    // https://newsapi.org/v2/top-headlines?q=seleccion%20argentina&country=ar&category=sports&language=es&pageSize=30&page=1&sortBy=publishedAt&apiKey=

        const { articles } = await response.json()

        console.log(articles)

        articles.forEach(element => {
            news.push(element)
        });

    } catch (error) {
        console.log(`Error: ${error}`)
    } finally {
        return news
    }
}

async function init() {
    getNews()
}

init() 

*/

// la respuesta va a verse como la constante noticias, hago un hardcode para trabajar los estilos sin quemar los request a la API

const noticias = [
  {
    "source": {
      "id": null,
      "name": "TyC Sports"
    },
    "author": "TyC Sports.com",
    "title": "La SEQUÍA DE MINUTOS de JULIÁN ÁLVAREZ en Manchester City - Rumbo a Tokio",
    "description": "El segundo máximo goleador de la Selección Argentina en el Mundial de Qatar 2022 jugó solo seis minutos en los últimos dos partidos y solo fue titular cuatro veces desde la Copa del Mundo.",
    "url": "https://www.tycsports.com/premier-league/la-sequia-de-minutos-de-julian-alvarez-en-manchester-city-id494433.html",
    "urlToImage": "https://media.tycsports.com/files/2023/02/18/535978/julian-alvarez_1440x810_wmk.webp?v=1",
    "publishedAt": "2023-02-18T18:55:56Z",
    "content": "El segundo máximo goleador de la Selección Argentina en el Mundial de Qatar 2022 jugó solo seis minutos en los últimos dos partidos y solo fue titular cuatro veces desde la Copa del Mundo.\r\nLuego de … [+2216 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "Rosario3.com"
    },
    "author": "Rosario3",
    "title": "A dos meses de ser campeones del mundo, Leonardo Paredes emocionó a sus seguidores - Rosario3.com",
    "description": "El jugador de la Selección argentina compartió un video en sus redes sociales rememorando el camino a levantar la Copa del Mundo con palabras conmovedoras",
    "url": "https://www.rosario3.com/deportes/A-dos-meses-de-ser-campeones-del-mundo-Leonardo-Paredes-emociono-a-sus-seguidores-20230218-0008.html",
    "urlToImage": "https://www.rosario3.com/__export/1676746014537/sites/rosario3/img/2023/02/18/paredes_copa.jpg_1192065467.jpg",
    "publishedAt": "2023-02-18T18:06:00Z",
    "content": "Se cumplen dos meses del día en que la Selección argentina volvió a levantar la Copa del Mundo después de 36 años. Leandro Paredes fue el primero que rememoró aquel histórico momento con un emotivo p… [+1214 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "TyC Sports"
    },
    "author": "TyC Sports.com",
    "title": "España no se baja de la pelea por Alejandro Garnacho - Rumbo a Tokio",
    "description": "La Roja intentará convencer a la joya del Manchester United para que revierta su decisión de jugar para la Selección Argentina pensando en la clasificación a la Eurocopa 2024.",
    "url": "https://www.tycsports.com/seleccion-argentina/alejandro-garnacho-seleccion-argentina-espana-id494427.html",
    "urlToImage": "https://media.tycsports.com/files/2023/02/18/535968/alejandro-garnacho_1440x810_wmk.webp?v=1",
    "publishedAt": "2023-02-18T17:52:48Z",
    "content": "La Roja intentará convencer a la joya del Manchester United para que revierta su decisión de jugar para la Selección Argentina pensando en la clasificación a la Eurocopa 2024.\r\nAlejandro Garnacho es … [+1650 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "ámbito.com"
    },
    "author": "ámbito.com",
    "title": "Campeones del Mundo: la AFA presenta una exhibición única por la obtención del Mundial - ámbito.com",
    "description": "La Asociación Argentina de Fútbol informó hoy que organizará una exhibición para que los hinchas puedan revivir los momentos, con imágenes inéditas, más especiales del último Mundial. Además, estarán exhibidas las tres Copas del Mundo ganadas por la Selección…",
    "url": "https://www.ambito.com/deportes/campeones-del-mundo-la-afa-presenta-una-exhibicion-unica-la-obtencion-del-mundial-n5654788",
    "urlToImage": "https://media.ambito.com/p/d8efe077e052a5d6f03f59f76e2f98ba/adjuntos/239/imagenes/040/368/0040368215/argentina-campeon.jpg",
    "publishedAt": "2023-02-18T00:34:38Z",
    "content": "El recorrido buscará reflejar la pasión que la selección despierta en los hinchas argentinos y tendrá el objetivo de festejar la gloria y los trofeos originales ganados por la Selección.\r\nUno de los … [+1760 chars]"
  }
]

const transformDate = (date) => {
  let getdate = date.split('T')
  let newdate = getdate[0].split('-').reverse().join('/')
  return newdate
}

const getArticleHTML = (element) => {
  let date = transformDate(element.publishedAt)
  return `<div class="article">
            <a href="${element.url}">
              <div class="article__title-container" style="background-image: url(${element.urlToImage});">
                <h2 class="article__title">${element.title}</h2>
              </div>
            </a>
            <p class="article__description">${element.description}</p>
            <p class="article__data">en <a class="article__data-link" href="${element.url}">${element.author}</a> (${date})</p>
            <div ="article__bookmark"><p class="bookmark-icon"><i class="fa-regular fa-bookmark"></p></i></div>
          </div>`
}

for (let i = 0; i < noticias.length; i++) {
  let currentArticle = getArticleHTML(noticias[i])
  newsFeed.innerHTML += currentArticle
}





























