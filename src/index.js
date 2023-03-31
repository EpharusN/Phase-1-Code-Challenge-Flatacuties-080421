
// DOM elements reference

const characterBar = document.getElementById('character-bar')
const nameElement = document.getElementById('name')
const imageElement = document.getElementById('image')
const votesElement = document.getElementById('vote-count')
const votesForm = document.getElementById('votes-form')



function updateCharacters(character){
  nameElement.innerText = character.name;
  imageElement.src = character.image;

}

//fetch data from the server
function getCharacters(){
  fetch('http://localhost:3000/characters')
  .then(response => response.json())
  .then(characters => {
    getCharactersAndAppend(characters);


  });

}

function getCharactersAndAppend(characters){
    characters.forEach(character => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character.name;
    characterBar.appendChild(characterSpan);
    characterSpan.addEventListener('click', ()=>{
      updateCharacters(character);
      updateVotes(character.votes);
    });
  
  });
  characterBar.addEventListener('click', (event)=> {
    const characterName = event.target.innerText
    updateCharacters();
    updateVotes();
  });


}
function updateVotes(votes){
  votesElement.innerText = votes;
}

    votesForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const votes = e.target.elements.votes.value;
    updateVotes(votes);
  });


getCharacters();


