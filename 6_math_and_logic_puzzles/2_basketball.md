## Game 1

- The probability of wining only one game is p

## Game 2

- The probability of wining game 2 is:
    - P(wining) = shoot(2,3) + shoot(3,3)
    - shoot(3,3) = p^3
    - shoot(2,3) = 3(p*p-(1-p)) = 3(1-p)p^2
    - Adding those: 
        - p^3 + 3(1-p)p^2 = p^3 + 3p^2 - 3p^3 = 3p^2 - 2p^3

    - Which game should be played?
        - p > 3p^2 - 2p^3 = p > p(3p - 2p^2); = 1 > 3p - 2p^2 = 2p^2 - 3p + 1 > 0 = (2p-1)(p-1)
        - Both terms must be positive, or both terms must be negative. But we know p < 1, so p - 1 < 0. This means both terms must be negative:
            - 2p - 1 < 0
            - 2p < 1
            - p < 0.5
    - So we must play game 1 if 0 < p < 0.5 and game 2 if 0.5 < p < 1

        
