const API = "https://api.themoviedb.org/3";
export function get(path){
    return fetch(API + path, {
      headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmQ5M2IxMmNhMWM3MzI2NDNjNDcyOGU5MDU4MmIxYSIsInN1YiI6IjY0N2YzMWM5MGUyOWEyMmJlMWYxMjkxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RwFO0dw0k4FwNGt-SkgiSVfxDmnpGmUarzQvNGkwAJA",
      "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((result) => result.json())
}