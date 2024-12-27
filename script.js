// Select the "notes" section
const notesSection = document.getElementById("notes");

// Create a new paragraph element
const learningNote = document.createElement("p");
learningNote.textContent = "Today, I learned how to use JavaScript to dynamically add content to a webpage.";

// Add the new note to the "notes" section
notesSection.appendChild(learningNote);
