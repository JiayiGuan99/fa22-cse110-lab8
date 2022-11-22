# Lab 8 - Starter

Jiayi Guan

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
- 1.Within a Github action that runs whenever code is pushed 
- 2.Manually run them locally before pushing code
- 3.Run them all after all development is completed

Ans: Within a Github action that runs whenever code is pushed. When push new code to repo, run tests to make sure the new code actually works so that I can avoid causing any errors.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

Ans: No, unit test does that job instead of E2E.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Ans: No. E2E is a better choice in this case so that we can access different property of message, and check the features and results.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Ans: Yes, I can easily give the fuction a string of more than 80 characters and check the length of the result and see if the max message length is working properly.
