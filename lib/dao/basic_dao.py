from lib.utils.ext import db
from lib.models.model import BasicInfo

class BasicInfoDao(object):
    
    def find_by_id(self, id):
        basic_info = BasicInfo.query.filter_by(id=id).first()
        return basic_info

    def update(self, basic_info):
        _basic_info = self.find_by_id(basic_info.id)
        _basic_info.name = basic_info.name
        _basic_info.uid = basic_info.uid
        _basic_info.total_pak = basic_info.total_pak
        _basic_info.info = basic_info.info
        db.session.save()

    def delete(self, id):
        basic_info = self.find_by_id(id)
        db.session.delete(basic_info)
        db.session.commit()

    def create(self, basic_info):
        db.session.add(basic_info)
        db.session.commit()

    def create_via_dict(self, json_dict):
        basic_info = BasicInfo(json_dict)
        self.create(basic_info)
        return basic_info