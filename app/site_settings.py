"""
Return a dictionary of variables to be injected into the context of all
templates. This is useful for injecting site-wide data, like the site
name and description.

Returns:
_type_: _context_
"""
from app import app

settings = {
    "site": {
        "name": "Stjernshop",
        "url": "https://stjernshop.se/",
        "description": "Stjernshop.se exampletext for a shop site",
    },
    "theme": "light",
}


@app.context_processor
def context_processor():
    return dict(settings=settings)
