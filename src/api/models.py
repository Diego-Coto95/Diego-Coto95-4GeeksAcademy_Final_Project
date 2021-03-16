from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    comments = db.relationship("Comments", lazy=True)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
#########################################################################
#Comments
class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.String(250), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "comment": self.comment,
        }
#########################################################################
#Favorites
class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), unique=True, nullable=False)
    typeFav = db.Column(db.String(250), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "typeFav": self.typeFav,
            # do not serialize the password, its a security breach
        }
#########################################################################
#IMG_MOVIES
class Img_Movies(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(300), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
        }
#########################################################################
#IMG_CHARACTERS
class Img_Characters(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(300), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
        }
#########################################################################
#IMG_LOCATIONS
class Img_Locations(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(300), unique=False, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
        }