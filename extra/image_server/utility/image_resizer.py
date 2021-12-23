from PIL import Image
from os import walk

original_folder = '../image/original/'
resized_folder = '../image/resized/'
width_size = 600

original_filenames = next(walk(original_folder), (None, None, []))[2]
resized_filenames = next(walk(resized_folder), (None, None, []))[2]
filenames = set(original_filenames).difference(resized_filenames)

for filename in filenames:
  actual_image = Image.open(original_folder + filename)

  width_percent = (width_size / float(actual_image.size[0]))
  height_size = int(float(actual_image.size[1]) * float(width_percent))

  resized_image = actual_image.resize((width_size, height_size), Image.ANTIALIAS)
  resized_image.save(resized_folder + filename)
  print('Resized Image: %s' % resized_folder + filename)
