# Hashing

Hashing enables fast lookup, insertion, and deletion by storing data using a key.

---

# When to Use Hashing

Use hashing when you need to:

- Count frequencies
- Check existence
- Find duplicates
- Store key-value pairs
- Perform constant-time lookup

Average Time Complexity:

| Operation | Complexity |
| ---------- | ---------- |
| Insert     | O(1) |
| Search     | O(1) |
| Delete     | O(1) |

---

# Map vs Set

## Map

Stores key-value pairs.

Example:

```ts
const map = new Map<string, number>();

map.set("a", 1);
map.set("b", 2);

console.log(map.get("a")); // 1
```

Use Map when:

- Counting frequencies
- Storing indices
- Key → Value relationships

Examples:

- Two Sum
- Valid Anagram
- Group Anagrams
- Top K Frequent Elements

---

## Set

Stores only unique values.

Example:

```ts
const set = new Set<number>();

set.add(1);
set.add(2);
```

Use Set when:

- Checking duplicates
- Fast existence lookup
- Removing duplicates

Examples:

- Contains Duplicate
- Happy Number

---

# Common Map Methods

```ts
map.set(key, value);
```

Insert or update a key.

---

```ts
map.get(key);
```

Returns the value associated with the key.

---

```ts
map.has(key);
```

Returns true if the key exists.

---

```ts
map.delete(key);
```

Removes a key.

---

```ts
map.clear();
```

Removes all entries.

---

# Common Set Methods

```ts
set.add(value);
```

Add a value.

---

```ts
set.has(value);
```

Check if a value exists.

---

```ts
set.delete(value);
```

Remove a value.

---

# Pattern Recognition

| Problem | Data Structure |
| -------- | -------------- |
| Two Sum | Map<number, index> |
| Contains Duplicate | Set |
| Valid Anagram | Map<string, count> |
| Group Anagrams | Map<string, string[]> |

---

# Valid Anagram

Approach:

1. Check string lengths.
2. Count character frequencies using a Map.
3. Traverse the second string and decrease counts.
4. Return false if:
   - Character doesn't exist
   - Count becomes negative
5. Otherwise return true.

Time Complexity: O(n)

Space Complexity: O(n)

---

# Key Takeaways

- Use Map for frequencies.
- Use Set for uniqueness.
- Hashing provides O(1) average lookup.
- Always identify whether you need:
  - Index
  - Count
  - Existence

Choosing the correct data structure often makes the problem much simpler.