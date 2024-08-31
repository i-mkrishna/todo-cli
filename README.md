Filesystem based todo list(As an Assignment)

Create a `cli` that lets a user

    1. Add a todo
    2. Delete a todo
    3. Mark a todo as done
    4. Check if a todo is done or not
    5. Update the todo
    6. Update the time of todo

    Store all the data in files (todos.json)


    1. Add a To-Do : To add a new to-do item, use the add command followed by the deadline and the to-do title:
    $ node index.js add <Todo_Ttle> <Time>
    $ node index.js add "Go to Gym" "18:00"

    2. Remove a To-Do : To remove an existing to-do item, use the remove command followed by the title and the date of the JSON 
       file:
    $ node index.js remove <Todo_Ttle> <Date>
    $ node index.js remove "Go to Gym" "2024-08-25"

    3. Mark a To-do done : To Mark an existing to-do item done, use the mark command followed by the title and the date of the JSON 
       file:
    $ node index.js mark <Todo_Ttle> <Date>
    $ node index.js mark "Go to Gym" "2024-08-25"

    4. Check a To-do is done : To check an existing to-do item  is done or not, use the mark command followed by the title of the 
       JSON file:
    $ node index.js ismark <Todo_Ttle>
    $ node index.js ismark "Go to Gym"

    5. Update a To-do : To Update an existing to-do item title, use the mark command followed by the title and new title of the 
       JSON file:
    $ node index.js ismark <Todo_Ttle> <newTitle>
    $ node index.js ismark "Go to Gym" "Go To School"

    6. Update the time of To-do : To Update the of an existing to-do item, use the mark command followed by the new time of the 
       JSON file:
    $ node index.js ismark <Todo_Ttle> <newTime>
    $ node index.js ismark "Go to Gym" "12:45"
    
    7. Show all todo : To show all the todos, use the show command.
    $ node index.js show

    - For help
    $ node index.js -h
