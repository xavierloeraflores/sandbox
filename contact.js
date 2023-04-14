console.log('javascript loaded')

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = "https://httpbin.org/post"

console.log('grabbed HTML ELEMENTs')

form.addEventListener('submit', event => {
  submitButton.disabled = true
  event.preventDefault()
  let requestBody = new FormData(form)

  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
       location.href = '/pagetwo.html';

      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false
      location.href = '/pagetwo.html';

    }
    )
})

console.log('added on event')