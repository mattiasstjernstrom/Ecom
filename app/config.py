from app import app
import os

app.default_config = os.getenv("DEVELOPMENT")
app.secret_key = os.getenv("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = os.getenv(
    "SQLALCHEMY_TRACK_MODIFICATIONS"
)
username = os.environ.get("USERNAME")
password = os.environ.get("PASSWORD")
app.config.explain_template_loading = os.getenv("EXPLAIN_TEMPLATE_LOADING")
