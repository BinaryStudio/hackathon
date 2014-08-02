from flask.ext.restful import reqparse
from flask.ext.restful import Resource
from lib.dao.ava_dao import AvaDao
from lib.dao.basic_dao import BasicInfoDao
from common.resultutil import *


class SlotInc(Resource):
    """
    API Resource for Increasing the parking slot.
    """
    def get(self, parking_id):
        AvaDao().incn(parking_id, 1)
        return returnSucc(1)

    def post(self, parking_id):
        args = get_slot_args()
        AvaDao().incn(parking_id, args.number)
        return returnSucc(args.number)


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


def get_slot_args():
    parking_parser = reqparse.RequestParser()
    parking_parser.add_argument('number', type=int,
        help='The number of changed slots')
    return parking_parser.parse_args()




