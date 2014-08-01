from flask import Blueprint

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return 'main'

@main.route('/test')
def test():
    return 'test'
