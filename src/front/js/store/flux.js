const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            //se almacena la data que viene de la API
            films: [],
            characteres: [],
            locations: []
		},
		actions: {
                //Get de la data Films
            getFilms: async () => {
                const url = "https://ghibliapi.herokuapp.com/films";
                const response = await fetch(url);
                const data = await response.json();
                setStore({films: data})
            },
            //Get de la data people
            getCha: async () => {
                const url = "https://ghibliapi.herokuapp.com/people";
                const response = await fetch(url);
                const data = await response.json();
                setStore({characteres: data})
            },
            //Get de la data locations
            getLocations: async () => {
                const url = "https://ghibliapi.herokuapp.com/locations";
                const response = await fetch(url);
                const data = await response.json();
                setStore({locations: data})
            }
        
            
		}
	};
};

export default getState;
