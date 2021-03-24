"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User, Comments, Favorites
from api.utils import generate_sitemap, APIException
import datetime

## Nos permite hacer las encripciones de contraseñas
from werkzeug.security import generate_password_hash, check_password_hash

## Nos permite manejar tokens por authentication (usuarios) 
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity # se instala con pipenv install Flask-JWT-Extended

api = Blueprint('api', __name__)

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

        return jsonify({"success": "Thanks. your register was successfully", "status": "true"})
# ############################################## LOGIN ######################################################

@api.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.json.get("email", None) #Obtengo el email del usuario
        password = request.json.get("password", None) #Obtengo el pass del usuario

        #Se chequea que el email y el pass hayan sido ingresados
        if not email:
            return jsonify({"msg": "Username is required"}), 400
        if not password:
            return jsonify({"msg": "Password is required"}), 400

        #Se chequea que el usuario exista
        user = User.query.filter_by(email=email).first()
        if not user:
            return jsonify({"msg": "Username/Password are incorrect"}), 401

        if not check_password_hash(user.password, password):
            return jsonify({"msg": "Username/Password are incorrect"}), 401

        # crear el token
        expiracion = datetime.timedelta(days=3)
        access_token = create_access_token(identity=user.email, expires_delta=expiracion)

        data = {
            "user": user.serialize(),
            "token": access_token,
            "expires": expiracion.total_seconds()*1000,
            "status": True
        }

        return jsonify(data), 200

################################### PROFILE ####################################################

@api.route('/profile', methods=['GET'])
@jwt_required()# token que se ha enviado
def profile():
    if request.method == 'GET':
        token = get_jwt_identity()# Revisa con repecto al token que se le ha enviado
        return jsonify({"success": "Acceso a espacio privado", "usuario": token}), 200

# ############################################## Favorites ######################################################

@api.route('/favorites', methods=['POST'])
@jwt_required()# token que se ha enviado
def fav():
    if request.method == 'POST':
        name = request.json.get("name", None) #Obtengo el name del usuario
        typeFav = request.json.get("typeFav", None) #Obtengo el name del usuario

        email = get_jwt_identity()# Revisa con repecto al token que se le ha enviado
        user = User.query.filter_by(email=email).first() #Obtiene el primero
        allFavs = Favorites.query.filter_by(name=name, user_id=user.id).first()
        if allFavs != None:
            return jsonify({"msg": "Favorite already exist"}), 400
        else:
            favorite = Favorites(name=name,typeFav=typeFav, user_id=user.id)
            db.session.add(favorite) # agrga al usuario a la DB
            db.session.commit()

            return jsonify(favorite.serialize()), 200

# ############################################## DELETE Favorites ######################################################
@api.route("/favorites", methods=["GET"])
@jwt_required()
def get_favs():

    user = get_jwt_identity()
    user_email = User.query.filter_by(email=user).first() #Usuario
    user_Favorites = Favorites.query.filter_by(user_id=user_email.id).all()
    favortites_list = list(map(lambda favorites: favorites.serialize(), user_Favorites))

    return jsonify(favortites_list), 200

# ############################################## DELETE Favorites ######################################################

@api.route('/favorites/<int:favID>', methods=['DELETE'])
@jwt_required()# token que se ha enviado
def del_fav(favID):
    
    email = get_jwt_identity()# Revisa con repecto al token que se le ha enviado
    user = User.query.filter_by(email=email).first() #Usuario
    #fav = Favorites.query.get(fid).first()
    fav_to_delete = Favorites.query.filter_by(user_id=user.id, id= favID).first()
    db.session.delete(fav_to_delete)
    db.session.commit()

    return jsonify("Successful removed"), 200

# Reset Password
@api.route("/reset", methods=["POST"])
def reset_password():
    if request.method == "POST":

        new_password = request.json["password"]
        email = request.json["email"]
        #email = 'Diego@hotmail.com'
        # Validate
        if not (new_password):
            return jsonify({"error": "Invalid parameter"}), 400
        
        user = User.query.filter_by(email=email).first()

        if not user:
            return jsonify({"error": "Invalid parameter"}), 400
        
        # Create and set new password
        new_password_hashed = generate_password_hash(new_password)
        user.password = new_password_hashed
        db.session.commit()
        


        return jsonify({"status": True}), 200