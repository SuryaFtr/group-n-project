const { check, validationResult } = require('express-validator');

exports.validateRegister = [
    check('email', 'Invalid email')
        .isEmail(),
    check('username', 'username does not Empty').not().isEmpty(),
    check('username', 'Name length should be 3 to 20 characters')
        .isLength({ min: 3, max: 20 }),
    check('password', 'Password does not Empty').not().isEmpty(),
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
    check('username', 'username does not Empty').not().isEmpty(),
    check('username', 'Name length should be 3 to 20 characters')
        .isLength({ min: 3, max: 20 }),
    check('password', 'Password does not Empty').not().isEmpty(),
    check('password', 'Password length min should be 8 characters')
        .isLength({ min: 8 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array() });
        next();
    },
]

