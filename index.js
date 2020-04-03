var fs = require("fs")
var inquirer = require("inquirer")
var axios = require("axios")

inquirer.prompt([ {
    name: "gitName",
    type: "input" 
},
{name: "email", type: "input"}]).then(function(data) {
    axios.get("https://api.github.com/users/" + data.gitName).then(function(response){
        const userInfo = {gitName: response.data.login, image: response.data.avatar_url, email: data.email}
        console.log(userInfo)

        fs.writeFile("README.md", generateMarkdown(data), function(err){
            console.log(err)
        })

    }).catch(function(err){
        console.log(err)
    })
})

var generateMarkdown = function(data){
    return "## " + gitName 
}

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your repo?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your repo?"
    },
    {
        type: "input",
        name: "toc",
        message: "Provide a table of contents:"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions for your app:"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide usage instructions for your app:"
    },
    {
        type: "input",
        name: "licence",
        message: "What licenses were used?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How should a user run tests?"
    },
    {
        type: "input",
        name: "questions",
        message: "What questions came up with this app?"
    },
]).then(function(data) {
