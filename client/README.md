# Client-side App

## Installation & Run
Please see project's outer README.md

## Code Pattern
### 1. Pattern  
The code pattern I apply with React is **Container-View**. Where Container handles logics (such as API Call) and View handles UI. This allow a container to use different views according to the state of the logic, such as ticket is empty or is found. This helps a lot in code refactoring, maintaining and especially UI Mock Test. (See testcases I wrote in client folder).

```
/pages
    /TicketDetail
        index.js                // -> Container
        TicketDetail.view.jsx   // -> View
        TicketEmpty.view.jsx    // -> View
```

### 2. File structure architecture
The architecture I apply with File structure to makes it maintanable and reusuable is **Page / Component**
- **Page**: Contains all the pages that are shown to the end-users, such as Dashboard page, Ticket Detail page.
- **Component**: Within the page, there are many smaller UI Components, such as *pagination*, *table*, *navbar*... These UI Components are re-usuable and maintainable. Splitting these out of pages are a must, that helps to separate of concerns, easy testing and to maintain.
```
/components
    /ErrorBoundary
    /Navbar
    /Pagination
    /TicketTable
/pages
    /TicketDetail
    /Dashboard
    /Error
        404.jsx
```

There are also some function-based folders, such as:
- **apis**: for maintaining APIs
- **assets**: for storing static files and medias
- **utils**: for utilities function

## Under the magic
This section explains how the magic works under the hood.
### 1. Connect to Zendesk API & Request all the tickets
Firstly, you are able to go to the **Dashboard** page, and see there are tickets shown as a table with each row represents a ticket.

How it works ?  
- When you access the **Dashboard** page. Client starts by having 0 records. It then API calls to the server (Express) with the `page = 1` (default page is `1`) and get back the response data. The authentication is done by the server (see README.md of server).
- Client updates the records to the response data (25 records).
- Client re-render and display the table with 25 rows.

### 2. Formatting data to be readable
- Date will be formatted using `/utils/DateUtil.js`

### 3. Pagination
Pagination of the app is done by calculating the current page and the last page (`lastPage = recordCount / perPage`).
- Display 4 default buttons (Go start, go previous, go next, go end).
- Display from the current index to previous / next 2 pages. For example:
```
«, ‹, 1 , 2, *3*, 4, 5, ›, » 
```

### 4. Error Handling
There are 2 types of error in this app:
- 404 NOT FOUND: Will be shown when you navigate to unknown URL. This is done by redirect all unknown routes to be handled by `/pages/Error/404.jsx`.
- Function-based error: Such as API error. It is done separately by the module. For example, if Ticket is not found, we have `TicketEmpty.view.jsx`, to handle the case. The app also has `ErrorBoundary.jsx` to wrap around the critical components that could be fail unexpectedly. This ErrorBoundary would catch the error and then redirect to homepage.

### 5. Testing
With the UI Test, I mock all the API calls. Rather making a API just for testing, it is very expensive and heavy task. So I create some mocks data and test to see the UI handle each of the cases, including Happy Path, Edge and Error cases.