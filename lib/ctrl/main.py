from flask import Blueprint, render_template
from lib.dao.ava_dao import AvaDao

main = Blueprint('main', __name__)
ava_dao = AvaDao()

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/ava/<id>/inc')
def ava_inc(id):
    ava_dao.inc(id)
    return 'OK'

@main.route('/ava/<id>/dec')
def ava_dec(id):
    ava_dao.dec(id)
    return 'OK'