const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const section = document.querySelector('section.container')
const div = document.createElement('div')
section.appendChild(div)
const local = document.querySelector('div')

for (let i = 0; i <= 4; i++) {
    const tags = elementos[i].tag
    const textos = elementos[i].texto
    const tope = document.createElement(tags)
    local.appendChild(tope)
    const tag = local.querySelector(tags)
    tag.innerHTML += textos
}
