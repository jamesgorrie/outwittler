import webapp2
import jinja2
import os

from google.appengine.ext import db

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__) + '/templates'))

class Index(webapp2.RequestHandler):
    def get(self):
        template_values = {}
        template = jinja_environment.get_template('index.html')
        self.response.out.write(template.render(template_values))
        pass

app = webapp2.WSGIApplication([
        ('/', Index)
    ],
    debug=True)