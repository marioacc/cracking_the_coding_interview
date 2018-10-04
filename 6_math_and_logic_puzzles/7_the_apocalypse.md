Lets say every family can have one of the next sequences of sons
1. G
2. BG
3. BBG
4. BBBG
5. B...G

We are sure that every family will have a boy, however, how many boys in average they will have?!
The expected value of the number of boys is the probability of each sequence multiplied by the number of boys in that sequence

+----------+----------------+-------------+-----------------------------+
| Sequence | Number of Boys | Probability | Number of boys *Probability |
+----------+----------------+-------------+-----------------------------+
| G        |              0 | 1/2         | 0                           |
| BG       |              1 | 1/4         | 1/4                         |
| BBG      |              2 | 1/8         | 2/8                         |
| BBBG     |              3 | 1/16        | 3/16                        |
| BBBBG    |              4 | 1/32        | 4/32                        |
| BBBBBG   |              5 | 1/64        | 5/64                        |
| BBBBBBG  |              6 | 1/128       | 6/128                       |
+----------+----------------+-------------+-----------------------------+

This can also be expreses by the sum of i to infinity of i divided by 2:
- ∑ from i=0 to i=infinity = i/(2^(i+1))

if we sum all the 'Number of boys *Probabilities', we can see the number is 120/128 ~ 1. it means that the ratio between boys and girls will be almost even!It looks like the policy does not favor the girls over the boys!
The boy and the girl has the same possibility to be born, no matter if the rules now say that you have to have kids until one of them is a girl!

The gender ratio will always remain 50% girls and 50% boys!


