# Chatroom    

This is a chatroom with a grammar checking function you can use before sending a message. I built this app because I have overseas friends who want to practice communicating with me to get used to english grammar and its confusing intricacies. I built this app with the hopes of making that learning process a little better for them rather than have me manually correcting their grammar every so often.

I learned a lot building this project
- How to connect to a databse using Node.js
- How to connect to an API
- Make a POST request and display its contents onto the page
- How to use React components to make the project more organised
- The existence of gitignore for hiding keys

----

The project is coded in Javascript and rendered with the React framework. There are 6 React components to make the project more maintainable 

## Components

### navbar.js

The navigation bar holds the sign in and sign out buttons, it checks whether a user is signed in or not with the `useAuthState` hook. Clicking the buttons will allow the user to sign in or sign out using the Firebase Authentication SDK and `GoogleAuthProvider`. It will redirect the user to a pop up page with `signInWithRedirect` to sign in with their email address and password. This data is then saved in `auth` and the sign out function clears the auth data, returning it to null. 

### welcome.js

This handles the welcome page that users see upon loading the webpage if they are not logged in. There is another sign in function handled in the same way with firebase authentication hooks.

### sendMessage.js

There is a `message` state initially set to an empty string and passed as a value to the input tag. An `onChange` function is also added to the input which sets the message state to whatever the user types in. 

There is an `onSubmit` attribute on the Send button which runs an async function called sendMessage. 

It first checks if the user is trying to send an empty string or whitespace as a message and alerts the user. 

It takes the user's `uid` (Unique ID) , `displayName` (Full name), and `photoURL` from the auth data provided when they log in. `auth` is imported from the firebase configuration file. 

It then uses `addDoc()` to create a document inside a collection called `messages` in the Firebase database which is accessed via the `db` import from Firebase. It creates key-value pairs storing:

Data name | Data stored
----------|------------
text      | message
name      | displayName
createdAt | time 
uid       | uid

This makes up the data for one document in the collection. Each message creates a document. After this, it resets the message state to an empty string. 

There is a const `scroll` passed through this component which is used at the bottom of the SendMessage function like so

`scroll.current.scrollIntoView({behavior: "smooth"})`

This tells the browser to let the scroll span be in view in the browser after sending a message. 

### chatBox.js

This component retrieves messages from the databse to display it on the screen.

It uses a `useEffect` hook that runs anytime changes are made in the chatroom. There is a Firebase query, `q`, that qeuries the database looking for the `message` collection in the imported database `db`. It then orders the documents base on the `createdAt` key and returns a maximum of 50 documents. 

The `onSnapshot` function listens to changes in the document with an empty array `messages`. The `forEach` function loops through all the documents from the imported `collection` and saves the data in the new array. 

A map function renders each message/document in the messages array into the Message component.

There is a constant called `scroll` with an imported `useRef()` hook, and a `span` element with a `ref` attribute and a value of `scroll`. The `scroll` is passed into the `sendMessage` component and mentioned above.

### message.js

This component renders data passed into it onto the browser.

User details are stored in a const `user` through imported hooks `useAuthState` and `auth`.

The message prop is deconstructed and a CSS style is conditioned to take effect based on the uid of the message. By default, all messages are positioned left. If the message uid is the same as the uid of the person logged in, then the CSS styles stored in the selector `right` is added to th div. Otherwise, no new style is added.

The message is sent and stored in the database. Then all the messages are retrieved, and the chatroom is updated with the new-messages in real-time.







