var express = require("express");
var router = express.Router();
var request = require("request");
var email_validator = require("email-validator");

// APIs
const MAILCHIMP_INT = process.env.MAILCHIMP_INT;
const MAILCHIMP_KEY = process.env.MAILCHIMP_KEY;
const MANDRILL_KEY = process.env.MANDRILL_KEY;
const LIST_ID = process.env.LIST_ID;
const FROM_EMAIL = process.env.FROM_EMAIL;

// Email Services
const mandrill = require("mandrill-api/mandrill");
const mandrill_client = new mandrill.Mandrill(MANDRILL_KEY);

// Email Route
router.post("/waitlist", (req, res) => {
  console.log("in the backend");
  try {
    const { email } = req.body;
    console.log("POSTING: ", email);
    // Validate Email
    if (!email_validator.validate(email)) {
      throw "Bad request";
    }

    console.log("Initializing data");
    // Mailchimp Post Body
    const data = {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: ""
      }
    };

    const postData = JSON.stringify(data);

    console.log("OPTIONS");
    var options = {
      method: "POST",
      url:
        "https://" +
        MAILCHIMP_INT +
        ".api.mailchimp.com/3.0/lists/" +
        LIST_ID +
        "/members",
      headers: {
        Authorization: "apikey " + MAILCHIMP_KEY
      },
      body: postData
    };

    console.log("HERE THO BACKEND");
    request(options, function(error, response, body) {
      // console.log(error, response, body)
      if (error) throw new Error(error);
      console.log(body);
    });

    // Send Email
    // TODO:
    // need to make calcumon waitlist template
    // need to change to calcumon waitlist template
    var template_name = "calcumon-waitlist";
    var template_content = [
      {
        FNAME: ""
      }
    ];
    var message = {
      from_email: FROM_EMAIL,
      from_name: "Calcumon",
      to: [{ email: email }],
      subject: "Math, but it's a playground!"
    };

    // Set time to send email
    var d = new Date();
    d = new Date(d.getTime() - 3000000);
    var send_at =
      d.getFullYear().toString() +
      "-" +
      ((d.getMonth() + 1).toString().length == 2
        ? (d.getMonth() + 1).toString()
        : "0" + (d.getMonth() + 1).toString()) +
      "-" +
      (d.getDate().toString().length == 2
        ? d.getDate().toString()
        : "0" + d.getDate().toString()) +
      " " +
      (d.getHours().toString().length == 2
        ? d.getHours().toString()
        : "0" + d.getHours().toString()) +
      ":" +
      ((parseInt(d.getMinutes() / 5) * 5).toString().length == 2
        ? (parseInt(d.getMinutes() / 5) * 5).toString()
        : "0" + (parseInt(d.getMinutes() / 5) * 5).toString()) +
      ":00";
    var async = false;
    var ip_pool = "Main Pool";

    // SEND THE EMAIL
    mandrill_client.messages.sendTemplate(
      {
        template_name: template_name,
        template_content: template_content,
        message: message,
        async: async,
        ip_pool: ip_pool,
        send_at: send_at
      },
      function(result) {
        console.log(result);
      },
      function(e) {
        // Mandrill returns the error as an object with name and message keys
        console.log("A mandrill error occurred: " + e.name + " - " + e.message);
      }
    );
  } catch (error) {
    console.log("THERE HAS BEEN AN ERROR:", error);
    throw error;
  }

  console.log("MADE IT TO RES.JSON IN THE BACKEND");
  res.json({ status: true });
});

module.exports = router;
