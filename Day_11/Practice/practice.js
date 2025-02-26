function mostFrequentElement(arr) {
    const frequencyMap = {};
    let maxCount = 0;
    let mostFrequent;

    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequent = num;
        }
    }
    return mostFrequent;
}

console.log(mostFrequentElement([1, 3, 2, 3, 4, 1, 3, 2, 3, 5]));