import axios from "axios";

const base_path = "https://api.themoviedb.org/3";
const api_key = "aa5ac0d6ce97d46996c25bc5e3711e46";
const path = `${base_path}/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

function getAll() {
  return axios.get(path).then((response) => {
    return response;
  });
}

function getById(id) {
  return axios
    .get(`${base_path}/movie/${id}?api_key=${api_key}&language=en-US`)
    .then((response) => {
      return response;
    });
}

export default {
  getAll,
  getById,
};
