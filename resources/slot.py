from flask.ext.restful import Resource
from flask.ext.restful import reqparse
from lib.dao.basic_dao import BasicInfoDao


class IncSlot(Resource):
    """
    API Resource for Increasing the parking slot.
    """
    def get(self, parking_id):
        #TODO
        return {parking_id: parking_id}

    def post(self, parking_id):
        return {'args': str(dict(args))}


class DesSlot(Resource):
    """
    API  Resource for Decreasing the parking slot.
    """
    def get(self, parking_id):
        #TODO
        return {parking_id: parking_id}

    def post(self, parking_id):
        #TODO
        args = get_parking_args()
        return {'args': str(dict(args))}


class UpdateSlot(Resource):
    """
    API Resource for update the parking slot.
    """
    def put(self):
        #TODO
        pass

    def patch(self):
        #TODO
        pass





