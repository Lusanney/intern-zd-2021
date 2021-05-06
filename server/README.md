# Server App

The server app is for fetching Zendesk API, and send back to the client (ReactJS). It does some validation and error managment. However, the features are limited to API call to Zendesk.
## Installation & Run
Please see outer README.md

## Code Pattern & Key Notes
### 1. Pattern
The server app follows MVC Pattern (model-view-controller). Where model handles the data shape, view handles the UI, and controller handles the logics. However, because this app is client-side renderring and the API is derived from Zendesk API. So, we do not have **"view"** and **"model"** in this server app.

All routes and logics are handled by controllers at folder:
```
    /controllers
        errorController.js
        ticketController.js
```

### 2. Folder Structure
- **/utils**: storing utitlities, such as:
    - `AppError.js` : Wrapper class for HTTP Error use.
    - `catchAsync.js`: Wrapper function for async/await function.
- **/controllers**: storing all controllers
- **/build**: client-side production-ready folder
- **/routes**: storing all the routes of the server app
- **/report**: storing report after testing
- **/apis**: maintaining Zendesk APIs
- **/test**: storing all the API tests

### 3. Validation & Error Management

Server app does validates the API call. Such as `page = -5` is validated as error. This is done within the controller, as each controller will have each validation logic.

If the validation fail, it signals the Express app to return an error. Express app will use global error controller, where all the errors flow to here `/controllers/errorController.js` and be sent back appropriate message & status code to the user.

### 4. Authentication
As it is not a requirement to make authentication module for Zendesk Intern project. The app use basic authentication and plain text username / password.
```
    axios.get(URL, {
        auth: {
            username: email,
            password,
        },
    })
```

This approach in this context of internship challenge, is appropriate and time savings. However, in production & commercial-ready app. This would be a security issue, and hackers could exploit. The alternative is authenticated with OAuth2.0, put sensitive data to `.env` and send the token to client via `cookies [httpOnly, secure]`.