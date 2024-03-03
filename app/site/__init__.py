from flask import Blueprint, render_template

site = Blueprint("site", __name__)


@site.route("/")
def index():
    context = {"title": "Home", "description": "This is the home page"}
    return render_template("index.html", context=context)
