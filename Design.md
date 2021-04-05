# Data 2 Code

## Problem We Are Solving
The goal is to serialize computer data into a paper format

## Theoretical Limits
If the fundamental unit of data is a printed dot, then this will represent a bit (2 states, printed or not printed on paper). Then the number of bits is simply the amount of dots we can fit onto a peice of paper

If the printer has DPI of D, and paper has dimesnions in inched LW, then we can say

$$
f(DLW)=D^2\frac{LW}{1\ Inch^2}
$$

where F is our number of bits. Given an A4 peice of paper with 400 DPI yields

$$
f(DLW)=(400)^2\frac{8.25*11.75}{1\ Inch^2}=15510000
$$
Or 1.93875 Mb. Practically, this limited by the machine's printing and scanning capability