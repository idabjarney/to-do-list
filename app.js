document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        document.querySelector('#tasks').insertAdjacentHTML('beforeend', `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `)
        document.querySelector('#newtask input').value = '';

        var currentTasks = document.querySelectorAll(".delete");
        for(var i=0; i<currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}