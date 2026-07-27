# 347. Top K Frequent Elements

## Problem

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.

Example:

```text
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

---

# Approach (Brute Force)

## Step 1: Count Frequencies

Use a `Map<number, number>` to store how many times each number appears.

Example:

```text
nums = [1,1,1,2,2,3]

Map
1 -> 3
2 -> 2
3 -> 1
```

Time: **O(n)**

---

## Step 2: Convert Map to Array

Convert the map into an array of key-value pairs.

```ts
const arr = Array.from(map.entries());
```

Result:

```text
[
  [1,3],
  [2,2],
  [3,1]
]
```

Each element represents:

```text
[number, frequency]
```

---

## Step 3: Sort by Frequency

Sort the array in descending order of frequency.

```ts
arr.sort((a, b) => b[1] - a[1]);
```

After sorting:

```text
[
  [1,3],
  [2,2],
  [3,1]
]
```

---

## Step 4: Take Top K Elements

Take the first `k` elements.

```ts
const top = arr.slice(0, k);
```

Example (`k = 2`):

```text
[
  [1,3],
  [2,2]
]
```

---

## Step 5: Extract Only Numbers

Return only the numbers.

```ts
return top.map(item => item[0]);
```

Result:

```text
[1,2]
```

---

# Complexity

## Time Complexity

Building frequency map:
```
O(n)
```

Convert map to array:
```
O(m)
```

Sort:
```
O(m log m)
```

Take first k:
```
O(k)
```

Extract numbers:
```
O(k)
```

Overall:

```
O(n + m log m)
```

Worst case (`m = n`):

```
O(n log n)
```

---

## Space Complexity

```
O(m)
```

where `m` is the number of unique elements.

---

# Key Concepts Learned

- `Map` for frequency counting
- `map.has()`
- `map.get()`
- `map.set()`
- `Array.from(map.entries())`
- `Array.sort()`
- Descending sort using:
  ```ts
  b[1] - a[1]
  ```
- `slice()` to take the first `k` elements
- `map()` to transform arrays

---

# Common Mistakes

### 1. Storing the number instead of frequency

❌

```ts
map.set(num, num);
```

✅

```ts
map.set(num, 1);
```

---

### 2. Forgetting to update the frequency

❌

```ts
map.get(num)!;
```

✅

```ts
map.set(num, map.get(num)! + 1);
```

---

### 3. Forgetting to return inside sort

❌

```ts
arr.sort((a, b) => {
    b[1] - a[1];
});
```

✅

```ts
arr.sort((a, b) => {
    return b[1] - a[1];
});
```

or simply

```ts
arr.sort((a, b) => b[1] - a[1]);
```

---

# Follow-up

The brute-force approach uses sorting, resulting in **O(n log n)** time in the worst case.

The optimal solution uses **Bucket Sort**, achieving:

- Time: **O(n)**
- Space: **O(n)**

This is the recommended approach for interview follow-up questions.