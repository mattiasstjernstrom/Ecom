from flask import Flask
from app.admin import admin
from app.site import site
from app.settings import settings

app = Flask(__name__)
app.register_blueprint(site, url_prefix="/")
app.register_blueprint(admin, url_prefix="/admin")


@app.context_processor
def context_processor():
    return dict(**settings)


@app.errorhandler(404)
def errorhandler(error):
    return "404 - File not found"
