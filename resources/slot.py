from flask.ext.restful import Resource
from flask.ext.restful import reqparse
from lib.dao.basic_dao import BasicInfoDao


class IncSlot(Resource):
    """
    API  Resource for the parking.
    """
    def get(self, parking_id):
        #TODO
        return {parking_id: parking_id}

    def post(self, parking_id):
        #TODO
        args = get_parking_args()
        return {'args': str(dict(args))}


class DesSlot(Resource):
    """
    API  Resource for the parking.
    """
    def get(self, parking_id):
        #TODO
        return {parking_id: parking_id}

    def post(self, parking_id):
        #TODO
        args = get_parking_args()
        return {'args': str(dict(args))}

