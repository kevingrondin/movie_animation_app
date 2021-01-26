const base_path = "https://api.themoviedb.org/3";
const api_key = "aa5ac0d6ce97d46996c25bc5e3711e46";
const path = `${base_path}/discover/movie?api_key=${api_key}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

export const getAll = async () => {
  try {
    const response = await fetch(path)
    return response.json()
  } catch(err) {
    console.log('getAll', err)
  }
};

export const getById = async (id) => {
  try {
    const response = await fetch(`${base_path}/movie/${id}?api_key=${api_key}&language=fr-FR`)
    return response.json()
  } catch(err) {
    console.log('getById', err)
  }
};