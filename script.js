var userInputIdeaTitle = document.querySelector('.ideaTitle');
var userInputIdeaDescription = document.querySelector('.ideaDescription');
var userSaveBtn = document.querySelector('#saveButton');
var userSearchField = document.querySelector('.searchField');
var deleteCardBtn = document.querySelector('.deleteBtn');
var upVoteCardBtn = document.querySelector('.upVoteBtn');
var downVoteCardBtn = document.querySelector('.downVoteBtn');
var dropDownSelector = document.querySelector('.qualitySelector');
var ideaCardDeck = document.querySelector('#listedIdeas');

userSaveBtn.addEventListener('click', userSubmit);
ideaCardDeck.addEventListener('click', deleteIdeaCard);
// userSaveBtn.addEventListener('click', getTime);

function userSubmit() {
  if (userInputIdeaTitle.value.length > 0 && userInputIdeaDescription.value.length > 0) {
    var userIdeaCard = document.createElement('article');
    var uniqueId = Math.round(new Date().getTime(userSaveBtn)/1000);
    }
    userIdeaCard.innerHTML = `<h2 id="${uniqueId}">${userInputIdeaTitle.value}</h2>
        <button class="deleteBtn">
        <img class="deleteImg" src="delete.svg">
      </button>
        <p>${userInputIdeaDescription.value}</p>
        <button class="upVoteBtn">
        <img class="upVoteImg" src="upvote.svg">
      </button>
      <button class="downVoteBtn">
        <img class="downVoteImg" src="downvote.svg">
      </button>
          <select class="qualitySelector" name="quality">
          quality:
            <option value="swill">
              swill
            </option>
            <option value="plausible">plausible
            </option>
            <option value="genius">genius
            </option>
          </select>`;

    ideaCardDeck.prepend(userIdeaCard);
    clearInputFields();
    // countLinks();
    }



function clearInputFields(){
  userInputIdeaTitle.value = "";
  userInputIdeaDescription.value = "";
}

function deleteIdeaCard(event) {
  // debugger;
  var foo = document.querySelector('article').children[1];
  if(event.target === foo) {
    console.log('heeeeyyy');
    foo.parentNode.remove();
    // event.target.parentNode.parentNode.remove();
  }
}