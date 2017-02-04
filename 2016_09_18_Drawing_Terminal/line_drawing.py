# builtin packages
from sys import stdout
from time import sleep

import random

#additional packages > install using pip install <NAMEOFPACKAGE>
from blessings import Terminal

interval = 0.001

term = Terminal()
width = term.width
height = term.height

#helper function
#credit due to Adam Luchjenbroers on StackOverflow <3
def map(value, leftMin, leftMax, rightMin, rightMax):
    # Figure out how 'wide' each range is
    leftSpan = leftMax - leftMin
    rightSpan = rightMax - rightMin

    # Convert the left range into a 0-1 range (float)
    valueScaled = float(value - leftMin) / float(leftSpan)

    # Convert the 0-1 range into a value in the right range.
    return rightMin + (valueScaled * rightSpan)


def line_drawing():
    while True:
        my_line = "-"
        for x in range(0, width-2):
            my_line += " "
        my_line += "-"
        sleep(0.1)
        print(term.on_color(random.randint(0, 15))+my_line)


try:
    line_drawing()
except KeyboardInterrupt:
    print(term.normal+"bye!")
