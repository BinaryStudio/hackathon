from flask import Blueprint
from lib.dao.basic_dao import BasicInfoDao
from lib.models.model import BasicInfo

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return 'main'

@main.route('/test')
def test():
    return test