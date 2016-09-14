import bottle
from bottle import default_app, run, response
from paste import httpserver
from config import config

from api import app  # The Program Tracker APIs

HOST = '0.0.0.0'
PORT = 8081

bottle.debug(True if config['debug_mode'] == 'y' else False)
run(app, reloader=True, port=PORT)

# httpserver.serve(default_app(), host=HOST, port=PORT)
