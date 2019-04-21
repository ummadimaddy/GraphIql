// query getSingleCourse($courseID: Int!){
//     course(id:$courseID){
//         title
//         author
//         description
//         topic
//         url
//       }
//     }


//query variable
// {"courseID":1 }


//output
// {
//     "data": {
//       "course": {
//         "title": "The Complete Node.js Developer Course",
//         "author": "Andrew Mead, Rob Percival",
//         "description": "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
//         "topic": "Node.js",
//         "url": "https://codingthesmartway.com/courses/nodejs/"
//       }
//     }
//   }


// 2)

// query getCoursesForTopic($courseTopic: String!){
//     courses(topic:$courseTopic){
//         title
//         author
//         description
//         topic
//         url
//       }
//     }

//query variables

// {"courseTopic": "Node.js" }

//output

// //{
//     "data": {
//         "courses": [
//           {
//             "title": "The Complete Node.js Developer Course",
//             "author": "Andrew Mead, Rob Percival",
//             "description": "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
//             "topic": "Node.js",
//             "url": "https://codingthesmartway.com/courses/nodejs/"
//           },
//           {
//             "title": "Node.js, Express & MongoDB Dev to Deployment",
//             "author": "Brad Traversy",
//             "description": "Learn by example building & deploying real-world Node.js applications from absolute scratch",
//             "topic": "Node.js",
//           }
//         ]
//     }


// 3)

// query getCoursesForTwoDifferentIds($courseID1: Int!,$courseID2: Int!){
//     course1: course(id:$courseID1){
//       ...courseFields
//     }
//     course2:course(id:$courseID2){
//       ...courseFields
//     }
//   }
  
//   fragment courseFields on Course{
//    title
//     author
//     description
//     topic
//     url
//   }

//QUERY VARIABLES

// {"courseID1": 1 ,
// "courseID2": 3
// }

//OUTPUT

// {
//     "data": {
//       "course1": {
//         "title": "The Complete Node.js Developer Course",
//         "author": "Andrew Mead, Rob Percival",
//         "description": "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
//         "topic": "Node.js",
//         "url": "https://codingthesmartway.com/courses/nodejs/"
//       },
//       "course2": {
//         "title": "JavaScript: Understanding The Weird Parts",
//         "author": "Anthony Alicea",
//         "description": "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
//         "topic": "JavaScript",
//         "url": "https://codingthesmartway.com/courses/understand-javascript/"
//       }
//     }
//   }

//to getb all
// query{
//     courses{
//       title
//       author
//       description
//       topic
//       url
//     }
//   }
  