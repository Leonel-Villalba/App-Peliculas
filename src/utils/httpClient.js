
const API = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_TOKEN;

// console.log(import.meta.env.VITE_TOKEN);
// console.log(import.meta.env.VITE_API_URL);

export function get(path){
    return fetch(API + path, {
      headers:{
        Authorization:
        "Bearer " + API_TOKEN,
      "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
}