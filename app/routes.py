from .site_settings import *
from app import config

from flask import render_template


@app.route("/")
def index():
    context = {"title": "Home", "description": "This is the home page"}
    return render_template("index.html", context=context)


@app.errorhandler(404)
def errorhandler(error):
    return "404 - File not found"
