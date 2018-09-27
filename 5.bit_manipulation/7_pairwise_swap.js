function swapPairs(n) {
    const evenMask = 0xaaaaaaaa;
    const oddMask = 0x55555555;
    return ((n & evenMask) >>> 1) | ((n & oddMask) << 1);
}

module.exports = swapPairs;