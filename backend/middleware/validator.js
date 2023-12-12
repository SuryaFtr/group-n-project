const { check, validationResult } = require('express-validator');

exports.validateRegister = [
    check('email', 'Email can not be empty').not().isEmpty(),
    check('email', 'Invalid email')
        .isEmail(),
    check('username', 'Username can not be empty').not().isEmpty(),
    check('username', 'Name length should be 2 to 20 characters')
        .isLength({ min: 2, max: 20 }),
    check('password', 'Password can not be empty').not().isEmpty(),
    check('password', 'Password length min should be 8 characters')
        .isLength({ min: 8 }),
    check('password', 'Password must contain at least one uppercase letter, one lowercase letter and one number')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]

exports.validateLogin = [
    check('username', 'Username can not be empty').not().isEmpty(),
    check('username', 'Name length should be 2 to 20 characters')
        .isLength({ min: 2, max: 20 }),
    check('password', 'Password can not be empty').not().isEmpty(),
    check('password', 'Password length min should be 8 characters')
        .isLength({ min: 8 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]

exports.validateUpdateUserRole = [
    check('permissions', 'Permission can not be empty').not().isEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]

exports.validateUpdateUserData = [
    check('email', 'Email can not be empty').not().isEmpty(),
    check('email', 'Invalid email')
        .isEmail(),
    check('username', 'Username can not be empty').not().isEmpty(),
    check('username', 'Name length should be 2 to 20 characters')
        .isLength({ min: 2, max: 20 }),
    check('firstName', 'First Name length should be 2 to 20 characters')
        .isLength({ min: 2, max: 20 }),
    check('lastName', 'Last Name length should be 2 to 30 characters')
        .isLength({ min: 2, max: 30 }),
    check('phone', 'Phone numbers length min should be 12 characters')
        .isLength({ min: 12, max: 13 }),
    check('phone', 'Phone numbers must only contain number')
        .matches(/^[0-9]*$/),
    check('profession', 'Profession length should be not more than 50 characters')
        .isLength({ min: 3, max: 50 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]
