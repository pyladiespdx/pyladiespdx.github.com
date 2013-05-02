---
layout: post
title: Get Comfortable with List Comprehensions and Regex
category: tutorial
tags: flora_worley, lists, regex
---


##List Comprehensions

List comprehensions are based on set builder notation:

Given [a for b in list]:
a = the output function (default is append)
b = the variable
c = the input set

Examples:

		list = []
		for i in range(100):
			list.append(i)
		
		# becomes:
		list = [i for i in range(100)]

		list = [1, 2, 3, 4]
		for n in list:
			double_list.append(n*2)
		
		# becomes:
		double_list = [x*2 for x in list]

Add an if clause:

		double_list = []
		for n in list:
			if (n > 1):
				double_list.append(n * 2)
		
		# becomes:
		double_list = [n*2 for n in list if (n > 1)]

Loops of loops:

		list_one = [a, b]
		list_two = [1, 2]
		list_three = []
		for l in list_one:
			for m in list_two:
				list_three.append(l, m)
		== [(a, 1), (a, 2), (b, 1), (b, 2)]
		
		As a list comprehension:
		list_three = [(l, m) for l in list_one for m in list_two]

As a note, you probably don't want to get any fancier than that with your list comprehensions…no matter the advantages listed below. Otherwise, your code will become too difficult to read.

####So why use list comprehensions? 

List comprehensions aren't just a fancy way of abbreviating code--they also have some tangible benefits:

1. Conciseness

2. Provide a kind of introduction to using generators (we'll address these in a later workshop)

3. They have an impact on the order of magnitude (O(n)), a shorthand for calculating the relative performance of different Python data structures and algorithms. For example, a list comprehension ```[item for item in items]``` is twice as fast as the equivalent ```for item in items: append(item)```

Big-O values for some common python list functions (from lightest--heaviest):
* O(1):
	* index[] and index assignment
	* append() and pop() (if popping off end)
* O(k)(k=size of list):
	* get slice[x:y]
	* concatenate (use join() instead)
* O(n):
	* pop(i) (popping from anywhere but end)
	* insert(i, item) and del()/del[slice:]
	* reverse()
	* iteration!
	* contains (in)
* Other:
	* O(n+k): set slice
	* O(nk): multiply
	* O(n log n): sort()

And for dictionaries:
* O(1): 
	* get item, set item, delete item, contains (in)
* O(n):
	* copy()
	* iteration!

For more on this topic, see http://interactivepython.org's Data and Algorithms course[http://interactivepython.org/courselib/static/pythonds/index.html].
 

##Regular Expressions

Regular expressions are a tool for matching text __patterns__ in strings of varying length and content. Regexes give you the flexibility to run searches on/match patterns beyond literal fixed characters. 

The Python module that provides Regex support is called "__re__".
Search with the re.search() method:
```text_to_match = re.search(pattern, string)```
…the method will take the __pattern__ you give it and will search against the __string__ you've passed in.

Search __patterns__ are often appended by an "__r__" (as in ```re.search(r'pattern', string)```) to denote that the string is "raw", meaning that nothing in the string should be escaped. You should generally use the "r" in your Regexes to avoid parsing issues.

Searching and matching works by looking for the complete pattern in each string; running through from start to finish; and stopping as soon as a match is found, returning the match object (or None if not found).

###Basic patterns:

* a, X, 9, < : plain characters match themselves
* ^$*+?{[]\|() : meta-characters that have special meanings
	* () : Define the scope and precedence of the operators
	* | : Boolean "or", meaning either one or other of one|other
	* ^ : Start of a string
	* $ : End of a string 
	* \ : inhibit the uniqueness of a character that is otherwise considered a meta-character (i.e., \. for period; \\ for slash; \$ for a dollar sign, etc)
	* ? : match zero or one occurrence of the pattern to the left (i.e., may or may not appear in pattern)
	* - : (dash) if between two [], indicates a range of digits or alphabetic chars; will be interpreted as a literal if appearing first or last inside [].
	* \* : zero or more occurrences of a pattern to the left of
	* \+ : one or more occurrences of a pattern to the left of (q+, say, if you are expecting multiple q's) 
	* . : periods match any character (except newline \n)
	* {n} : matches number of times the preceding character/s appear (for example, a tel. # might be [0-9]{3}-[0-9]{3}-[0-9]{4})
* \w : matches a "word" character (such as a letter, number, or underbar)
* \W : matches any non-word character
* \d : decimal digit (ie, 0-9)
* \b : boundary between word and non-word
* \s : matches any single whitespace character (such as space, newline, return, tab, form)
	* \t : tab
	* \n : newline
	* \r : return
	* \f : form
* \S : marches any non-whitespace character


### Square Brackets

Square brackets can be used to search for one character from amongst a group (ex. [xyz] matches x or y or z), or to exclude characters (if beginning with a "^"; [^ xyz] means any character but x, y, or z). Square brackets also have slightly different rules, in that a period inside them == a literal period (and not a meta-character); a "-" dash at the beginning or end is treated literally; and backslash escapes are not allowed.

For example, you might use square brackets to search for an email address:

``` 
email = re.search(r'[\w.]+@[\w.][com|org|net|edu]', string)
```

…or, since email addresses can get notoriously convoluted, just check for an @ and a ".":

``` 
email = re.search(r'/.+@.+\..+/i', string)
```

Let's break this last one down:

1. r = raw
2. / = delimits the regex (so that the ".+" wildcard that appears next won't search an infinite number of characters
3. .+ = any number of any kind of character for email name 
4. @ = literal @
5. .+ = any number of characters for email service
6. \. = escaped period==literal period
7. .+ = any characters of any kind (for com, edu, net, org, etc.)
8. /i = the whole regex is case-insensitive 


####Other methods besides search():

* __group()__ : won't change matching behavior, but gives you the ability to extract the pattern captured inside as a logical group
ex: 
```
email = re.search(r'(/.+)@(.+\..+)/1', string)
``` 
would give you the ability to extract either the email name or email host from the pattern match, where:

		print match.group() = whole email address

		print match.group(1) = email name

		print match.group(2) = email host

		# note that the outer parentheses are treated as the first, default grouping

* __findall()__ : a very useful re module function that finds all of the matches and returns them as a list of strings
ex: ```emails = re.findall(r'/.+@.+\..+/i', string)```
Then, you can iterate over the list to do something with the emails, like:
```
for email in emails:
	print email
```
You can even use this function to find all occurrences of a pattern in a file:
```
f = open('file.txt', 'r')
strings = re.findall(r'text pattern', f.read())
```
* You can combine re.findall() and groups() together for even more granular data manipulation
* __sub()__ : is another useful function in the re module that allows you to substitute in values:
ex: ```re.sub(pattern, replacement, string)``` will return a new string with each pattern match replaced by the replacement value 