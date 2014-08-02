from flask import Flask, request
from flask.ext.restful import Resource, Api
from resources.parking import Parking, Parkings
from lib.utils.ext import db

app = Flask('parkplaceapi')
api = Api(app)
db.init_app(app)
with app.app_context():
    db.create_all()

api.add_resource(Parking, '/parkings/<string:parking_id>')
api.add_resource(Parkings, '/parkings')

if __name__ == '__main__':
    app.run(debug=True)