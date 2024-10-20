const themeToggle = document.getElementById('theme-button')

function toggleTheme() {
    const html = document.documentElement
    const currentTheme = html.getAttribute('data-theme')

    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    html.setAttribute('data-theme', newTheme)

    localStorage.setItem('theme', newTheme)
}

themeToggle.addEventListener('click', toggleTheme)

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme)
})