from flask import Flask
from lib.utils.ext import db
from lib.ctrl.main import main

def create_app():
    app = Flask("hackathon")
    app.config.from_pyfile('config.cfg', silent=True)
    app.register_blueprint(main)
    db.init_app(app)
    with app.app_context():
        db.create_all()
    return app

app = create_app()

if __name__ == '__main__':
    app.run()