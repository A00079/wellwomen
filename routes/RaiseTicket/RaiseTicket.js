const express = require("express");
const router = express.Router();
const TicketData = require("../../models/RaisedTicket");


router.post("/create", (req, res) => {

    const newTicket = new TicketData({
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phone,
        query: req.body.query,
        ticketid: req.body.ticketid,
        ticketstatus: req.body.ticketstatus
    });

    newTicket
        .save()
        .then(data => {
            res.json({ 'msg': 'Your ticket is being raised.' })
        })
        .catch(err => console.log(err));
});

router.post("/read", (req, res) => {
    const email = req.body.email;
    TicketData.findOne({ email }).then(ticketdata => {
        // Check if user exists
        if (!ticketdata) {
            return res.status(404).json({ error: "Authorization failed" });
        }
        res.json({ 'data':ticketdata })
    });
});
module.exports = router;