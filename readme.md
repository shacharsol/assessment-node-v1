# Overview

Welcome to Rentspree Node.js assessment test V1.

You are required to pass the test to prove your skills; the test consists of:

- [ ] **Part1:** Javascript Test
- [ ] **Part2** Node.js Test

## Initialize the Project

To start your assessment, the candidate should clone the project into a local machine. This project runs mainly with Node.js and the version required is `8.9.4`. The candidate should make sure the local machine has this node.js version (or above) installed.


Initialize the project by running

```bash
npm install
```

To start the installation of the project dependencies to the local machine.

now...

**It's all set!**


## Assessment Submission

After finishing your assessment, the candidate must do the following:

1. Delete the `node_modules` folders.
2. Compress all the remaining files in this folder into any compressed format (`.zip`, `.rar`, `.tar`, `.gz`, or any).
3. Send the file back to us via Email.

**Please note that**, editing any of the irrelevant files (Outside of `src/part1` and `src/part2`) may affect your assessment result.

# Part 1

Javascript skill. This part focuses on Javascript language syntax and skills. The assessments also involve basic Programming and Logical thinking.

## Prerequisites

This part's materials are in `src/part1`. Each of the questions is separated in its file with a corresponding name. For answering each question, please write them in the provided function contained in each file.

You are free to install _any_ library you require. This project initially comes with only [bluebird](http://bluebirdjs.com/docs/getting-started.html) and [lodash](https://lodash.com) installed

The project is initialized with the latest ES2017 syntax. The syntax list that is set up and available to use are:

- `const`, `let`
- `() => {}` arrow function
- `Promise`
- `async/await`
- `ES6 class`
- `...obj` spread operator

## Evaluation

The evaluation can execute through:

```bash
npm run test-part1
```

If the result shows to be 100%, you are more likely to do it right!

## 1. Asynchronous Delay

One of your program parts needs to wait for I/O function call. Write a function that can delay the process in Javascript. The function should take the first argument as `delay` which is the delay time in millisecond. Also, the second argument, `callback` which is the continuing process that should run after the `delay` millisecond had passed.

For example, your function
```javascript
asynchronousDelay(3000, () => {
  console.log("haha")
})
```
should log out _haha_ after 3 seconds.

## 2. Wrap It!

Assuming you have a function which takes a large number of arguments. For example, `sum(a, b, c, d, e, f)` takes 6 arguments and return a summation of each argument. Write a function `transformArgumentsToArray` that take a function similar to `sum` as its argument, and return a new function. This new function takes only 1 argument as an array, but still be able to process exactly as the function pass to `transformArgumentsToArray`.

For example, if we pass `sum` function to `transformArgumentsToArray`, it will return a new function that can take `newSum([a, b, c, d, e, f])` and will still return the same result as calling `sum(a, b, c, d, e, f)`.

```javascript
// for example
sum(1, 2, 3, 4, 5)
// -> return 15

// passing sum to the function will return newSum function
const newSum = transformArgumentsToArray(sum)
// calling newSum with array param
newSum([1, 2, 3, 4, 5])
// -> return 15
```

## 3. 24K Magic in the Array (eh ayy...)

Have the function `magicArray(arr)` take the `arr` array and return the summation of each member in the array under these conditions:

- member of `arr` is guaranteed to be Number type.
- If any member in `arr` is divisible by 7, it is excluded from the calculation. For example, if the array is `[5, 3, 14, 8]` the number `14` is ignored.
- The function should return the summation of the other member in the array.
- For example, `[5, 3, 14, 8]` should return `16`.

## 4. Wait a minute

Have the function `computePomodoro(startTime, endTime)` take two number of arguments. These arguments are the start time and end time in timestamp in standard timestamp in **string** format: `2018-06-01T08:18:12.907Z`. This function counts the interval called "Pomodoro" which is the focus working time interval that goes like this; Work 25 minutes then break a short break for 5 minutes. Then, back to work for 25 minutes and so on. The timer goes on for 4 intervals, after the 4th work interval, the break interval would be a _long break_ which take 15 minutes. After that, it would be a work time again for 25 minutes. So the whole thing starts over.

For example, the interval went on like this;

Start: Pomodoro 1

==== 25 minutes passed ====

break 1 (Short break)

==== 5 minutes passed ====

Start pomo 2

==== 25 minutes passed ====

break 2

==== 5 minutes passed ====

Start pomo 3

==== 25 minutes passed ====

break 3

==== 5 minutes passed ====

Start pomo 4

==== 25 minutes passed ====

break 4 (Long Break)

==== 15 minutes passed ====

Start pomo 5

=== another 25 minutes ====

... and so on

This function `computePomodoro(startTime, endTime)` count and return the number of Pomodoros completed during `startTime` and `endTime`, note that an incomplete Pomodoro must be discarded.

For example:

```javascript

computePomodoro("2018-06-01T08:18:12.907Z", "2018-06-01T09:08:12.907Z")
// -> return 1


computePomodoro("2018-06-01T08:18:12.907Z", "2018-06-01T09:14:12.907Z")
// -> return 2

computePomodoro("2018-06-01T08:40:39.024Z", "2018-06-01T11:21:54.099Z")
// -> return 5

```

**Note**:

- It's guaranteed that `endTime` is always be later than `startTime`
- You are free to use any library you wish. Though, you need to install it right :D.


# Part 2

Backend skill. This part will focus on Node.js common widely use libraries and how to implement them.

## Prerequisites

This part's materials are in `src/part2`. This part contains an ecosystem project built base on the Node.js popular web server, [Express.js](https://expressjs.com/). Your task would be to write API(s) for each of the assessments, most of the setup had been prepared fairly well. Be sure to understand the setup and write your assessment from the setup. Further instruction will be given upon each assessment.

## Evaluation

The project is set up with Express.js, and it can run via

```bash
npm run start-part2
```

The Web server will start through port 3000, and you are good to go.

Same as part1, the evaluation can execute through

```bash
npm run test-part2
```

## 1. A bunch of readmes

In the folder `files/readme` contains several text files with a specific name, write an API with the spec.

```
GET /files/:filename
```

The `filename` should be the file name in the `files/readme` folder on which the API should read.

The response should return file name, string character count, and the content of the file in JSON format like this:

```json
{
  "filename": "the-file-name",
  "length": "as string character count of the file",
  "content": "...the content of the file"
}
```

for example,

```
GET /files/hello-world.txt
```

should return

```json
{
  "filename": "hello-world.txt",
  "length": 12,
  "content": "hello world!"
}
```

In case the file name does not exist in the folder, the API should return with _http status code_ 404 with this error.

```json
{
  "error": "file not found!",
  "code": 404
}
```

## 2. A RESTful way

In the `src/part2/routes/users.js`, there is an unfinished Restful API that needs to be improved!
Currently, the users API returns a set of user data persisting in our database.

### A. Enhance user list

The API get users list is the following:

```
GET /users
```

At the moment, the API only return dump user object.

```json
[
  {
      "_id": "the-id",
      "isActive": true,
      "firstName": "Some-one",
      "lastName": "Good-name",
      "balance": "$200"
  }
]
```

Ideally, this API should return the list of users contains in the database as an array list.

For the sake of this assessment, we provide a function which virtually gets users from the persistent storage. The `getUsers()` function read database with delay time about 300-800 millisecond. Therefore, it returns a [Promise](https://scotch.io/tutorials/javascript-promises-for-dummies) that resolve the array of all Users.

```json
[
  {
    "_id": "5b90fa3ae3d7a39f2fbe3d91",
    "isActive": true,
    "firstName": "Maxine",
    "lastName": "Maddox",
    "balance": "$2,658.41",
    "age": 34,
    "eyeColor": "blue",
    "company": "RUGSTARS",
    "email": "maxine.maddox@rugstars.me",
    "phone": "+1 (812) 587-3466",
    "address": "914 Summit Street, Taycheedah, Minnesota, 3908",
    "registered": "Saturday, April 19, 2014 4:04 AM"
  },
  {
    "_id": "5b90fa3aca1af2169ef51371",
    "isActive": true,
    "firstName": "Lamb",
    "lastName": "Ellison",
    "balance": "$1,901.51",
    "age": 40,
    "eyeColor": "green",
    "company": "HOTCAKES",
    "email": "lamb.ellison@hotcakes.net",
    "phone": "+1 (896) 487-2570",
    "address": "781 Jaffray Street, Emory, Palau, 6471",
    "registered": "Saturday, April 26, 2014 11:29 AM"
  },
  {
    "_id": "5b90fa3a54b581637584983b",
    "isActive": false,
    "firstName": "Lourdes",
    "lastName": "Dickerson",
    "balance": "$3,631.70",
    "age": 37,
    "eyeColor": "green",
    "company": "PERMADYNE",
    "email": "lourdes.dickerson@permadyne.name",
    "phone": "+1 (801) 569-3468",
    "address": "206 Coleman Street, Vicksburg, Utah, 9241",
    "registered": "Monday, March 10, 2014 12:07 PM"
  },
  ...
]
```

However, for this API endpoint, we _do not_ want all the detail object to return with this API. The API we actually want should look like this:

```javascript
// GET /users
// will return
[
  {
    "_id": "5b90fa3ae3d7a39f2fbe3d91",
    "isActive": true,
    "firstName": "Maxine",
    "lastName": "Maddox",
    "balance": "$2,658.41"
  },
  {
    "_id": "5b90fa3aca1af2169ef51371",
    "isActive": true,
    "firstName": "Lamb",
    "lastName": "Ellison",
    "balance": "$1,901.51"
  },
  {
    "_id": "5b90fa3a54b581637584983b",
    "isActive": false,
    "firstName": "Lourdes",
    "lastName": "Dickerson",
    "balance": "$3,631.70"
  },
  ...
]
```

Write this API to return data from users accordingly.

### B. Get only one user!

Now, the data that we hide for each user should be exposed to the consumer. However, this time, instead of returning all user, we will allow the API caller to call a URL and get only _one_ User (resource).

Write a new API that follows [RESTful](https://restfulapi.net/resource-naming/) convention. This API should return a _single_ user object which matches `_id` param specify in the API endpoint.

**Note:** For this API, you do not need to hide any user information, since we return only 1 user, we need to expose as many details as possible!