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
  res.redirect("/login");
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

  if (req.cookies.user_id) {
    const templateVars = {};

    knex
      .select("*")
      .from("resources")
      .orderBy("created_at")
      .then(results => {
        // res.send(results)
        templateVars.resources = results;
      })
      .then(results => {
        return knex.select("*").from("topics");
      })
      .then(results => {
        templateVars.topics = results;
      })
    .finally(results => {
      res.render("index", templateVars);
      // console.log(templateVars);
    })

  } else {
    res.status(400).send("Error: Please log in first!");
  }

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
      // console.log(results[0].id);
      return results[0].id;
    })
    .then(id => {
      knex
        .select("*")
        .from("resources")
        .where("topic_id", id)
        .then(results => {
          templateVars.resources = results;
          // console.log(templateVars);
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
  const { card_id } = req.params;
  const templateVars = {
    card_id
  };
  const cardId = Number(card_id.replace(/:/, ""));
  //console.log(typeof cardId);
  /*-----   For the comment part -----*/
  knex
    .select("*")
    .from("users")
    .join("comments", { "users.id": "comments.user_id" })
    .orderBy("created_at")
    .then(results => {
      templateVars.commentsuser = results.reverse();
    })
    .then(results => {
      knex("ratings")
        .select(knex.raw("ROUND(AVG(rating_value),1) as rating_value"))
        .where({ resource_id: cardId })
        .then(results => {
          templateVars.avrRating = results;
        });
    })
    .then(results => {
      knex
        .select("*")
        .from("resources")
        .where({ id: cardId })
        .then(results => {
          templateVars.resource = results;
          const topicId = templateVars.resource[0].topic_id;
          knex
            .select("*")
            .from("topics")
            .where({ id: topicId })
            .then(results => {
              templateVars.topic = results;
              //res.send(templateVars);
              res.render("one_resource", templateVars);
            });
        });
    });
});

app.get("/user/:id", (req, res) => {
  // const id = req.params.id;
  const id = req.cookies.user_id;
  const templateVars = {};
  // console.log(id);
  knex
    .select("*")
    .from("users")
    .where("id", id)
    .then(results => {
      // console.log(results[0]);
      templateVars.userinfo = results[0];
      // console.log(templateVars);
      res.render("profile", templateVars);
    });
});

app.get("/user/:id/my_resources", (req, res) => {
  const templateVars = {};
  //userId: req.cookies.user_id
  //const userId = req.params.id;
  const userId = req.cookies.user_id;
  Promise.all([
    knex
      .select("*")
      .from("resources")
      .where({
        user_id: userId
      })
      .then(results => {
        templateVars.resources = results;
      })
      .then(() => {
        knex
          .select("*")
          .from("topics")
          .then(results1 => {
            templateVars.topics = results1;
            knex
              .select("resource_id")
              .from("pins")
              .where("user_id", userId)
              .then(result2 => {
                knex
                  .select("*")
                  .from("resources")
                  .whereIn("id", result2.map(resource => resource.resource_id))
                  .then(results3 => {
                    results3.forEach(item => templateVars.resources.push(item));
                    console.log(templateVars);
                    res.render("my_resources", templateVars);
                  });
              });
          });
      })
  ]);
});

app.get("/rating/:rating_value/:resource_id", (req, res) => {
  const { rating_value, resource_id } = req.params;
  /* @@@ need to ad the user - done*/
  knex("ratings")
    .insert({
      user_id: req.cookies.user_id,
      rating_value,
      resource_id
    })
    .then(function(result) {
      // console.log(result);
      res.redirect("/resources/" + resource_id);
    });
});

//------------- POST ----------//

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  knex
  .select("*")
  .from("users")
  .where('email', email)
  .andWhere('password', password)
  .then(results => {
    // console.log(results[0].id)
    res.cookie("user_id", (results[0].id))
    res.redirect("/resources")
  })
  .catch((err) => {
    res.status(400).send("Error: Email or password doesn't match.")
  })
})

app.post("/register", (req, res) => {
  const { username, password, email } = req.body;
  const user_img = faker.internet.avatar();
  const userObject = {};
  userObject.username = username;
  userObject.password = password;
  userObject.email = email;
  userObject.user_img = user_img;
  knex("users")
    .insert([userObject])
    .returning('id')
    .into('users')
    .then(id => {
      console.log("User number" + id + "has been added")
    })
    .then(res.redirect("/login"))
  })

app.post("/logout", (req, res) => {
  res.clearCookie("user_id");
  res.redirect("/");
});

app.post("/resources", (req, res) => {
  const { url, title, description, topic_id } = req.body;
  const user_id = req.cookies.user_id;
  knex("resources")
    .insert({
      url,
      title,
      description,
      user_id,
      topic_id
    })
    .returning('id')
    .into('resources')
    .then(id => {
      console.log("Resource number" + id + "has been added")
    })
    .then(function(result) {
      res.redirect("/resources");
    });
});

app.post("/pins", (req, res) => {
  // const { resource_id, user_id } = req.body
  const obj = {
    user_id: req.cookies.user_id,
    resource_id: req.body.resourceId
  };

  console.log(obj);

  knex("pins")
    .insert(obj)
    .then(result => {
      console.log(result);
    })
    .then(result => {
      res.redirect("/resources");
    });
});

app.post("/user/:id", (req, res) => {
  const user_id = req.cookies.user_id;
  let myObject = {};
  myObject.username = req.body.username;
  myObject.email = req.body.email;
  myObject.password = req.body.password;
  myObject.user_img = req.body.avatar;

  if (myObject.username.length === 0) {
    delete myObject.username;
  }
  if (myObject.email.length === 0) {
    delete myObject.email;
  }
  if (myObject.password.length === 0) {
    delete myObject.password;
  }
  if (myObject.user_img.length === 0) {
    delete myObject.user_img;
  }
  knex("users")
    .where({ id: user_id })
    .update(myObject)
    .then(results => {
      res.redirect("/user/:id");
    });
});

app.post("/user/:id", (req, res) => {});
// templateVars.username = results[0].username
// templateVars.email = results[0].email
// templateVars.id = results[0].id
// templateVars.user_img = results[0].user_img
// }).then(res.render("profile", templateVars))

app.post("/resources/:card_id", (req, res) => {
  const { text } = req.body;
  const { card_id } = req.params;
  const { user_id } = req.cookies;

  //console.log(text)

  /* @@@ need to ad the user */
  knex("comments")
    .insert({
      text,
      user_id,
      resource_id: card_id
    })
    .then(function(result) {
      console.log(result);
      res.redirect(`/resources/${card_id}`);
    });
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
