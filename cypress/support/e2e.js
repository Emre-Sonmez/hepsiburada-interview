import "./commands";
import "cypress-mochawesome-reporter/register";

Cypress.on("uncaught:exception", (err, runnable) => {
  // Combining these lines you can listen for the uncaught:exception event.
  // Return false to disable the behavior.
  return false;
});
