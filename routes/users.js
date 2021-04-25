var express = require('express');
var router = express.Router();
var account = require('../models/Account');
var ticket = require('../models/Ticket');
var ticketAccount = require('../models/TicketAccount');

router.get("/login-check", (req, res) => {
    console.log(req.session.user);
    if (req.session.user) {
        res.sendStatus(200)
    } else {
        res.sendStatus(403)
    }
})

router.get("/check-unique", async function (req, res) {
    const emailCheck = req.query.email;
    const data = await account.findAll({
        where: {
            email: emailCheck
        }
    })
    if (data.length == 0) {
        res.status(200).send('ok')
    } else {
        res.status(200).send('not ok')
    }

})

router.get("/dang-ky", function (req, res) {
    res.render('dangky');
})

router.post("/dang-ky", async (req, res) => {
    try {
        const username = req.body.username;
        const email = req.body.email;
        const password1 = req.body.password1;

        const result = await account.create({
            UserName: username,
            email: email,
            Pass: password1
        });
        console.log(result);
        res.status(200).send('ok')
    } catch (err) {
        res.status(500).send('something wrong')
    }
})

router.get("/login", async function (req, res) {
    try {
        const email = req.query.email;
        const password = req.query.password;

        const result = await account.findAll({
            where: {
                email: email,
                Pass: password
            }
        });
        if (result[0].dataValues) {
            req.session.user = result[0].dataValues;
        } else {
            res.sendStatus(403)
        }
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
    }
})

router.get('/mua-ve', async function (req, res, next) {
    // logic lay data tu database
    try {
        let ticketArray = await ticket.findAll();
        ticketArray = ticketArray.map(el => {
            return el.dataValues;
        })

        const now = new Date()
        const datePicker = `${now.getFullYear()}-${now.getMonth() < 10 ? '0'+String((now.getMonth()+1)): String((now.getMonth()+1))}-${now.getDate() < 10 ? '0'+String(now.getDates()) : String(now.getDate())}`
        res.render('index', {
            ticketArray: ticketArray,
            datePicker: datePicker,
            user: req.session.user ? req.session.user.UserName : undefined,
        });

    } catch (err) {
        res.sendStatus(500)
    }
});

// router.use((req, res, next) => {
//     if (req.session.user) {
//         next()
//     } else {
//         res.sendStatus(403)
//     }
// })

router.get("/logout", function (req, res) {
    req.session = null;
    res.sendStatus(200);
})

router.post('/mua-ve', async (req, res) => {
    try {
        const email = req.body.email;
        const id = req.body.id;
        const amount = req.body.amount;
        const dayToUse = req.body.dayToUse;
        const result = await ticketAccount.create({
            email: email,
            Id: id,
            Amount: amount,
            DayToUse: dayToUse
        });
        console.log(result);
        res.status(200).send('ok')
    } catch (err) {
        res.status(500).send('something wrong')
    }
})

router.get("/getEmail",async function(req,res) {
    const email = req.session.user.email;
    res.send(email)
})

router.get("/getUsername",async function(req,res) {
    const username = req.session.user.username;
    return username;
})

router.get("/ticket/getAll", async function (req, res) {
    try {
        const email = req.session.user.email;
        let ticketAccountArray = await ticketAccount.findAll({
            where:{
                email: email
            }
        });
        ticketAccountArray = await Promise.all(ticketAccountArray.map(async el => {
            let ticketData = await ticket.findAll({
                where: {
                    Id: el.dataValues.Id,
                }
            });
            return {
                id: el.dataValues.Id,
                name: ticketData[0].dataValues.TicketName,
                amount: el.dataValues.Amount,
                dayToUse: ticketData[0].dataValues.DayToUse
            };

        }))
        res.send(ticketAccountArray);
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }
})


module.exports = router;
