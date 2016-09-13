import bottle
from bottle import default_app, run, response
from paste import httpserver

from api import *  # The Program Tracker APIs

HOST = '0.0.0.0'
PORT = 8081

bottle.debug(True)
run(reloader=True, port=PORT)

# httpserver.serve(default_app(), host=HOST, port=PORT)
