const saveTodo = () =>{
    if(updateId){
        updateTodo()
        updateId = false
    } else{
        addTodo()
    }
}
const updateTodo = ()=>{
    const name = $("#todoname").val()
    const date = $("#tododate").val()
    const body = {name, date}
    updateById(updateId, body)
        .then(()=>{
            handleSuccess()
        })
        .catch(handleErrors)
        .finally(openModal("hide", "add"))
        .finally(handleFinally)
}
const addTodo = () =>{
    const name = $("#todoname").val()
    const date = $("#tododate").val()
    const body = {name, date}
    add(body)
        .then(()=>{
            handleSuccess()
        })
        .catch(handleErrors)
        .finally(openModal("hide", "add"))
        .finally(handleFinally)
}

const removeTodo = (id) =>{
    removeById(id).then(handleSuccess).catch(handleErrors).finally(handleFinally)
}