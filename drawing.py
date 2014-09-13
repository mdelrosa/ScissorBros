# drawing.py
# Python dictionary listing nodes in drawing for PennApps Calligracopter

import math
import numpy

class Drawing(object):

	def __init__(self, inLetters, widthScale, heightScale):
		""" initialize nodes in Drawing based on nodes in component Letters """
		self.letters = []
		self.vectors = []

		""" Get letters in 2D array"""
		if len(inLetters) == 1:
			self.letters.append(inLetters)
		else:
			for letter in inLetters:
				self.letters.append(letter.nodes)

		""" Vector definitions """

		for letter in inLetters:
			for nodes in letter.nodes:
				"""
				y = heightScale*(next/3 - current/3)
				x = widthScale*(next%3 - current%3)
				mag = (x**2 + y**2)**0.5
				theta = atan2(y/x)
				self.vectors.append((x,y,theta))
				"""
			"""
			y = heightScale
			self.vectors.append()
			"""

class Letter(object):
	"""
	Nodes composing a letter:
			0 1 2
			3 4 5
			6 7 8
	"""

	def __init__(self, inNodes):
		self.nodes = inNodes

def main():
    letterH = Letter([0,6,3,4,5,2,8])
    letterE = Letter([0,2,0,3,5,3,6,8])
    drawing = Drawing([letterH,letterE])

    print letterH.nodes
    print drawing.letters


if __name__ == '__main__':
    main()
