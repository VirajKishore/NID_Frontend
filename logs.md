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

#### AddNote

* AddNote will import context to setNotes from App.jsx to update NodeList after posting the note.
* Will have a function to handle submitting of the note form and post it to the API using axios.
* We use e.preventDefault() in the submit function because html forms usually tries to submit the form to the url in action and hence refreshes page. We handle posting using axios and react takes care of rerendering the UI without refreshing hence we prevent the default behaviour. \
