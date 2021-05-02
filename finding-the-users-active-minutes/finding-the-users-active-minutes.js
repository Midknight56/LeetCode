/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    const uam = {};
    const results = []
    for (let i = 0; i < logs.length; i++) {
        if (uam[logs[i][0]] == null) {
            uam[logs[i][0]] = new Set();
            uam[logs[i][0]].add(logs[i][1])
        } else {
            uam[logs[i][0]].add(logs[i][1])
        }
    }
    
    for (let i = 0; i < k; i++) {
        results.push(0);
    }
    
    Object.values(uam).forEach(value => {
        results[value.size - 1] += 1;
    })
    
    return results;
};