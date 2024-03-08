import emailjs from "@emailjs/browser";


const sendCustomEmail = (details, entries, dateFormat, imageUrl, timeFormat) => {

  // initialize using your User ID saved in the .env file
  emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID, // The service ID saved in the .env file
      import.meta.env.VITE_EMAIL_TEMPLATE_ID, // The template ID also saved in the .env file
      // Start of the variables defined in the template earlier
      {
        to_email: details.to_email,
        numEntry: entries,
        timeTaken: timeFormat,
        date: dateFormat,
        image: imageUrl,
      }
      // End of the variables defined in the template earlier
    )
    .then((response) => {
      // Debug statement on the console to show the function has been executed successfully
      console.log("Email sent successfully!", response);
    })
    .catch((error) => {
      // Debug statement on the console to show the error that occured
      console.log("Error sending email.", error);
    });
};

export { sendCustomEmail };