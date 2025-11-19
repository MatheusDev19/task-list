const openModalButton = document.querySelector("#create-task-btn");
const modalCreateTask = document.querySelector("#modal-create-task");

openModalButton.addEventListener("click", () => {
  modalCreateTask.showModal()
});