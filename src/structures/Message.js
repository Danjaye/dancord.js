"use strict";

const dancord = require("./Base");

class Message {
  constructor(content: String, author: dancord.User) {
    this.id = (new Date).getTime();
  }
}
