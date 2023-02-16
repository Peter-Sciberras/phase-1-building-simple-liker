// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Add the .hidden class to the error modal
const errorModal = document.querySelector('#modal');
errorModal.classList.add('hidden');

// When a user clicks on an empty heart
const emptyHearts = document.querySelectorAll('.like-glyph');
emptyHearts.forEach(emptyHeart => {
emptyHeart.addEventListener('click', () => {
// Invoke mimicServerCall to simulate making a server request
mimicServerCall()
.then(() => {
// When the "server" returns a success status
emptyHeart.classList.add('activated-heart');
emptyHeart.classList.remove('like-glyph');
// Change the heart to a full heart
})
.catch(() => {
// When the "server" returns a failure status
errorModal.classList.remove('hidden');
// Display the error modal
setTimeout(() => {
errorModal.classList.add('hidden');
}, 3000);
// Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
});
});
});

// When a user clicks on a full heart
const fullHearts = document.querySelectorAll('.activated-heart');
fullHearts.forEach(fullHeart => {
fullHeart.addEventListener('click', () => {
fullHeart.classList.remove('activated-heart');
fullHeart.classList.add('like-glyph');
// Change the heart back to an empty heart
});
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
