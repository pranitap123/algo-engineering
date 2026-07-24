# Valid Palindrome (LeetCode 125)

## Pattern

Two Pointers

## Difficulty

Easy

---

## Problem

Given a string `s`, determine whether it is a palindrome after:

- Converting all uppercase letters to lowercase.
- Removing all non-alphanumeric characters.

Return `true` if it is a palindrome; otherwise return `false`.

---

## Algorithm

1. Initialize two pointers:
   - `left = 0`
   - `right = s.length - 1`

2. While `left < right`:
   - If the left character is not alphanumeric:
     - Move `left` forward.
     - Continue.
   - If the right character is not alphanumeric:
     - Move `right` backward.
     - Continue.
   - Convert both characters to lowercase.
   - Compare them.
   - If they don't match:
     - Return `false`.
   - Otherwise:
     - Move both pointers inward.

3. If the loop completes without any mismatch, return `true`.

---

## Dry Run

Input:

A man, a plan, a canal: Panama
L R
A man, a plan, a canal: Panama

A == a ✔
Move both pointers

Skip spaces and punctuation

m == m ✔

Continue...

Pointers cross

Return true

---

## Time Complexity

O(n)

- Each pointer moves across the string at most once.

## Space Complexity

O(1)

- Only two pointers and a few variables are used.

---

## Key Learning

- Two Pointer technique
- Skipping unwanted characters
- Case-insensitive comparison
- Efficient string traversal