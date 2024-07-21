Node.js is an open source server enviroment
Node.js allows you to run Javascript on the server

Node.js use asynchronous programming!
  - generate dynamic page content
  - create, open, read, write, delete and close files on the server
  - collect form data
  - add, delete, modify data in your database

Common Use For The File System Module.

    - Read Files
    - Create Files
    - Update Files
    - Delete Files
    - Rename Files

Read Files use fs.readFile() method to read Files

Create Files
    fs.appendFile() - append specified content to a file, if the file does not exist, file will be created
    fs.open() - takes a flag as a second argument, if the flag is "w" for "writing", the specified file is opened for writing. if not an empty file will be created
    fs.writeFile() - replace the specified file and content if it exist, if not the new file with the context will be created

UpdateFiles
    fs.appendFile() - appends the specified content at the end of specified file
    fs.writeFile()