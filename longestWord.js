function longestWord(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;
    let longest = '';

    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord('The quick brown fox jumped over the lazy dog')); 
