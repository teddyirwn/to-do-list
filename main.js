
// cara pertama
const ul = document.querySelector('ul')
function add() {
    // ambil nilai dari text
    let newText = document.getElementById('textInput')

    if (newText.value == "") {
        alert('ketikan sesuatu sebelum menambah')
        return false;
    }
    // menambah lits baru di ul
    let li = document.createElement('li')
    let txt = document.createTextNode(newText.value)

    li.appendChild(txt);

    ul.appendChild(li)

    let span = document.createElement('span')
    span.textContent = 'X'
    li.appendChild(span)

    // kosongkn field
    newText.value = ''


    // menghapus list
    span.onclick = () => {
        li.remove()
    }
}

