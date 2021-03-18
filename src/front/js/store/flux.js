const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//se almacena la data que viene de la API
			films: [],
			characteres: [],
			locations: [],
			favorites: [],
			boolean: localStorage.getItem("u_token") ? true : undefined
		},
		actions: {
			//Sale y cierra el token creado
			logout: () => {
				setStore({ boolean: undefined });
				localStorage.clear(); //Borra el localStorage, que contiene mi token y la info
			},
			//POST del registro
			validateRegister: async (name, email, password) => {
				const url = process.env.BACKEND_URL + "/api/register";
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
				console.log(info);
				alert("Successful registration!");
			},
			//POST del Login
			validateLogin: async (email, password) => {
				setStore({ boolean: undefined });
				const url = process.env.BACKEND_URL + "/api/login";
				const response = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json" //Lo que se va a enviar es json, por eso se pone el header
					},
					body: JSON.stringify({
						email: email,
						password: password
					}) //Convierte todo a un String , se envia como stringfy porque en el back end, se recibe como "email", "password"
				});
				const body = await response.json();
				console.log(body);
				if (body.status) {
					localStorage.setItem("u_token", body.token);
					localStorage.setItem("status", body.status);
					localStorage.setItem("name", body.user.name);
					const actions = getActions();
					actions.getFavorites();
					setStore({ boolean: true });
				} else {
					//alert(body.msg);
					console.log(body.msg);
					setStore({ boolean: false });
				}
			},
			//Crea el Token
			validateToken: async () => {
				const url = process.env.BACKEND_URL + "/api/profile";
				const response = await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + localStorage.getItem("u_token")
					}
				});
				const info = await response.json();
				//console.log(info.user);
				console.log("Success:", info.token);
				localStorage.setItem("u_token", info.token);
				// sessionStorage.setItem("status", info.status); //Lo usamos para identificar si la sesion sigue activa
			},

			sendFavorites: async (name, typeFav) => {
				const url = process.env.BACKEND_URL + "/api/favorites";
				const response = await fetch(url, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + localStorage.getItem("u_token")
					},
					body: JSON.stringify({
						name: name,
						typeFav: typeFav
					})
				});
				const info = await response.json(); //Trae la respuesta de lo que me retorna el back end
				const actions = getActions();
				actions.getFavorites();
			},
			deleteFavorites: async favID => {
				const url = process.env.BACKEND_URL + "/api/favorites/" + favID;
				const response = await fetch(url, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + localStorage.getItem("u_token")
					}
				});
				const info = await response.json(); //Trae la respuesta de lo que me retorna el back end
				const favs = getStore().favorites;
				const favsArray = favs.filter(item => item.id !== favID);
				setStore({ favorites: [...favsArray] });
			},
			getFavorites: async () => {
				const url = process.env.BACKEND_URL + "/api/favorites";
				const response = await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + localStorage.getItem("u_token")
					}
				});
				const info = await response.json(); //Trae la respuesta de lo que me retorna el back end
				setStore({ favorites: info });
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
			},
			addFavorite: (name, type) => {
				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					const actions = getActions();
					actions.getFavorites();
				}
				const actions = getActions();
				actions.sendFavorites(name, type);
			},
			deleteFavorite: id => {
				//Este id es el id del Favorito
				const store = getStore();
				const newFavorites = store.favorites.filter(item => item.id !== id); //id del favorito con el id de cada favorito de mi lista
				setStore({ favorites: [...newFavorites] });
				const actions = getActions();
				actions.deleteFavorites(id);
			}
		}
	};
};

export default getState;
