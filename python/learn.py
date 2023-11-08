def rec_coins(goal, coins, s, i):
    if goal == 0:
        print(s)
        return
    if goal < 0:
        return
    rec_coins(goal - coins[i], coins, s + str(coins[i]), i)
    if i + 1 < len(coins):
        rec_coins(goal, coins, s, i + 1)





goal = 7
coins = [5, 2, 1]
s = ""
rec_coins(goal, coins, s, 0)