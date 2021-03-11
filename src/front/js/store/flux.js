const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//se almacena la data que viene de la API
			films: [],
			characteres: [],
			locations: []
		},
		actions: {
			//POST del registro
			validateRegister: async (name, email, password) => {
				const url = "https://3001-tomato-trout-4lbu1yev.ws-us03.gitpod.io/api/register";
				const response = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: name,
						email: email,
						password: password
					})
				});
				const info = await response.json(); //Trae la respuesta de lo que me retorna el back end
				//console.log(info.msg);
				alert("Registro completado exitosamente!");
			},
			//Get de la data Films
			getFilms: async () => {
				const url = "https://ghibliapi.herokuapp.com/films";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ films: data });
			},
			//Get de la data people
			getCha: async () => {
				const url = "https://ghibliapi.herokuapp.com/people";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ characteres: data });
			},
			//Get de la data locations
			getLocations: async () => {
				const url = "https://ghibliapi.herokuapp.com/locations";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ locations: data });
			}
		}
	};
};

export default getState;
