let tasks = [];

const command = process.argv[2];
const input = process.argv[3];

if (command === "add") {
  if (!input) {
    console.log("Please provide a task to add.");
  } else {
    tasks.push(input);
    console.log("Task added:", input);
  }

} else if (command === "list") {
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log("Your Tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }

} else if (command === "delete") {
  const index = parseInt(input) - 1;

  if (isNaN(index) || index < 0 || index >= tasks.length) {
    console.log("Invalid task number.");
  } else {
    const removed = tasks.splice(index, 1);
    console.log("Deleted:", removed[0]);
  }

} else {
  console.log("Commands:");
  console.log("  add \"task name\"");
  console.log("  list");
  console.log("  delete <task number>");
}