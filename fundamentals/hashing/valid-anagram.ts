/**
 * LeetCode 242. Valid Anagram
 *
 * Problem:
 * Given two strings s and t, return true if t is an anagram of s,
 * otherwise return false.
 *
 * Approach:
 * 1. If lengths differ, return false.
 * 2. Count the frequency of each character in s using a Map.
 * 3. Traverse t and decrease the frequency.
 * 4. If a character doesn't exist or its count becomes negative,
 *    return false.
 * 5. If traversal completes, return true.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const freq = new Map<string, number>();

    // Count characters in s
    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (freq.has(ch)) {
            freq.set(ch, freq.get(ch)! + 1);
        } else {
            freq.set(ch, 1);
        }
    }

    // Decrease counts using t
    for (let i = 0; i < t.length; i++) {
        const ch = t[i];

        if (!freq.has(ch)) {
            return false;
        }

        freq.set(ch, freq.get(ch)! - 1);

        if (freq.get(ch)! < 0) {
            return false;
        }
    }

    return true;
}

// Example Test Cases
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "aa")); // false
console.log(isAnagram("listen", "silent")); // true