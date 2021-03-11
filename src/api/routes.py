"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

################################################### REGISTER ##########################################################
@api.route('/register', methods=["POST"])
def register():
    if request.method == 'POST':
        email = request.json.get("email", None)
        password = request.json.get("password", None)

        #Valida que se ingrese un nuevo email y contraseña
        if not email:
            return jsonify({"msg": "email is required"}), 400
        if not password:
            return jsonify({"msg": "Password is required"}), 400

        user = User.query.filter_by(email=email).first()
        if user:
            return jsonify({"msg": "Username already exists"}), 400

        user = User() # Crea un nuevo usuario 
        user.email = email # email que ingresa el usuario
        hashed_password = generate_password_hash(password) #Incripcion de la contraseña
        print(password, hashed_password)
        user.password = hashed_password # se le asigna al usuario el password que se acaba de generar
        db.session.add(user) # agrga al usuario a la DB
        db.session.commit()

        return jsonify({"success": "Thanks. your register was successfully", "status": "true"}), 200
