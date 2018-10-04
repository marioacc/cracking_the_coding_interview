## Approach
We want to know the miminum times we can let bot eggs fall.
- At first we can try to drop them from the 10th, 20th,..., 100th
    - If egg 1 breaks at floor 10, we will haave 10 drops at most.
    - If egg 1 breaks at floor 100, we have at most 19 drops total.

- However we need to balance the system, and a balances system is one were no matter from which floor you drop the Egg 1, the drops of _egg 1 + egg 2_ will be the same.
- This can be achieved by:
    -   Every time egg 1 drops one, egg 2 is allowed to do just one drop less.
- So we can start dropping egg 1 at floor x, and after that at floor x-1,...,1 until we reach the floor 100
- This can be expressed in the next way
    -  x+(x-1)+(x-2)+...+1=1+...+x= x(x+1)/2 _"gaussian formula"_
    - x(x+1)/2 = 100
    - x = 13.65

However, we cannot drop egg from floor 13.65 (daaaah), we have to decide if we round up the floor or round it down
- Round Up: we would start with 14, then 13, then 12 and so on. At some moment we will reach floor 100 using an incremente of 4.
    -   If eggs does not breaks at floor 99, we will only have to check one more time, which will sum a total of about 11 drops, however if the egg drops earlier, it will sum a total of 14 drops.
- Round down: the last increment will happen at floor 91 and it will be an increment of 1, so floors from 92 to 100 will not be covered yet, and those cannot be covered in one drop.
So the correct approach in this scenario will be to drop the egg starting from the 14 floor.
If this logic wanted to be generalized, the this that needs tho be done is just:
-   x(x+1)/2 = 100 *changed it to* x(x+1)/2 = _number of floors_