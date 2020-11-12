const chai = require("chai")
const expect = chai.expect
const spies = require("chai-spies")
chai.use(spies)

const reverseString = require("../problems/reverse-string.js")