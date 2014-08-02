from flask import Flask, request
from flask.ext.restful import Resource, Api
from resources.parking import Parking, Parkings

app = Flask(__name__)
api = Api(app)

api.add_resource(Parking, '/parkings/<string:parking_id>')
api.add_resource(Parkings, '/parkings')

if __name__ == '__main__':
    app.run(debug=True)