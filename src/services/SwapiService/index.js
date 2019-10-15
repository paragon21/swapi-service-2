class SwapiService {

  _apiBase = 'https://swapi.co/api';

     getResource = async (url) =>  {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok) {
      	throw new Error (`Could not fetch ${url}, received ${res.status}`);
      }
      return res.json();
    }

     getAllPeople = async () => {
     const res = await this.getResource(`/people/`);
     return res.results.map(this._transformPerson);
   }

    getPerson = async (id) =>  {
      return this.getResource(`/people/${id}`);
    }

  getAllPlanets = async () => {
     const res = await this.getResource(`/planets/`);
     return res.results.map(this._transformPlanet);
   }

   getPlanet = async (id) => {
     const res = await this.getResource(`/planets/${id}`);
     return this._transformPlanet(res);
   }

   getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship = async (id) => {
    return this.getResource(`/starships/${id}`);
  }

  _extractId(item) {
    const regexId = /\/([0-9]*)\/$/;
    return item.url.match(regexId)[1];
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      sex: person.gender,
      birth_year: person.birth_year,
      eye_color: person.eye_color,
    };
  }

  _transformPlanet = (planet) => {

    return {
      id: planet.id,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }
  }

}

export default SwapiService;
