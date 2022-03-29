const express = require("express");
const app = express();

app.use(epicure);

db.admins.insertMany([
  {
    role: "admin",
    name: "Nir",
    lastName: "Graziani",
    userName: "Cloudkicker",
    password: "1",
  },
]);

db.restaurants.insertMany([
  {
    name: "Claro",
    image: "../site-assets/claro/claro.png",
    chef: "Ran Shmueli",
    dishes: "",
  },
  {
    name: "Lumina",
    image: "../site-assets/lumina/mizlala-gret-mullet-fillet.jpg",
    chef: "Ran Shmueli",
    dishes: "",
  },
  {
    name: "Tiger Lilly",
    image: "../site-assets/tiger-lily/tiger-lili.jpg",
    chef: "Yanir Green",
    dishes: [],
  },
]);

db.chefs.insertMany([
  {
    name: "Yossi Shitrit",
    image: "../site-assets/chef/group-15.png",
    description:
      "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit's creativity and culinary acumen born of long experience are expressed in the every detail of each and every dish.",
    restaurants: [],
  },
]);

db.dishes.insertMany([
  {
    name: "Padki Mao",
    price: "88",
    Ingredients:
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconu",
    tags: "spicy",
    restaurants: [],
  },
]);
