import json

config_name = 'config.json'
try:
    print 'Trying to load config.json...'
    config_file = open(config_name, 'r')
    config = json.loads(config_file.read())
    config_file.close()
    print 'config.json loaded!'
except IOError:
    print 'config.json not found. Stopping..'
    sys.exit()
