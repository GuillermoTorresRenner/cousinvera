import emailjs from "@emailjs/browser";

const sendEmail = (form) => {
  emailjs
    .sendForm("service_sd6s0nq", "template_7c704rk", form, "PCIu6jdwXxlKY7FJn")
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
export default sendEmail;
