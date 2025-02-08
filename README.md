# Unhandled Exceptions and Input Validation in Calculator Function

This repository demonstrates a simple calculator function in JavaScript with unhandled exceptions and a lack of input validation.  The `calculate` function performs basic arithmetic operations (+, -, *, /) but throws generic error messages when encountering invalid operators or division by zero.  The improved version includes more descriptive error messages and input validation.

## Bug Report

The original `calculate` function lacks robust error handling and input validation.  It throws generic error messages that don't provide enough context.  Furthermore, it doesn't handle non-numeric inputs gracefully. 

## Solution

The solution involves:

1.  More descriptive error messages
2.  Input validation to check for numeric inputs and valid operators
3.  Improved error handling to prevent program crashes

The improved version provides better error messages and prevents unexpected behavior.