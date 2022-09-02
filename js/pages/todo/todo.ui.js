const cleanTodoForm = () => {
  $("#todoname").val("");
  $("#tododate").val("");
};
const showSuccessMsg = () => {
  $("#mgs").append(`
        <div> class="ui positive message">
            <div>
                Success
            </div>
  `);
};

const showErrorMsg = () => {
  $("#msg").append(`
        <div class= "ui negative message">
            <div>
                Error
            </div>
  `);
};

const closeMsg = (time) => {
  setTimeout(() => {
    $("#msg").empty();
  }, time);
};
const loadTableData = async () => {
  const todos = await getTodos();
  let tableContent = "";

  todos.forEach((todo, index) => {
    tableContent += `
    <tr>
        <td>${index + 1}</td>
        <td>${todo.name}</td>
        <td>${todo.date}</td>
        <td>
            <button onClick="handleTodoEdit(${todo.id}, '${todo.name}', '${todo.date}')" class="ui blue button"><i class="edit icon"/> Edit</button>
            <button onClick="removeTodo(${todo.id})"class="ui red button"><i class="trash icon"/> Remove</button>
        </td>
    </tr>
    `;
  });
  $("#tableTbody").empty();
  $("#tableTbody").append(tableContent);
};

const openModal = (param, op) => {
  const headerMsg =
    op === "add"
      ? `<i class="plus icon" /> Add to-do`
      : `<i class="edit icon" /> Update to-do`;
  $("#todoModalHeader").empty();
  $("#todoModalHeader").append(headerMsg);
  $(".ui.modal").modal(param);
};

const handleTodoEdit = (id, name, date) =>{
  $("#todoname").val(name);
  $("#tododate").val(date);
  updateId = id
  openModal("show", "update")
}

const handleSuccess = () => {
  showSuccessMsg();
  loadTableData();
};

const handleErrors = (error) => {
  console.error(error);
  showErrorMsg();
};

const handleFinally = () => {
  closeMsg(5000);
  cleanTodoForm();
};
