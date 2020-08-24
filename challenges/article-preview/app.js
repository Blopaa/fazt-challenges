const shareLinks = document.querySelector('.shareLinks')
const share = document.querySelector('.shareButton')

share.addEventListener('click', () => {
    shareLinks.classList.toggle('active')
})