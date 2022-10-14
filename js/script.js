// // const nodemailer = require("nodemailer");
// const input = document.querySelector(".form-input");
// const submit = document.querySelector(".form-submit");
// const form = document.querySelector("[data-delete]");
// const formParent = form.parentNode;
// let email = input.value;

// const message = {
//   to: req.body.email,
//   subject: "congrats",
//   text: `ваш аккаунт создан:
//     login: ${req.body.email}
//     password: ${req.body.password}`,
// };

// const formSending = () => {
//   formParent.removeChild(form);

//   formParent.insertAdjacentHTML(
//     "afterbegin",
//     `
//     <p class="form-delete">Thank you!Your submisson has been received!</p>
//     `
//   );
// };

// let transporter = nodemailer.createTransport(
//   {
//     host: "smtp.mail.ru",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "praise05@mail.ru",
//       pass: "Kozinak228",
//     },
//   },
//   {
//     from: "Mailer test <praise05@mail.ru>",
//   }
// );

// let result = transporter.sendMail({
//   from: '"Node js" <praise05@mail.ru>',
//   to: "tinker228pew@mail.ru, tinker228pew@mail.ru",
//   subject: "Message from Node js",
//   text: "This message was sent from Node js server.",
//   html: "This <i>message</i> was sent from <strong>Node js</strong> server.",
// });

// console.log(result);

// const submitFunc = (submit.onclick = (e) => {
//   e.preventDefault();
//   email = input.value;
//   console.log(email);
//   console.log(form);
//   submit.value = "please wait ...";
//   setTimeout(formSending, 1000);
//   result();
// });
