var userInputIdeaTitle = document.querySelector('.ideaTitle');
var userInputIdeaDescription = document.querySelector('.ideaDescription');
var userSaveBtn = document.querySelector('#saveButton');
var userSearchField = document.querySelector('.searchField');
var deleteCardBtn = document.querySelector('.deleteBtn');
var upVoteCardBtn = document.querySelector('.upVoteBtn')
var downVoteCardBtn = document.querySelector('.downVoteBtn')
var dropDownSelector = document.querySelector('.qualitySelector')
var ideaCardDeck = document.querySelector('#listedIdeas')


userSaveBtn.addEventListener('click', userSubmit); 
        function userSubmit() {
  if (userInputIdeaTitle.value.length > 0 && userInputIdeaDescription.value.length > 0) {
    var userIdeaCard = document.createElement('article');
    var randomWholeNum =Math.floor((Math.random() * 10) + 1);
    userIdeaCard.innerHTML =       
      `<h2>${userInputIdeaTitle.value}</h2>
      <h3>${randomWholeNum}</h3>
        <form class="secondForms">
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
          </select>
        </form>`;

    ideaCardDeck.appendChild(userIdeaCard);
    // userSaveBtn.disabled = true;
    clearInputFields();
    // countLinks();
    }
}

function clearInputFields(){
  userInputIdeaTitle.value = "";
  userInputIdeaDescription.value = "";
}

