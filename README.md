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

### SendMessage.js 

There is a `message` state initially set to an empty string and passed as a value to the input tag. An `onChange` function is also added to the input which sets the message state to whatever the user types in. 

### ChatBox.js

This imports the database `db` from firebase and updates it when a message is sent by importing messages from the message component.`QuerySnapshot` returns an array of the documents in the database and the new message is pushed into the array. Calling `onSnapshot` then updates the document snapshot. The SendMessage component is imported to keep the viewport scrolling down to the most recent message using `useRef()`.




