// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('(123) 123-1234 is a phone number', () => 
{
    expect(functions.isPhoneNumber('(123) 123-1234')).toBe(true);
});
test('(789) 654-3210 is a phone number', () => 
{
    expect(functions.isPhoneNumber('(789) 654-3210')).toBe(true);
});
test('1231231234 is not a phone number', () => 
{
    expect(functions.isPhoneNumber('1231231234')).toBe(false);
});
test('0 is not a phone number', () => 
{
    expect(functions.isPhoneNumber('0')).toBe(false);
});



test('gaskfja@gmail.com is an email', () => 
{
    expect(functions.isEmail('gaskfja@gmail.com')).toBe(true);
});
test('fafgkhs@ucsd.edu is an email', () => 
{
    expect(functions.isEmail('fafgkhs@ucsd.edu')).toBe(true);
});
test('egfoaduhfj is not an email', () => 
{
    expect(functions.isEmail('egfoaduhfj')).toBe(false);
});
test('kajgsf@kgasfj is not an email', () => 
{
    expect(functions.isEmail('kajgsf@kgasfj')).toBe(false);
});



test('af324KJH is a password', () => 
{
    expect(functions.isStrongPassword('af324KJH')).toBe(true);
});
test('fsdg436_ is a password', () => 
{
    expect(functions.isStrongPassword('fsdg436_')).toBe(true);
});
test('af%#%^^#$% is not a password', () => 
{
    expect(functions.isStrongPassword('af%#%^^#$%')).toBe(false);
});
test('342dgssdf is not a password', () => 
{
    expect(functions.isStrongPassword('342dgssdf')).toBe(false);
});



test('1/2/3045 is a date', () => 
{
    expect(functions.isDate('01/02/3045')).toBe(true);
});
test('12/12/1212 is a date', () => 
{
    expect(functions.isDate('12/12/1212')).toBe(true);
});
test('001/01/0101 is not a date', () => 
{
    expect(functions.isDate('001/01/0101')).toBe(false);
});
test('1.1.2022 is not a date', () => 
{
    expect(functions.isDate('1.1.2022')).toBe(false);
});




test('#fff is a hex color', () => 
{
    expect(functions.isHexColor('#fff')).toBe(true);
});
test('A324 is a hex color', () => 
{
    expect(functions.isHexColor('#324')).toBe(true);
});
test('#fdahe52asf is not a hex color', () => 
{
    expect(functions.isHexColor('#fdahe52asf')).toBe(false);
});
test('#341 is not a hex color', () => 
{
    expect(functions.isHexColor('gfs341')).toBe(false);
});
