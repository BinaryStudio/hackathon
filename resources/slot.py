from flask.ext.restful import Resource
from lib.dao.ava_dao import AvaDao
from lib.dao.basic_dao import BasicInfoDao
from common.resultutil import *


class SlotInc(Resource):
    """
    API Resource for Increasing the parking slot.
    """
    def get(self, parking_id):
        AvaDao().inc(parking_id)
        return returnSucc(1)

    def post(self, parking_id):
        parking = BasicInfoDao().find_by_id(parking_id)
        AvaDao().create(parking_id, parking.total_pak)
        return returnSucc(1)


class SlotDes(Resource):
    """
    API  Resource for Decreasing the parking slot.
    """
    def get(self, parking_id):
        AvaDao().dec(parking_id)
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





