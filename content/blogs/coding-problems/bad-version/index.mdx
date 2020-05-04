---
title: Bad Version Problem
date: 2020-05-04T06:37:51.417Z
description: First interaction with valueOf
categories: coding-problems,javascript
---

Today we will try to solve a classic problem `Bad Version`

> Suppose you have n versions `[1, 2, ..., n]` and you want to find out the first bad one, which causes all the following ones to be bad.You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

To get better clarity lets look at an example.
Lets assume we have 10 versions which means in this case `n=10`;
Lets also assume that we have this following results

```javascript
isBadVersion(3); // => false
isBadVersion(5); // => true
isBadVersion(4); // => true
```

This clearly tells that starting from `4` all the versions are bad.So our output should be `4` which is the first bad version.

Now that we are clear with what we have to achieve lets device an approach to solve this.
Yes we can easily solve this by looping from `0` to `n` and running `isBadVersion` api for each of those.But that would turn out to be expensive and it can lead up to atmost n calls of our api.So lets analyze what do we have so far.
We have an array of integers and it has versions which starts from `[1,2,...n]`.

> Yes you guessed it right.The array is sorted in ascending order.So now the problem boils down to finding an element from sorted array.

! Hurray the classic solution to find an element from a sorted array is none other that the great [`Binary Search`](https://www.geeksforgeeks.org/binary-search/).So instead of looping through the entire array,we divide the array into two separate chunks and we will pick either of two sides based on where we have `isBadVersion true`.We will repeat this process and finally zero in on the element we are interested in.

```javascript
/**
 * isBadVersion
 *
 * @param {number} version number
 * @return {boolean} whether the version is bad or not
 */
function solution(isBadVersion) {
  /**
   * @param {integer} n - Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 0;
    let end = n;
    let mid = Math.floor(start + (end - start) / 2);
    while (start <= end) {
      mid = Math.floor(start + (end - start) / 2);
      if (!isBadVersion(mid)) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    if (!isBadVersion(mid)) {
      return mid + 1;
    }
    return mid;
  };
}
```

> If you feel this write up needs improvement/corrections,kindly raise a PR
