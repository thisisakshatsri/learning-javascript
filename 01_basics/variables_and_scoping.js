//Example 1:
const userId = 112
var userName = "Akshat"
let password = "sample"
lastSeen = "pondicherry"

// userId = 113
// console.log(userId); -> will throw an error because the value assigned under const data type cannot be changed in complete file.
console.table([userId, userName, password, lastSeen])

//Example 2
console.log(newUserId)
// console.log(newuserName)

var newUserId = 113
let newuserName = "Whatever"

/*Difference beetween "var and let" is var is Hoisted and let is not. Hoisting means the variable is declared by JavaScript, before it is used automatically. In the Example 2 the newUserId will show undefined and newUserName will throw error.

Most of the time we should be using let because the roles of let is natural and easy to understand whereas the var is found little ambigous due to "Hoisting".*/

//Example 3:
const userIds = [112, 113, 114, 115]
userIds.push(116)
console.table(userIds)
//The above example(Ex 3) would work, because we're not reassigning it we're only pushing a new element into it.

/* JavaScript is very functional language. Most often we try to call funtions on values rather than reassign. */



