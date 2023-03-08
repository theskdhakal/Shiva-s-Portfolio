import React from "react";

export const Contact = () => {
  return (
    <section class="section6 flex">
      <h1 class="title">Get In Touch</h1>

      <div class="contact-container flex">
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>

      <h1>OR</h1>

      <div class="email-section flex">
        <p>reach out over email</p>

        <div class="email flex">
          <a href="mailto:xyz@gmail.com">example@gmail.com</a>

          <div class="send">
            <i class="fa-solid fa-paper-plane"></i>
          </div>
        </div>
      </div>
    </section>
  );
};
