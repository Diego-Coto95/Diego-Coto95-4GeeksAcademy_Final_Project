"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User, Comments, Favorites, Img_Movies, Img_Characters, Img_Locations
from api.utils import generate_sitemap, APIException
import datetime

## Nos permite hacer las encripciones de contraseñas
from werkzeug.security import generate_password_hash, check_password_hash

## Nos permite manejar tokens por authentication (usuarios) 
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity # se instala con pipenv install Flask-JWT-Extended



api = Blueprint('api', __name__)

# jwt = JWTManager(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


#################################################### Users #########################################################
@api.route('/user', methods=['GET'])
def get_users():
    users_query = User.query.all() #Query es una consulta # get all the favorites
    result = list(map(lambda x: x.serialize(), users_query)) # map the results and your list of people  inside of the all_people variable
    return jsonify(result), 200 

@api.route('/user/<int:id>', methods=['GET'])
def get_user_by_id(id):
    user = User.query.filter_by(id=id).first_or_404()
    return jsonify(user.serialize()), 200

@api.route('/user', methods=['POST'])
def add_user():
    request_body = json.loads(request.data) #Peticion de los datos, que se cargaran en formato json  // json.loads transcribe a lenguaje de python UTF-8
    if request_body["email"] == None:
        return "Datos incompletos, favor completar todos los datos!"
    else:
        user = User(name= request_body["name"], email= request_body["email"], password= request_body["password"])
        db.session.add(user)
        db.session.commit()
        return "Posteo Exitoso"

@api.route('/user/<int:id>', methods=['DELETE'])
def del_user_by_id(id):
    user = User.query.filter_by(id=id).first_or_404()
    db.session.delete(user)
    db.session.commit()
    return("User has been deleted successfully"), 200


################################################### REGISTER ##########################################################
@api.route('/register', methods=["POST"])
def register():
    if request.method == 'POST':
        name = request.json.get("name", None)
        email = request.json.get("email", None)
        password = request.json.get("password", None)

        #Valida que se ingrese un nuevo email y contraseña
        if not name:
            return jsonify({"msg": "name is required"}), 400
        if not email:
            return jsonify({"msg": "email is required"}), 400
        if not password:
            return jsonify({"msg": "Password is required"}), 400

        user = User.query.filter_by(email=email).first()
        if user:
            return jsonify({"msg": "Username already exists"}), 400

        user = User() # Crea un nuevo usuario 
        user.name = name # name que ingresa el usuario
        user.email = email # email que ingresa el usuario
        hashed_password = generate_password_hash(password) #Incripcion de la contraseña
        print(password, hashed_password)
        user.password = hashed_password # se le asigna al usuario el password que se acaba de generar
        db.session.add(user) # agrga al usuario a la DB
        db.session.commit()

        return jsonify({"success": "Thanks. your register was successfully", "status": "true"}), 200
