# 217. Contains Duplicate

## Problem

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and `false` if every element is distinct.

Example:

```text
Input: nums = [1,2,3,1]
Output: true
```

```text
Input: nums = [1,2,3,4]
Output: false
```

---

# Approach

## Using a Set

A `Set` stores only unique values.

As we iterate through the array:

- If the number is already in the set, we've found a duplicate.
- Otherwise, add it to the set.

---

## Algorithm

1. Create an empty `Set`.
2. Traverse the array.
3. If the current number exists in the set, return `true`.
4. Otherwise, add the number to the set.
5. If the loop finishes, return `false`.

---

## Code

```ts
function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>();

    for (const num of nums) {
        if (set.has(num)) {
            return true;
        }

        set.add(num);
    }

    return false;
}
```

---

# Dry Run

Input:

```text
nums = [1,2,3,1]
```

Iteration:

```text
Set = {}

Read 1
Set = {1}

Read 2
Set = {1,2}

Read 3
Set = {1,2,3}

Read 1
Already exists
Return true
```

---

# Complexity

## Time Complexity

```
O(n)
```

Each lookup and insertion into a `Set` takes approximately **O(1)**.

---

## Space Complexity

```
O(n)
```

In the worst case, every element is unique and stored in the set.

---

# Key Concepts Learned

- `Set`
- `set.has()`
- `set.add()`
- Early return
- Hashing for efficient lookup

---

# Common Mistakes

### 1. Using an Array

Searching an array takes **O(n)**.

Using a `Set` provides approximately **O(1)** lookup.

---

### 2. Adding Before Checking

❌

```ts
set.add(num);

if (set.has(num)) {
    return true;
}
```

This always returns `true` because the element was just added.

✅

```ts
if (set.has(num)) {
    return true;
}

set.add(num);
```

---

# Alternative Approach

Sort the array first and compare adjacent elements.

Time:

```
O(n log n)
```

Space:

```
O(1)
```

(using in-place sorting)

However, the `Set` solution is simpler and more efficient.