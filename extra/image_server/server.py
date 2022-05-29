import flask
import json

with open('config.json', 'r') as json_file:
  file_data = json_file.read()
  config = json.loads(file_data)

_IMAGE_FOLDER_ORIGINAL = config['path']['list']['original']
_IMAGE_FOLDER_RESIZED = config['path']['list']['resized']
_IMAGE_FOLDER = _IMAGE_FOLDER_ORIGINAL if config['path']['use'] == 'original' else _IMAGE_FOLDER_RESIZED

app = flask.Flask(__name__)
app.config["DEBUG"] = False

@app.route('/', methods=['GET'])
def home():
  return 'ECommerce Website - Image Server'

@app.route('/images/<string:filename>', methods=['GET'])
def image(filename):
  filepath = _IMAGE_FOLDER + filename + '.jpg'

  return flask.send_file(filepath, mimetype='image/jpeg', as_attachment=True, download_name=filename)

@app.route('/images/hd/<string:filename>', methods=['GET'])
def original_image(filename):
  filepath = _IMAGE_FOLDER_ORIGINAL + filename + '.jpg'

  return flask.send_file(filepath, mimetype='image/jpeg')

app.run(port=config["port"], threaded=True)
