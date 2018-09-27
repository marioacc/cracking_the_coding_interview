The constraint becomes valuable way to solve the puzzle:

Let's say that we have 3 bottles, one heavy and the other two are not.
* If we put one pill from each bottle, we will have a total weight of 3.1, which hardly will tell us which bottle is the one with the heavy pills.
* However, if we use 1 pills from bottle #1, 2 pills from bottle #2, and 3 from bottle #3 we will be finishing with 3 possible results:
    - 3.1g: if the heavy pill is in bottle #1.
    - 3.2g: if the heavy pill is in bottle #2.
    - 3.3g: if the heavy pill is in bottle #3.
* Right now we created a relationship between the decimal portion of the total weight and the bottle #'s.
* Once having the total weight, we can get the bottle # with the heavy pills using the next equation: (weight - weightIfAllPillsWereOneGram)/0.1gram

E.x.:
- 19 bottles with 1g pills.
- 1 bottle with 1.1g pills.
- n pills per n bottle is put on the scale.
- total weight is: 219g (211.9-210)/.1
- The pill is in the bottle #: (211.9-210)/.1 = 19
