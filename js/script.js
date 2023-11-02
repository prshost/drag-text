
function allow(e) {
    e.preventDefault()
}

function start(e) {
    e.dataTransfer.setData('text', e.target.id)
}

function drag(e) {
    e.preventDefault()
    let text = e.dataTransfer.getData('text')
    e.target.appendChild(document.getElementById(text))
}