from lib.utils.ext import db

class Price(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    hour = db.Column(db.Float)
    day = db.Column(db.Float)

    def __init__(self, hour, day):
        self.hour = hour
        self.day = day

class BasicInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80))
    uid = db.Column(db.String(40))
    total_pak = db.Column(db.Integer)
    info = db.Column(db.Text)

    def __init__(self, name, uid, total_pak, info):
        self.name = name
        self.uid = uid
        self.total_pak = total_pak
        self.info = info