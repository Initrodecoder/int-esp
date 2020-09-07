const coinChange = (coins, amount) => {
    const dp = Array(amount+1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0
    for (let i=0;i<dp.length;i++) {
        for (let coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i-coin] + 1)
            }
        }
    }
    const minCoins = dp[amount]
    if (minCoins >= Number.MAX_SAFE_INTEGER) return -1
    return minCoins
}

const c = [1,2,5,10]
console.log(coinChange(c,11))