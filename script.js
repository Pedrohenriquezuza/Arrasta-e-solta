document.querySelectorAll(".item").forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)
})
// Functions Item
function dragStart(e){
    e.currentTarget.classList.add('dragging')
}

function dragEnd(e){
    e.currentTarget.classList.remove('dragging')
}


// Functions Area

function dragOver(e){
    e.preventDefault();
    //console.log('Passou Por cima')
}

function dragLeave(){
    //console.log('Saiu da area Dropavel')
}


function drop(){
    console.log('LIBEROU')
}