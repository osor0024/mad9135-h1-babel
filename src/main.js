const app = {

  async getFilms () {
    try {
      const response = await fetch('https://swapi.co/api/films/')
      if (response.ok) {
       
        //object assignment destructuring here
         const { results } = await response.json()
         return results
      }
      return []
      //return Promise.reject(`${response.status}: ${response.statusText}`)
    } catch (err) {

      console.err('testing' , err)
      //return Promise.reject("The fetch request failed..",err)
      
    }
  },

  displayList (films) {
    const list = films
      .map(film => {
        return {
          episodeId: film.episode_id,
          title: film.title,
          releaseDate: film.release_date
        }
      })
      .sort((a, b) => a.episodeId - b.episodeId)

    const target = document.getElementById('movie-list')
    const ul = document.createElement('ul')
    list.forEach(film => {
      const li = document.createElement('li')
      li.innerHTML = `
        Episode ${film.episodeId}: 
        <strong>${film.title}</strong> 
        <em> (released ${film.releaseDate})</em>`
      ul.appendChild(li) 
    })
    target.appendChild(ul)
  }
}

app.getFilms().then(app.displayList)