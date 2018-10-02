Since each ant can move in only to directions:
- Clockwise: 1/2
- Counter Clockwise: 1/2
We have the next relationships:
- P(clockwise): 1/2 * 1/2 * 1/2 = (1/2)^3
- P(counter lockwise): 1/2 * 1/2 * 1/2 = (1/2)^3
- P(same direction) = (1/2)^3 + (1/2)^3 = 1/4
- P(collision) = 1 - P(same direction) = 3/4

To generalize, if even if we have a n-vertex polygon, there are only two ways they can move to avoid collision but there are 2^n ways they can move in total.
- P(clockwise): (1/2)^n
- P(counter lockwise): (1/2)^n
- P(same direction): 2(1/2)^n = (1/2)^(n-1)
- P(collision): 1 - P(same direction) = 1 - (1/2)^(n-1)