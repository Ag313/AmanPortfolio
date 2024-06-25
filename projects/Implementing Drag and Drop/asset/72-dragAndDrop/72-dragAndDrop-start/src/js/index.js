const allEmployees = document.querySelector('.all-employees');
const taskForce = document.querySelector('.task-force');
const employeeCards = document.querySelectorAll('.employee');
// console.log(employeeCards);
const { top, left } = allEmployees.getBoundingClientRect();

const createPanel = (x, y, name) => {
  const createPanel = document.createElement('div');
  createPanel.setAttribute('class', 'info-panel');
  createPanel.innerText = name;
  createPanel.style.top = `${y}px`;
  createPanel.style.left = `${x}px`;
  return createPanel;
};

const removePanel = () => document.querySelector('.info-panel')?.remove();

allEmployees.addEventListener('contextmenu', function (evt) {
  evt.preventDefault();
  removePanel();
  if (evt.target.getAttribute('class') === 'employee') {
    const name = evt.target.getAttribute('data-name');
    const infoPanel = createPanel(evt.clientX - left, evt.clientY - top, name);

    allEmployees.append(infoPanel);
  }
});

allEmployees.addEventListener('click', () => removePanel());

// Drag'n'Drop
employeeCards.forEach(el=>{
  el.addEventListener("dragstart",function(evt){
    removePanel();
    // console.log(el);        // here 'el' this will show the data of emplloye
    const getId=evt.target.getAttribute("data-id");
    // console.log(getId);    // here 'data-id' this will show the id of emplloye
    evt.dataTransfer.setData("text/plain",getId)  
});
});

taskForce.addEventListener("dragenter",function(evt){
  evt.preventDefault();
  evt.currentTarget.classList.add("highlight-drop")    // BECAUSE OF THIS CURRENT.TARGET.CLASSLIST.ADD KA MATLAB HA KI JO BHI CLASS PROPERTY HUM  CHAHTE HA VO ADD HO JAE JESE KI ISME DRAG KARNE PE DOTTED LINE HO RI HA 
})

taskForce.addEventListener('dragleave', function (evt) {  // HERE DRAGLEAVE KI VAJAH SE CLASS REMOVE HO JAEGI JESE PEHLE DOTTED LINE HO RAHI THI LEKIN HAT NAHI RI THI AB ISKI HELP SE HAT JAEGI
  evt.preventDefault();
  evt.currentTarget.classList.remove('highlight-drop');
});

taskForce.addEventListener("drop",function(evt){
  evt.preventDefault();
  const empId=evt.dataTransfer.getData("text/plain");
  evt.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));
  console.log(evt.currentTarget.getAttribute('div div[data-name]'))
  evt.currentTarget.classList.remove('highlight-drop');
})

taskForce.addEventListener('dragover',function(evt){
  evt.preventDefault();
});


// employeeCards.forEach((el) => {
//   el.addEventListener('dragstart', function (evt) {
//     removePanel();
//     const getId = evt.target.getAttribute('data-id');
//     evt.dataTransfer.setData('text/plain', getId);
//   });
// });

// taskForce.addEventListener('dragenter', function (evt) {
//   evt.preventDefault();
//   evt.currentTarget.classList.add('highlight-drop');
// });

// taskForce.addEventListener('dragleave', function (evt) {
//   evt.preventDefault();
//   evt.currentTarget.classList.remove('highlight-drop');
// });

// taskForce.addEventListener('drop', function (evt) {
//   evt.preventDefault();
//   const empId = evt.dataTransfer.getData('text/plain');
//   evt.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));
//   evt.currentTarget.classList.remove('highlight-drop');
// });

// taskForce.addEventListener('dragover', function (evt) {
//   evt.preventDefault();
// });

// allEmployees.addEventListener('dragenter', function (evt) {
//   evt.preventDefault();
//   evt.currentTarget.classList.add('highlight-drop');
// });

// allEmployees.addEventListener('dragleave', function (evt) {
//   evt.preventDefault();
//   evt.currentTarget.classList.remove('highlight-drop');
// });

// allEmployees.addEventListener('drop', function (evt) {
//   evt.preventDefault();
//   const empId = evt.dataTransfer.getData('text/plain');
//   evt.currentTarget.append(document.querySelector(`div[data-id='${empId}']`));
//   evt.currentTarget.classList.remove('highlight-drop');
// });

// allEmployees.addEventListener('dragover', function (evt) {
//   evt.preventDefault();
// });
