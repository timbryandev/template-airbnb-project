/* eslint-disable no-console */

/* ######################################################################### */

/**
 * UncaughtExceptionHandler will stop the currently window from closing, giving
 *  you time to read the error message.
 * This should not be used in production! Instead, design your own, better
 *  debugging system such as logging to an external file/api
 * @param {ErrorObject} err The error that occurred
 */
function UncaughtExceptionHandler(err) {
  console.error('\n\n\n\n\n\n');
  console.error('Uncaught Exception Encountered!');
  console.error('\n---\n');
  console.error('err: ', err);
  console.error('\n---\n');
  setInterval(() => {}, 1000);
}
process.on('uncaughtException', UncaughtExceptionHandler);

/* ######################################################################### */

class Person {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }
}

const Tim = new Person('Tim', 28);

console.log(Tim);
