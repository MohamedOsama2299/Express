# Encryption & Security Concepts (Simple Explanation)

## 1) Encryption

Encryption means hiding data so no one can read it except the right person.

* You change normal text (Plain Text)
* Into secret text (Cipher Text)
* You need a key to read it again

Example:
HELLO → (encrypted) → KHOOR

---

## 2) Caesar Cipher

Caesar Cipher is a very old and simple way to encrypt text.

It works by moving each letter a few steps forward in the alphabet.

Example (move 3 letters):
A → D
B → E
H → K

HELLO → KHOOR

It is not secure today. It is just for learning.

---

## 3) Hashing

Hashing changes data into a fixed code called a Hash.

Important:

* You cannot get the original text back.
* It is one-way only.

Used for:

* Storing passwords safely

Example:
123456 → e10adc3949ba59abbe56e057f20f883e

---

## 4) Salting

Salting means adding random text to a password before hashing.

Why?

* To make passwords more secure.
* So two people with the same password don’t have the same hash.

Example:
Password: 123456
Salt: abc123
New value: 123456abc123
Then hash it.

---

## 5) Bcrypt

Bcrypt is a strong and safe way to hash passwords.

It:

* Adds salt automatically
* Hashes the password
* Makes hacking harder

It is commonly used in websites to store passwords.

---

# Short Summary

* Encryption = Hide data with a key.
* Caesar Cipher = Old simple encryption.
* Hashing = One-way password protection.
* Salting = Extra security for hashing.
* Bcrypt = Strong password hashing method.
