# Contains Duplicate

## Problem

Given an integer array `nums`, return `true` if any value appears at least twice in the array, otherwise return `false`.

---

## Brute Force

Compare every element with every other element.

### Time Complexity

O(n²)

### Space Complexity

O(1)

---

## Optimal Approach

Use a `Set` to store numbers that have already been seen.

For every number:

1. Check whether it already exists in the `Set`.
2. If yes, return `true`.
3. Otherwise, add it to the `Set`.
4. If the loop finishes, return `false`.

---

## Why Set?

A `Set` stores only unique values.

It provides:

- `has()` → O(1)
- `add()` → O(1)

This allows duplicate detection in a single traversal.

---

## Algorithm

1. Create an empty `Set`.
2. Traverse the array.
3. If the current number already exists in the `Set`, return `true`.
4. Otherwise, add the number to the `Set`.
5. Return `false` after the loop completes.

---

## Complexity

Time: **O(n)**

Space: **O(n)**

---

## Key Learning

- Use a `Set` when only unique values need to be stored.
- `Set` is preferred over an array because membership checking is O(1), while an array requires O(n) search.
- `return false` should come **after** the loop because we must examine every element before concluding there are no duplicates.