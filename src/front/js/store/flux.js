const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//se almacena la data que viene de la API
			films: [],
			characteres: [],
			locations: [],
			boolean: false
		},
		actions: {
			//Sale y cierra el token creado
			logout: () => {
				setStore({ boolean: false });
			},
			//POST del registro
			validateRegister: async (name, email, password) => {
				const url = "https://3001-apricot-wolf-6ddi7gtd.ws-us03.gitpod.io/api/register";
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
				alert(info.msg);
			},
			//POST del Login
			validateLogin: async (email, password) => {
				const url = "https://3001-apricot-wolf-6ddi7gtd.ws-us03.gitpod.io/api/login";
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
					sessionStorage.setItem("u_token", body.token);
					sessionStorage.setItem("status", body.status);
					setStore({ boolean: true });
				} else {
					alert(body.msg);
				}
			},
			//Crea el Token
			validateToken: async () => {
				const url = "https://3001-apricot-wolf-6ddi7gtd.ws-us03.gitpod.io/api/profile";
				const response = await fetch(url, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("u_token")
					}
				});
				const info = await response.json();
				//console.log(info);
				console.log("Success:", info.token);
				sessionStorage.setItem("u_token", info.token);
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
