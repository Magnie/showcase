from bottle import Bottle, request, response, route
import bottle
import sys

# Import smtplib for the actual sending function
import smtplib

# Import the email modules we'll need
from email.mime.text import MIMEText

# import pymongo
# from pymongo import MongoClient
# from pymongo import DESCENDING
# client = MongoClient()
# db_name = 'showcase'
# database = client[db_name]

from config import config

app = Bottle()

def enable_cors(fn):
    def _enable_cors(*args, **kwargs):
        # set CORS headers
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

        if bottle.request.method != 'OPTIONS':
            # actual request; reply with the actual response
            return fn(*args, **kwargs)

    return _enable_cors

# Send Email via Contact Page
@app.route('/api/send/email', method=['OPTIONS', 'POST'])
@enable_cors
def send_email():
    data = request.json
    
    email_sent = False
    if data.get('body') and data.get('from') and data.get('subject'):
        # Create a text/plain message
        msg = MIMEText(data['body'])

        # me == the sender's email address
        # you == the recipient's email address
        msg['Subject'] = data['subject']
        msg['From'] = data['from']
        msg['To'] = config['admin_email']

        # Send the message via our own SMTP server, but don't include the
        # envelope header.
        s = smtplib.SMTP('localhost')
        s.sendmail(data['from'], [config['admin_email']], msg.as_string())
        s.quit()
        
        email_sent = True
    
    response.headers['Content-Type'] = 'application/json'
    redata = {
        'sent': email_sent,
    }
    return json.dumps(redata)
