# Group Anagrams

## Problem

Given an array of strings, group the anagrams together.

### Example

Input:

```ts
["eat", "tea", "tan", "ate", "nat", "bat"]
```

Output:

```ts
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
```

---

# Intuition

Anagrams contain the same characters with the same frequency.

If we sort every word alphabetically, all anagrams will produce the same string.

Example:

```
eat -> aet
tea -> aet
ate -> aet
```

Since all produce `"aet"`, they belong to the same group.

---

# Approach

1. Create a `Map<string, string[]>`.
2. Iterate through every word.
3. Sort the word to create a unique key.
4. If the key already exists, append the word to its array.
5. Otherwise, create a new array with the word.
6. Return all grouped arrays using `Array.from(map.values())`.

---

# Why Hash Map?

A hash map allows us to:

- Quickly check whether a group already exists.
- Store all words belonging to the same sorted key.
- Perform lookup in constant average time.

Structure:

```
"aet" -> ["eat", "tea", "ate"]
"ant" -> ["tan", "nat"]
"abt" -> ["bat"]
```

---

# Important Concepts

## `split("")`

Converts a string into an array of characters.

```ts
"eat".split("");
```

Output:

```ts
["e", "a", "t"]
```

---

## `sort()`

Sorts characters alphabetically.

```ts
["e", "a", "t"].sort();
```

Output:

```ts
["a", "e", "t"]
```

---

## `join("")`

Combines characters back into a string.

```ts
["a", "e", "t"].join("");
```

Output:

```ts
"aet"
```

---

## `map.has(key)`

Checks whether the sorted key already exists.

Returns:

- `true`
- `false`

---

## `map.get(key)`

Returns the array associated with the key.

Example:

```ts
"aet" -> ["eat", "tea"]
```

`map.get("aet")` returns:

```ts
["eat", "tea"]
```

---

## `!` (Non-null Assertion)

```ts
map.get(key)!.push(word);
```

`map.get()` can return `undefined`.

Since we already checked:

```ts
map.has(key)
```

we know the key exists.

The `!` tells TypeScript:

> "Trust me, this value is not undefined."

---

## `Array.from(map.values())`

`map.values()` returns an iterator, not an array.

`Array.from()` converts it into a `string[][]`.

Example:

```
Map
│
├── "aet" -> ["eat", "tea", "ate"]
├── "ant" -> ["tan", "nat"]
└── "abt" -> ["bat"]
```

Return:

```ts
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
```

---

# Complexity

### Time Complexity

Sorting each word costs:

```
O(K log K)
```

where **K = length of the word**.

For **N** words:

```
O(N × K log K)
```

---

### Space Complexity

Hash map stores every word once.

```
O(N × K)
```

---

# Key Takeaways

- Sort each word to create a unique key.
- Every anagram has the same sorted key.
- Use a `Map` for efficient grouping.
- `has()` checks existence.
- `get()` retrieves the array.
- `set()` creates a new group.
- `push()` adds a word to an existing group.
- `Array.from(map.values())` converts the map's values into the required return type.