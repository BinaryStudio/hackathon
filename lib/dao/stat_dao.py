from lib.utils.ext import db
from lib.models.model import Stat

class StatDao(object):
    
    def find_by_parking_id(self, parking_id):
        stats = Stat.query.filter_by(parking_id=parking_id).all()
        return stats

    def create(self, parking_id, event):
        stat = Stat(parking_id, event)
        db.session.add(stat)
        db.session.commit()
        return stat