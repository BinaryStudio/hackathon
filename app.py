import sys
from flask import Flask
from lib.utils.ext import db
from lib.ctrl.main import main

def create_app():
    app = Flask("parkplace")
    app.config.from_pyfile('config.' + sys.argv[1] + '.cfg', silent=True)
    app.register_blueprint(main)
    db.init_app(app)
    with app.app_context():
        db.create_all()
    return app

app = create_app()

if __name__ == '__main__':
    app.run(host=app.config['HOST'], port=app.config['PORT'])