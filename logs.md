#### Setting up React Env

Installed yarn for easy installation and package management.

* We are using axios to access the API.
* ```
  yarn add axios@1.4.
  ```

#### Creating the Note It Down UI

* Added the boilerplate folder/file structure from the guide.
* Added App.jsx code.
  * App.jsx has a context to transfer properties (setNotes function)
  * Has state to handle notes (list of notes already existing)
  * Has getNotes() in useEffect to fetch notes from API using axios get.

Latest Update:

Need to start with Add Note page with a form, a function to submit data to post it using axios to the API, and update note list using set notes from the context.
