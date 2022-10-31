import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.thedogapi.com/v1/",
  headers: {
    "x-api-key":
      "live_88jhqPMmg4dsn7RyeCOLqUAzUKXZcxwZiUL7hhtEN5tnon6fxDM0VCJmJlwOdVZw",
  },
});
