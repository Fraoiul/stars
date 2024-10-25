const dragObj = document.querySelector('.dragObj')
const boxes = document.querySelectorAll('.box')
dragObj.addEventListener('dragstart', dragStart)
dragObj.addEventListener('dragend', dragEnd)

boxes.forEach(box => {
    box.addEventListener('dragover', dragOver)
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragleave', dragLeave)
    box.addEventListener('drop', dragDrop)
})

function dragStart() {
    dragObj.classList.add('hold')
}
function dragEnd() {
    dragObj.classList.remove('hold')
}

function dragOver(e) {
    e.preventDefault()
}
function dragEnter(e) {
    e.preventDefault()
    // 这里必须用空格隔开
    this.className += ' hovered'
}
function dragLeave() {
    // 使用className会覆盖之前的类名，所以执行完下面这一步之后box中只有box这一个class
    this.className = 'box'
}
function dragDrop() {
    this.append(dragObj)
}