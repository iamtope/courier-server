const User = require("./model");
const mailer = require("../../../utilities/mailer")
const Token = require("../Token/model")
const bcrypt = require("bcrypt")
const token = require("../../../utilities/tokenGen")
const mapper = require("../../../config/googlemaps")
const paginator = require("express-mongo-paginator")
const referralCodeGenerator = require('referral-code-generator')
// const paginator = require("../../../utilities/paginator")

var geocodeParams = {
    "address": "100 unit estate,unit 90 udoudoma avenue,uyo Nigeria",
    // "components": "components=country:GB",
    // "bounds": "55,-1|54,1",
    // "language": "en",
    // "region": "uk"
};

exports.createAdmin = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
        });
        user.password = await user.hashPassword(req.body.password);
        let addedUser = await user.save()
        
        res.status(200).json({
            msg: "New Admin Created",
            data: addedUser
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}


exports.loginAdmin = async (req, res) => {
    const login = {
        email: req.body.email,
        password: req.body.password
    }
    try {
        let user = await User.findOne({
            email: login.email
        });
        if (!user) {
            res.status(400).json({
                type: "Not Found",
                msg: "Wrong Login Details"
            })
        }
        
        let match = await user.compareUserPassword(login.password, user.password);
        if (match) {
            let token = await user.generateJwtToken({
                user
            }, "secret", {
                expiresIn: 604800
            })

            if (token) {
                res.status(200).json({
                    success: true,
                    token: token,
                    userCredentials: user
                })
            }
        } else {
            res.status(400).json({
                type: "Not Found",
                msg: "Wrong Login Details"
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            type: "Something Went Wrong",
            msg: err
        })
    }
}


exports.changePassword = async (req, res) => {
    let oldpassword = req.body.password
    let newPassword = req.body.newpassword;
    let confirmpassword = req.body.confirmpassword;
    try {
        let user = await User.findOne({
            email: req.body.email
        });
        if (user) {
            let match = await user.compareUserPassword(oldpassword, user.password);
            if (match) {
                if (newPassword === oldpassword) {
                    res.status(200).json({
                        type: "Success",
                        msg: "Please use a different password",
                    })
                }
                if (newPassword === confirmpassword) {
                    user.password = await bcrypt.hashSync(newPassword, 10);
                    let newChangedPassword = await user.save();
                    if (newChangedPassword) {
                        mailer.changePasswordConfirmation(user.email)
                    }

                    res.status(200).json({
                        type: "Success",
                        msg: "Password Changed Successfully",
                    })
                } else {
                    res.status(400).json({
                        type: "Error",
                        msg: "Password Does not match"
                    })
                }
            } else {
                res.status(400).json({
                    type: "Error",
                    msg: "Old Password is Incorrect"
                })
            }
        } else {
            res.status(400).json({
                type: "Error",
                msg: "User Not Found"
            })
        }


    } catch (err) {
        console.log(err)
        res.status(400).json({
            type: "Error",
            msg: "Something Went Wrong"
        })
    }

}
exports.getAllAdmin = async (req, res) => {
    try {
        let page = parseInt(req.params.page);
        let data = await paginator.paginator(User, page, 2, []);
        res.status(200).json({
            data
        })
    } catch (err) {
        res.json(err);
        console.log(err)
    }

}