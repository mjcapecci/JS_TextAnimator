const testDiv = document.querySelector('#test-div');
const wordInput = document.querySelector('#wordInput')
const runBtn = document.querySelector("#runBtn");
const resetBtn = document.querySelector('#resetBtn');

const makeSpans = (text, i) => {

  if(i === text.length) return

  i = i | 0

  const letter = document.createElement('span');
  letter.textContent = text[i];
  testDiv.appendChild(letter)
  letter.classList.add('enter')

  setTimeout(() => {
    letter.classList.remove("enter")
      makeSpans(text, i+=1)
  }, 50)

}

runBtn.addEventListener('click', () => {
  if(!wordInput.value) {
    alert('Please enter a word or phrase to animate')
    return
  }
  makeSpans(wordInput.value)
  runBtn.disabled = true;
})

resetBtn.addEventListener('click', () => {
  testDiv.textContent = '';
  runBtn.disabled = false;
})