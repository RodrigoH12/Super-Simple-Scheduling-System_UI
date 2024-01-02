# Super-Simple-Scheduling-System_UI

## Description

This is the second part (UI) of a two part project for the Super Simple Scheduling System challenge, you may find the first part of the project (API) in this repository https://github.com/RodrigoH12/Super-Simple-Scheduling-System_API.

This application was created for Students, more specifically, so that they can register for classes based on their agenda. For this reason, the Students will be able to:
- Log into to their accounts.
- See Student information and university related news.
- See all available classes.
- See list of Students assigned to specific Classes.
- Assign himself/herself to a class.

## Technologies Used

- Angular CLI v16.2.10
- Node v18.19.0
- Package Manager: npm v10.2.3
- Typescript
- HTML
- SCSS

## Project Set Up

### Installing the Project

First of all you have to clone the project and install all the necesssary dependencies:
```sh
$ git clone https://github.com/RodrigoH12/Super-Simple-Scheduling-System_UI.git
$ cd Super-Simple-Scheduling-System_UI
$ npm install
```

### Run the API

Then you have to set up and run the API application. Check README file of https://github.com/RodrigoH12/Super-Simple-Scheduling-System_API.

### Running the Project

Finally, use `ng serve` or `npm start` to run the project on a dev server, this command also builds the application. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Considerations

Some considerations to take into account about the project:
1. The application is responsive for desktop web browsers (not designed for mobile).
2. In order to log in to the application, you must use valid credentials from any user defined in the User table of the DB (Check Super-Simple-Scheduling-System_API).
3. The /Home page is divided in two sections userSection and newsSection, all the components used in the newsSection were mocked with static data, this is because this functionality was not required in the requirements document, but it was implemented anyway to have a better user experience.
4. The /Schedule page shows the list of all the classes available, these classes were represented in card components, where an image, the title of the subject, the teacher and the schedule are shown. For now, all the images shown on these cards are the same, this was defined like this to be able to visually show what the cards would look like if each class had a reference image.
5. Finally, emphasize that this web application was designed for the use of students and not for the use of an administrator. This was due to the freedom that was granted to define the UI in the requirements document and because it generated a bigger challenge by adding users management.