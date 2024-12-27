const createNoteBtn = document.getElementById("createNoteBtn");
const notesContainer = document.getElementById("notesContainer")

// create a new function 
createNoteBtn.addEventListener('click', () => {
    // create div
    const noteDiv = document.createElement('div')
    noteDiv.className = "flex flex-col mt-3 sm:ml-20 ml-5";
    // create textarea
    const textarea = document.createElement('textarea');
    textarea.placeholder = "Write here";
    textarea.className ="outline-none border-none textarea-lg max-w-full rounded-lg w-80 overflow-y-auto";
    // create deletebtn
    const deleteBtn = document.createElement('img');
    deleteBtn.src = "images/delete.png";
    deleteBtn.alt = "delete";
    deleteBtn.className = "cursor-pointer h-4 absolute mt-20 ml-72";
    // add delete fuctionally
    deleteBtn.addEventListener('click', () => {
        notesContainer.removeChild(noteDiv);
    });
    // append textarea and deletebtn
    noteDiv.appendChild(textarea);
    noteDiv.appendChild(deleteBtn);
    // append notediv
    notesContainer.appendChild(noteDiv);

});