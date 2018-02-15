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

function userSubmit() {
  if (userInputIdeaTitle.value.length > 0 && userInputIdeaDescription.value.length > 0) {
    var userIdeaCard = document.createElement('article');
    var uniqueId = Math.round(new Date().getTime(userSaveBtn)/1000);
  }
    userIdeaCard.innerHTML = 
      `<article id="${uniqueId}" aria-live="assertive">
      <h2>${userInputIdeaTitle.value}</h2>
      <button class="deleteBtn" alt="buttonToDeleteIdea">
      </button>
      <p>${userInputIdeaDescription.value}</p>
      <button class="upVoteBtn" alt="buttonToVoteIdeaUp">
      </button>
      <button class="downVoteBtn" alt="buttonToVoteIdeaDown">
      </button>
      <select class="qualitySelector" name="quality">quality:
        <option value="swill">swill
        </option>
        <option value="plausible">plausible
        </option>
        <option value="genius">genius
        </option>
      </select>
      </article>`;
    ideaCardDeck.prepend(userIdeaCard);
    storeMyJson()
    clearInputFields();
}

function storeMyJson() {
    var jsonStore = {"id":"uniqueId", "h2":
    "userInputIdeaTitle.value",
      "p":"userInputIdeaDescription.value"}
      console.log('hahaaaaa')
      var refresh = JSON.stringify(jsonStore);
      localStorage.setItem(jsonStore.id, refresh);
}

function clearInputFields() {
  userInputIdeaTitle.value = "";
  userInputIdeaDescription.value = "";
}

function deleteIdeaCard(event) {
  var foo = document.querySelector('article').children[1];
  if(event.target === foo) {
    console.log('heeeeyyy');
    foo.parentNode.remove();
    // localStorage,removeItem('id');
  }
}