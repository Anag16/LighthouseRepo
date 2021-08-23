# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@anag_ruiz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

## The following functions are currently implemented:
  * head: Find the first element in an array.
  * tail:   Find the last element in an array.
  * middle:  Find the element that is located in the middle of an array , verifiying the actual and expected output.
  * assertArraysEqual: Helps you to verify if two arrays are equal.
  * countLetters:  Counts total letter in a string.
  * countOnly: counts each element and gives you a result of how many times does that element appears.
  * eqArrays: Helps you to verify if two arrays are equal.
  * eqObjectS: This function allow you to evaluate the content of objects
  * findKeyByValue:  Using key , you will be allow to find its value
  * map: a diffetent structure for implementing functions
  * takeUntil: check each element in the array and return values until it completes its condition.
  * whitout: check each element in the array and remove an element (according to the condition that you establish)
  