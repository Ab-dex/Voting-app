## About

## Summary:

This is a simple project based on react interactivity.

It takes in data from seed.js in form of an array into the productList component.

The productList component inturn maps out the array and serves it as props to Product component creating individual product component depending on the number of items in the array.

A caret up icon is clicked to increase the number of votes per product; initial value votes is randomly generated as sorted in descending order.

## Key Note:

In order to update the vote value from the child component - Product, a method has to be passed as props from parent to the child component, which calls the method when required (in this case, on click of the caret).
