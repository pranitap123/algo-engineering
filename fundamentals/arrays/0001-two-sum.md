# 0001. Two Sum

## Problem

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to the target.

Each input has exactly one solution, and the same element cannot be used twice.

---

## Example

Input:

nums = [2,7,11,15]
target = 9

Output:

[0,1]

Explanation:

nums[0] + nums[1] = 2 + 7 = 9

---

# Brute Force

## Idea

Try every possible pair.

```
for every i
    for every j > i
        if nums[i] + nums[j] == target
            return indices
```

### Time Complexity

O(n²)

### Space Complexity

O(1)

### Why not ideal?

Every element is compared with almost every other element.

For large arrays this becomes very slow.

---

# Optimal Approach

## Pattern

HashMap (Lookup Table)

---

## Core Idea

Instead of searching the entire array for the second number...

Calculate the number we need.

```
needed = target - current
```

Ask:

> Have we already seen this number?

If yes

→ return its index immediately.

Otherwise

→ remember the current number.

---

## Algorithm

For each element:

1. Calculate the complement.

```
needed = target - current
```

2. Check if it already exists in the HashMap.

3. If found

Return

```
[storedIndex, currentIndex]
```

4. Otherwise

Store

```
currentValue -> currentIndex
```

---

## Dry Run

nums = [2,7,11,15]

target = 9

Initially

Map = {}

---

i = 0

current = 2

needed = 7

Map contains 7?

No

Store

```
2 → 0
```

Map

```
{
2 : 0
}
```

---

i = 1

current = 7

needed = 2

Map contains 2?

Yes

Return

```
[0,1]
```

Done.

---

# Why check first and store later?

Correct

```
check

↓

store
```

Wrong

```
store

↓

check
```

If target = 10

nums = [5,5]

Storing first may accidentally match the same element.

Checking first guarantees we only pair with previously seen elements.

---

# Why HashMap?

HashMap lookup is approximately O(1).

Instead of searching the array every time

O(n)

we directly jump to the answer.

This reduces

O(n²)

↓

O(n)

---

# Complexity

Time

O(n)

Space

O(n)

---

# Pattern Learned

HashMap

The moment you need to answer

> "Have I seen this value before?"

think HashMap.

---

# Interview Questions

### Why is the solution O(n)?

Because every element is processed once and HashMap lookup is O(1) on average.

---

### Why store value → index instead of index → value?

We search by value.

The index is the information we need after finding it.

---

### Why check before inserting?

To avoid matching the same element with itself.

---

### Why not sort first?

Sorting changes the original indices.

The problem asks for original positions.

Sorting also increases complexity.

---

### What data structure is used?

HashMap.

---

# Real-world Analogy

Imagine you're buying groceries.

Target budget = ₹100.

Current item costs ₹35.

Instead of checking every previous receipt manually,

you ask:

> "Have I already bought something worth ₹65?"

The HashMap is your instant lookup notebook.

---

# Key Takeaways

- First HashMap problem.
- Learn the "complement" idea.
- Compute needed value instead of searching randomly.
- Check before inserting.
- HashMap converts nested loops into constant-time lookups.
- This pattern appears in many interview problems.