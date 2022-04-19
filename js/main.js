//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){

  const textInput = document.querySelector('input').value

  fetch(`http://api.funtranslations.com/translate/yoda?text=${textInput}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('.translation').innerText = data.contents.translated
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}