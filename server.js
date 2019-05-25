"use strict";

require("dotenv").config();
const faker = require("faker");

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require("morgan");
const knexLogger = require("knex-logger");

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded"
  })
);
app.use(express.static("public"));

// Add cookie parser to use
app.use(cookieParser());
// Mount all resource routes
// app.use("/api/users", usersRoutes(knex));

const resources = [
  {
    id: 1,
    url: "http://lorempixel.com/640/360/",
    title: "ubuntu",
    description: "Web dev is so fun!",
    user_id: faker.random.number({ min: 1, max: 10 }),
    topic_id: faker.random.number({ min: 1, max: 7 })
  },
  {
    id: 2,
    url: "http://lorempixel.com/640/360/",
    title: "new recipe",
    description: "Spicy chicken curry!",
    user_id: faker.random.number({ min: 1, max: 10 }),
    topic_id: faker.random.number({ min: 1, max: 7 })
  },
  {
    id: 3,
    url: "https://learnenglish.britishcouncil.org/english-grammar",
    title: "Learn English",
    description: "Tutorial on English grammar for beginners",
    user_id: faker.random.number({ min: 1, max: 10 }),
    topic_id: faker.random.number({ min: 1, max: 7 })
  },
  {
    id: 4,
    url: "http://lorempixel.com/640/360/",
    title: "new photo",
    description: "My newest photo",
    user_id: faker.random.number({ min: 1, max: 10 }),
    topic_id: faker.random.number({ min: 1, max: 7 })
  },
  {
    id: 5,
    url: "http://lorempixel.com/640/360/",
    title: "new idea",
    description: "I want this bike",
    user_id: faker.random.number({ min: 1, max: 10 }),
    topic_id: faker.random.number({ min: 1, max: 7 })
  },
  {
    id: 6,
    url: "http://lorempixel.com/640/360/",
    title: "my dog",
    description: "My dog is performing magic",
    user_id: faker.random.number({ min: 1, max: 10 }),
    topic_id: faker.random.number({ min: 1, max: 7 })
  },
  {
    id: 7,
    url: "https://youtu.be/zctLck0TJNk",
    title: "Advanced drumming techniques",
    description:
      "Video on best warm-up techniques before a big show and creativity",
    user_id: faker.random.number({ min: 1, max: 10 }),
    topic_id: faker.random.number({ min: 1, max: 7 })
  },
  {
    id: 8,
    url: "https://dadwithapan.com/",
    title: "Recipes for the busy dad",
    description:
      "This blog is great if you’re a busy dad (partially or largely because you have kids) but you still need to feed them and yourself.",
    user_id: faker.random.number({ min: 1, max: 10 }),
    topic_id: faker.random.number({ min: 1, max: 7 })
  },
  {
    id: 9,
    url: "https://www.rejectiontherapy.com/100-days-of-rejection-therapy",
    title: "Do the 100 days of rejection challenge",
    description:
      "blog on how to face & overcome rejection which is paramount to success as an entrepreneur",
    user_id: faker.random.number({ min: 1, max: 10 }),
    topic_id: faker.random.number({ min: 1, max: 7 })
  },
  {
    id: 10,
    url: "https://youtu.be/VWw_1-gEdLA",
    title: "Magic tricks for beginners",
    description: "Video showing easy magic tricks anyone can do!",
    user_id: faker.random.number({ min: 1, max: 10 }),
    topic_id: faker.random.number({ min: 1, max: 7 })
  }
];

const topics = [
  // Inserts seed entries
  { id: 1, default_img: "http://lorempixel.com/640/360/", name: "music" },
  { id: 2, default_img: "http://lorempixel.com/640/360/", name: "cooking" },
  { id: 3, default_img: "http://lorempixel.com/640/360/", name: "languages" },
  {
    id: 4,
    default_img: "http://lorempixel.com/640/360/",
    name: "arts_and_crafts"
  },
  { id: 5, default_img: "http://lorempixel.com/640/360/", name: "life_hacks" },
  {
    id: 6,
    default_img: "http://lorempixel.com/640/360/",
    name: "magic_tricks"
  },
  { id: 7, default_img: "http://lorempixel.com/640/360/", name: "web_dev" }
];

//------------- GET ----------//

app.get("/", (req, res) => {
  // let user_session = req.params['users_id'] // is that the field id in users table?
  // let templateVars = {} // main page content
  // if (!user_session){
  //   res.redirect("/login")
  // } else{
  // res.redirect("/resources");
  // res.render("/resources", templateVars);
  // }

  // knex
  //   .select("*")
  //   .from("users")
  //   .then((users) => {
  //       // res.render("index", {users});
  //       res.render("temp");
  //       // res.send(users)
  //   });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  let templateVars = {};

  res.render("register", templateVars);
});

app.get("/resources", (req, res) => {
  // knex.select("*")
  // .from("resources")
  // .then(results => {
  //   const templateVars= {resources: results}
  //   res.render("index", templateVars);
  // });
  // const templateVarswithresources = {resources: resources, topics:topics}
  const templateVars = {};
  knex
    .select("*")
    .from("resources")
    .then(results => {
      // res.send(results)
      templateVars.resources = results;
    })
    .then(
      knex
        .select("*")
        .from("topics")
        .then(results => {
          templateVars.topics = results;
          res.render("index", templateVars);
        })
    );

  console.log(templateVars);
  // res.send(resources)
  // const topics = knex.select("*").from("topics")

  // const templateVars = {'resources':resources,
  //                       'topics':topics};

  // res.render("index", templateVars);
});

// Search by Categories
app.get("/resources/topic/:name", (req, res) => {
  const templateVars = {};
  const topic = req.params.name;
  knex
    .select("*")
    .from("topics")
    .where({
      name: topic
    })
    .then(results => {
      templateVars.topics = results;
      console.log(results[0].id);
      return results[0].id;
    })
    .then(id => {
      knex
        .select("*")
        .from("resources")
        .where("topic_id", id)
        .then(results => {
          templateVars.resources = results;
          console.log(templateVars);
          res.render("index", templateVars);
        });
    });
});

// Search by name
app.get("/resources/search", (req, res) => {
  const templateVars = {};
  const identifier = req.query.myQuery;
  Promise.all([
    knex
      .select("*")
      .from("resources")
      .where("title", "like", `%${identifier}%`)
      .orWhere("description", "like", `%${identifier}%`)
      .then(results => {
        templateVars.resources = results;
      })
      .then(results => {
        knex
          .select("*")
          .from("topics")
          .then(topics => {
            templateVars.topics = topics;
          })
          .then(results => {
            res.render("index", templateVars);
          });
      })
  ]);
  // const templateVars = {}
  // const identifier = req.query.myQuery
  // console.log("output:" + identifier.length)
  // knex
  // .select("*")
  // .from("resources")
  // .where('title', 'like', `%${identifier}%`)
  // .orWhere('description', 'like', `%${identifier}%`)
  // .then(results => {
  //   // res.send(results)
  //   // console.log("results:", results)
  //     templateVars.resources = results
  //     console.log(templateVars)
  // })
  // .then(
  //   knex
  //   .select("*")
  //   .from("topics")
  //   .then(topics => {
  //     templateVars.topics = topics
  //     console.log("askldfhjskdjh", templateVars)
  //     res.render("index", templateVars)
  //   })
  // )
});


app.get("/resources/:card_id", (req, res) => {
  const templateVars = {};

  knex
    .select("*")
    .from("comments")
    .then(results => {
     /*  @@@ voir comment refacto */
     /* reverse function for object */
      const reverseObj = (obj) => {
        let newReversObj = [];
        Object.keys(obj)
          .sort(function(a, b){return a-b})
          .reverse()
          .forEach(key => {
            console.log(key);
            newReversObj.push({
              id: obj[key].id,
              text: obj[key].text,
              user_id: obj[key].user_id,
              resource_id: obj[key].resource_id,
              created_at: obj[key].created_at,
              updated_at: obj[key].updated_at
            });
          });
        return newReversObj;
      };

      templateVars.comments = reverseObj(results);
      res.render("one_resource", templateVars);
    });
});


app.get("/user/:id", (req, res) => {
  // const id = req.params.id;
  const id = req.cookies.user_id;
  const templateVars = {};
  console.log(id)
  knex
  .select("*")
  .from("users")
  .where('id', id)
  .then(results => {
    console.log(results[0])
    templateVars.userinfo = results[0]
    console.log(templateVars)
  res.render("profile", templateVars);
  })
});

app.get("/user/:id/my_resources", (req, res) => {
  let templateVars = {};

  res.render("my_resources", templateVars);
});


app.get("/resources/:card_id", (req, res) => {
  let templateVars = {
  };
  res.render("one_resource", templateVars);
});

//------------- POST ----------//

app.post("/login", (req, res) => {
  const email = req.body.email
  const password = req.body.password
  knex
  .select("*")
  .from("users")
  .where('email', email)
  .andWhere('password', password)
  .then(results => {
    console.log(results[0].id)
    res.cookie("user_id", (results[0].id))
    res.redirect("/resources")
  })
})

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  knex("users")
    .insert({ username, email, password, user_img: faker.internet.avatar() })
    .then(function(result) {
      console.log(result);
      // ({ success: true, message: "ok" });
      // res.redirect("/login");
    });
  // res.redirect("/login");
});

app.post("/logout", (req, res) => {
  res.redirect("/");
});

app.post("/resources", (req, res) => {
  const { url, title, description, topic_id } = req.body;

  knex("resources")
    .insert({
      url,
      title,
      description,
      topic_id
    })
    .then(function(result) {
      console.log(result);
      res.redirect("/resources");
    });
});

app.post("/user/:id", (req, res) => {

  })
    // templateVars.username = results[0].username
    // templateVars.email = results[0].email
    // templateVars.id = results[0].id
    // templateVars.user_img = results[0].user_img
  // }).then(res.render("profile", templateVars))


app.post("/resources/:card_id", (req, res) => {
  const { text } = req.body;
  /* @@@ need to ad the user */
  knex("comments")
    .insert({
      text
    })
    .then(function(result) {
      console.log(result);
      res.redirect("/resources/:card_id");
    });
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

// }
