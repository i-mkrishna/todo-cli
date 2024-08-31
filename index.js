const fs = require("fs");
const { Command } = require("commander");
const path = require("path");
const program = new Command();

// Path to the todos.json file
const todosFilePath = path.join(__dirname, "todos.json");

// function to read the todos from the file
function readTodos() {
    if (!fs.existsSync(todosFilePath)) {
        return [];
    }
    const data = fs.readFileSync(todosFilePath, "utf-8");
    return JSON.parse(data || "[]");
}

// function to write todos to the file
function writeTodos(todos) {
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2), "utf-8");
}

// Command to add a new todo item
program
    .command("add")
    .description("Add a new todo item")
    .argument("<Todo_Title>", "Enter the todo title")
    .argument("<Time>", "Enter the finish time")
    .action((todoTitle, time) => {
        const todos = readTodos();

        // Check if the todo already exists
        const todoExists = todos.some(todo =>
            todo.Title === todoTitle.toLowerCase() && todo.Deadline === time
        );

        if (todoExists) {
            console.log("Todo with this title and time already exists!");
        } else {
            const newTodo = {
                Title: todoTitle.toLowerCase(),
                Deadline: time,
                Done: false,
            };

            todos.push(newTodo);
            writeTodos(todos);

            console.log("Todo added successfully!");
        }
    });



// Command to remove a todo item
program
    .command("remove")
    .description("Remove an existing todo item")
    .argument("<Todo_Title>", "Enter the todo title to delete")
    .action((todoTitle) => {
        let todos = readTodos();
        const updatedTodos = todos.filter((todo) => todo.Title !== todoTitle.toLowerCase());

        if (todos.length === updatedTodos.length) {
            console.log("Todo not found!");
        } else {
            writeTodos(updatedTodos);
            console.log("Todo removed successfully!");
        }
    });

// Command to mark a todo item as done
program
    .command("mark")
    .description("Mark a todo item as done")
    .argument("<Todo_Title>", "Enter the todo title to mark as done")
    .action((todoTitle) => {
        let todos = readTodos();
        let todoFound = false;

        todos = todos.map((todo) => {
            if (todo.Title === todoTitle) {
                todo.Done = true;
                todoFound = true;
            }
            return todo;
        });

        if (todoFound) {
            writeTodos(todos);
            console.log("Todo marked as done!");
        } else {
            console.log("Todo not found!");
        }
    });


///  command to check if it is done or not
program
    .command("ismark")
    .description("Check if a todo item is done or not")
    .argument("<Todo_Title>", "Enter the todo title to check")
    .action((todoTitle) => {
        let todos = readTodos();
        let todoFound = false;
        let done = false;

        todos = todos.map((todo) => {
            if (todo.Title === todoTitle) {
                // console.log("Found matching todo:", todo.Title);
                todoFound = true;
                done = todo.Done || false;
            }
            return todo;
        });


        if (todoFound) {
            writeTodos(todos);
            if (done) {
                console.log(todoTitle, "is Done");
            } else {
                console.log(todoTitle, "is not done");
            }
        } else {
            console.log("Todo not found!");
        }
    });

// to update the title of todo
program
    .command("update_title")
    .description("Update the todo")
    .argument("<Todo_Title>", "Enter the title you want to update")
    .argument("<newTitle>", "Enter the new title")
    .action((todoTitle, newTitle) => {
        let todos = readTodos();
        let todoFound = false;

        todos = todos.map((todo) => {
            if (todo.Title === todoTitle.toLowerCase()) {
                console.log("Found matching todo:", todo.Title);
                todoFound = true;
                todo.Title = newTitle.toLowerCase();
            }
            return todo;
        });


        if (todoFound) {
            writeTodos(todos);
            console.log("Updated the title Successfully !!");
        } else {
            console.log("Todo not found!");
        }
    });

//  to update the time
program
    .command("update_time")
    .description("Update the todo")
    .argument("<Todo_Title>", "Enter the title you want to update time for")
    .argument("<newTime>", "Enter the new time")
    .action((todoTitle, newTime) => {
        let todos = readTodos();
        let todoFound = false;

        todos = todos.map((todo) => {
            if (todo.Title === todoTitle.toLowerCase()) {
                console.log("Found matching todo:", todo.Title);
                todoFound = true;
                todo.time = newTime;
            }
            return todo;
        });


        if (todoFound) {
            writeTodos(todos);
            console.log("Updated the title Successfully !!");
        } else {
            console.log("Todo not found!");
        }
    });
///  command to check if it is done or not
program
    .command("ismark")
    .description("Check if a todo item is done or not")
    .argument("<Todo_Title>", "Enter the todo title to check")
    .action((todoTitle) => {
        let todos = readTodos();
        let todoFound = false;
        let done = false;

        todos = todos.map((todo) => {
            if (todo.Title === todoTitle) {
                // console.log("Found matching todo:", todo.Title);
                todoFound = true;
                done = todo.Done || false;
            }
            return todo;
        });


        if (todoFound) {
            writeTodos(todos);
            if (done) {
                console.log(todoTitle, "is Done");
            } else {
                console.log(todoTitle, "is not done");
            }
        } else {
            console.log("Todo not found!");
        }
    });

// Parse and execute the commands
program.parse();
