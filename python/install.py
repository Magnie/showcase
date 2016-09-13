import json
config_name = 'config.json'

def enter_option(title, default=''):
    "To simplify setting an option with an already provided value."
    if default:
        message = '{0} ({1}): '.format(title, default)
    else:
        message = '{0}: '.format(title)
    
    option = None
    while not option:
        option = raw_input(message)
        if default and not option:
            return default
    
    return option

def main():
    try:
        print 'Trying to load config.json...'
        config_file = open(config_name, 'r')
        config = json.loads(config_file.read())
        config_file.close()
        print 'config.json loaded!'
    except IOError:
        print 'config.json not found. Using blank format.'
        config = {}
    
    config['admin_email'] = enter_option('Email', config.get('admin_email', ''))
    
    saved = False
    
    while not saved:
        try:
            config_file = open(config_name, 'w')
            config_file.write(json.dumps(config))
            config_file.close()
            saved = True
        except IOError, e:
            print 'Unable to save config file.. {0}'.format(e)
            raw_input('Hit any button to try again..')
    
    print "Setup is complete!"
    
if __name__ == '__main__':
    main()
