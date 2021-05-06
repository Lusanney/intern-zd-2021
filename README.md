# Zendesk Internship Coding Challenge 2021


## Introduction
This project is developed as a context of internship coding challenge for Zendesk 2021.
### Requirements
- Connect to the Zendesk API
- Request all the tickets for your account
- Display them in a list
- Display individual ticket details
- Page through tickets when more than 25 are returned

## Techstack
This project is built by ReactJS (client) + ExpressJS (server). In the production build, ReactJS will be built into static files (html, js, css) and served by the server.
- Client: ReactJS
- Styling: Bootstrap 5 and some custom CSS
- Server: ExpressJS
- Testing: Jest (ServerSide) and Testing-Library (ReactJS)

## Installation

### 1. Prerequisites
You need to install NodeJS and NPM / Yarn node package manager.

Link: https://nodejs.org/en/download/  

### 2. Download / Clone this repository
```
$ git clone https://github.com/Lusanney/zendesk-intern-2021.git
```
### 3. Running Production App (Recommended) 


Firstly, install dependencies in the server-side
```
$ cd server
$ npm install
```

Secondly, run the web application
```
$ npm start
```

Finally, open your browser & enjoy the project journey at the URL
```
http://localhost:5000/
```

### 4. Running in Development App  
If you want to run Client-app separately (as a development environment), you could achieve this by running both Server app and Client app as the same time. This could happen because, as a development environment, ReactJS is served by react-scripts static server.

Firstly, install dependencies on both server-side and client-side
```
# Install dependencies on server-side
$ cd server
$ npm install

# Navigate back to client, and install dependencies
$ cd ../client
$ npm install
```

Secondly, run both the server and client application (Please use 2 terminals)
```
# Terminal 1
$ cd server
$ npm start

# Terminal 2
$ cd client
$ npm start
```

Finally, open your browser & enjoy the project at the URL
```
http://localhost:3000/
```

### 5. Testing the Apps
Server and Client are written with test cases. In order to run tests for each, navigate to the folder and run.
```
# Running Server API Tests
$ cd server
$ npm test

# Running Client UI Tests
$ cd client
$ npm test
```
## Usage & Walkthrough

### 1. Usage
The application consists of 2 main pages that are **Dashboard**, and **Ticket Detail**, and some error handling pages such as **404**, **500**.

- **Dashboard**: This page shows a Ticket Table, that lists all the tickets that are in domain lusanney.zendesk.com. The table itself has limit to 25 records and it provides you a pagination feature that you could page through. Clicking one of the row will direct you to **Ticket Detail** page.
- **Ticket Detail**: This page shows data of a single ticket, such as *subject*, *description*, *requester_id*, *status*. This page is ID-oriented, that means, if you navigate to a different ticket id page `/ticket/:id`, you will have a different ticket.

### 2. Walkthrough
- Go to the Dashboard page with URL: `/`
- Dash board shows the table with 25 records, and a pagination.
- Page through each page to see the changes.
- Click one of the row, to see the details of a ticket.
- Tried different ticket with different id URL: `/ticket/:id`, such as `/ticket/2`, and possibly `/ticket/500` to see error handling.
- Tried any unknown URL, to see the app handle 404 NOT FOUND.

## Why I use this tech stack ?
My tech background and skills are developed at best with Java and JavaScript. I have 1+ year self-practiced with JavaScript & Web Development throughout University. So that, I choose JavaScript and browser-based to make this project, as its simplisticity, fast and extreme lightweight. Here is my judgement on the framework / library that I use.

- **ReactJS - client-side**: There are many frameworks & libraries to make the Web UI such as JQuery, VanilaJS, Angular and VueJS. The reason I would not choose a plain html, css, js, and prefer a framework / library is because of the speed performance, re-usablility, maintainability and especially time savings.  
    - ReactJS stands out in performance, because it supports VirtualDOM, which effectively cache the unchanges code and only update code block that are changed. 
    - One of the core value of ReactJS is re-usability and maintainability. By splitting the page into smaller UI components. It is very easy to maintain, find bugs and remove redundant code blocks.
    - Simplicity, setting up and writing code in React is very fast, easy-learning-curve. The syntax is elegant and HTML-like, easy to read.

    With one of those key values, ReactJS could be a perfect choice for developing an intern project for Zendesk. In my investigation, Zendesk services and application, including the portal and SaaS software, Zendesk also uses ReactJS, so it proves that not only ReactJS is great, but also it is scalable and commercial-ready tech.

- **Bootstrap 5 - styling library**: As it is not a requirement to build a beautiful website from scratch with plain CSS. I use this library for making it faster in the UI development, so that I could focus more on the logic work. This library helps you to make your website readable, responsive and looks elegant with just normal HTML.

- **ExpressJS - Server-side**: The reason why we need a server is because only-browser app (ReactJS) cannot call API to Zendesk as blocking by CORS (Cross-origin resource sharing). It is also because, a server can serve static files and handle custom API.   

    There are many frameworks out there and raw NodeJS could also serve a basic HTTP Server. However, I choose ExpressJS because of popularity, simplicity, well-support community and very lightweight.
    - ExpressJS is very lightweight and simplistic. Comparing to Spring Boot (Java), or ASP.Net (C#), ExpressJS helps you to run the app in just a few lines of code. With the context of Zendesk Internship Project, ExpressJS saves a lot of time to implement basic functions such as API call and error handling.
    - ExpressJS has a big community, and almost every tutorial about NodeJS server uses ExpressJS. It also has in other big tech company documentation (Google Cloud, Facebook CRA, Jest).
    - ExpressJS is powerful. Apart from those general points, ExpressJS stands out among NodeJS frameworks because it support middlewares. Middlewares are logical functions that sits between server operation. This is a very powerful tool to add extra validation, code refactor and so on.

- **Testing**: When it comes to testing, there are many libraries for doing so, such as Mocha, Jasmine, Jest. In this project, I choose Jest for ExpressJS API test and TestingLibrary for React UI testing.
    - **Jest (Server API testing)** is powerful, fast and well-support. It is built by Facebook and used by a lot of companies. It supports API and asynchronous tests. For me, it saves time when it comes to learn for doing Zendesk project and very effective, easy to main.
    - **TestingLibrary (React test)**. This is bundled with React when you install ReactJS. It helps you to write UI Testings by creating a virtualDOM. I use this library for mocking the APIs and test for Happy Path / Error cases to see whether it renders as expected.

## Limitation & Assumptions
Because of the context of the internship challenge, as well as the timeframe and requirements, there are some limitation to this project and could be improved:
- **Resource Expansion**. When calling an API for tickets, rather it returns a Requester Object, but it only has `requester_id`. And because we don't want to make another 100 subsequent API calls just to fetch Requester data, we could use Resource Expansion, that allows the tickets API to automatically expand the Requester without sending back just the `requester_id`.  
However, checking with Zendesk developer, Zendesk right now doesn't support it. My alternative is to store all `requester_id` into a **HashMap** data structure. This helps to avoid duplications API call. For example, rather than fetching `requester_id = 22` for 50 times, we just fetch once.
- **Authentication**. Authentication is a module that is doable but takes much effort, and not a requirement. The application only fetch API from lusanney.zendesk.com.

## Please see Client & Server README to understand about code pattern.