from lib.utils.ext import db
from lib.models.model import Price

class PriceDao(object):
    
    def find_by_id(self, id):
        price = Price.query.filter_by(id=id).first()
        return price

    def find_by_parking_id(self, parking_id):
        price = Price.query.filter_by(parking_id=parking_id).first()
        return price

    def find_all(self):
        return Price.query.all()

    def update(self, price):
        _price = self.find_by_id(price.id)
        _price.parking_id = price.parking_id
        _price.day = price.day
        _price.hour = price.hour

        db.session.save()
        return price

    def delete(self, id):
        price = self.find_by_id(id)
        db.session.delete(price)
        db.session.commit()

    def create(self, parking_id, hour, day):
        price = Price(parking_id, hour, day)
        db.session.add(price)
        db.session.commit()
        return price