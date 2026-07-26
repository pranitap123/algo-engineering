/**
 * Pattern: Arrays & Hashing
 *
 * Idea:
 * - Sort each word to create a common key.
 * - Use a HashMap where:
 *   Key   -> Sorted word
 *   Value -> Array of original words sharing that key
 *
 * Time Complexity:
 * Space Complexity:
 */

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();

    for (const word of strs) {
        const key = word.split("").sort().join("");

        if (map.has(key)) {
            map.get(key)!.push(word);
        } else {
            map.set(key, [word]);
        }
    }

    return Array.from(map.values());
}