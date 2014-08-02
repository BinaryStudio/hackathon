from flask import Blueprint, render_template

main = Blueprint('main', __name__)
ava_dao = AvaDao()

@main.route('/')
def index():
    return render_template('geolocation.html')
