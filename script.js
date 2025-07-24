const text = document.querySelector('.text')
text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>')

let letters = document.querySelectorAll('span')

for (let i = 0; i < letters.length; i++) {
  letters[i].style.animationDelay = i * 0.07 + 's'

}