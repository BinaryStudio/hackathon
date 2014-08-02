import sys
from flask import Flask
from flask.ext.restful import Api
from resources.parking import Parking, Parkings
from resources.slot import SlotInc

from lib.utils.ext import db


def create_app():
    app = Flask('parkplaceapi')
    app.config.from_pyfile('api.config.' + sys.argv[1] + '.cfg', silent=True)

    db.init_app(app)
    with app.app_context():
        db.create_all()

    api = Api(app)
    api.add_resource(Parking, '/parkings/<string:parking_id>')
    api.add_resource(Parkings, '/parkings')
    api.add_resource(SlotInc, '/slot/<string:parking_id>')

    return app

app = create_app()

if __name__ == '__main__':
    app.run(host=app.config['HOST'], port=app.config['PORT'])
