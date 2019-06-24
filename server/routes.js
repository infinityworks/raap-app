const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('index', '/')                                       // todos  todos     /todos
.add('todos')                                       // todos  todos     /todos
.add('post', '/post/:title')                        // post   post      /post/:title