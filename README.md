# redux-thunk-project

Redux project using Thunk (action creators)

## Table Of Contents

* Project Description
* Key Takaways
* Technologies Used

### Project Description

This project was part of my React course when learning advanced Redux and the use of Thunk functions, that allow you to dispatch an action that immediately calls another function. In this project I took in an array of dummy data, and I added functionality to render that data to a cart, allow for in cart adding and removing, and then seding that data to be stored in firebase. The goal was to allow for live updates as soon as the user added or removed an item from the cart and the challenge was to appropriately send side-effects within using redux store. One option was to apply my logic into a compenent, but that proved to not be the best practice as it created a FAT component, and the other option was to apply my logic into a seperate action file, with the use a custom action creators, and the format of a thunk function. 

### Key Takeaways

I learned a lot in this project, like how to avoid an automatically re-rendering the cart state when loading the page because when you fetch data at load, you are ultimately changing the state which sets off the useEffect() containing our sendData fetch. The solution was to add an additional piece of state that only changed when requests were sent locally, which prevented the second useEffect() to run when the state was falsey, and only when sending state locally did it become truthy.

### Technologies Used

* HTML (JSX)
* CSS (classes)
* Javascript (React)
* Packages (react-redux, reactjs/toolkit)
