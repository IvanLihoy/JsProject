const LoginPage = require('../pageobjects/login.page');
const ChatPage = require('../pageobjects/chat.page');

describe('login and enter the chat', function() {

    it('should open login page', function() {
        LoginPage.open();
    })

    it('should be able to login from 2 accounts', function() {
        LoginPage.inputLoginCreds(
            LoginPage.usernameInputA, LoginPage.passwordInputA, 
            'Daniel_Johanf@protonmail.com', '1q2w3e4r5t6y7u8i');
        LoginPage.inputLoginCreds(
            LoginPage.usernameInputB, LoginPage.passwordInputB, 
            'james.m.traylor@protonmail.com', '1q2w3e4r5t6y7u8i');
        browser.sync();
        LoginPage.submitFormAndLogin();
    })

    it('should enter the chat', function() {
        ChatPage.enterChat();
    })

    it('browser A should send message to browser B', function() {
        ChatPage.sendMessageFromAToB();
    })
})