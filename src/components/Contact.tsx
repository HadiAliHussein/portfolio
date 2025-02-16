import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [emailSent, setEmailSent] = useState<boolean>(false);

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

     if (name !== '' && email !== '' && message !== '') {
       var templateParams = {
         name: name,
         email: email,
         message: message
       };

       console.log(templateParams);
       emailjs.send('service_fvjl9t9', 'template_p0iij6v', templateParams, '9U-glshQMQ-Q6JS10').then(
         (response) => {
           console.log('SUCCESS!', response.status, response.text);
           setEmailSent(true);
         },
         (error) => {
           console.log('FAILED...', error);
         },
       );
       setName('');
       setEmail('');
       setMessage('');
     }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box ref={form} component="form" noValidate autoComplete="off" className='contact-form'>
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                className="body-form"
                onChange={(e) => {
                  setName(e.target.value);
                  setEmailSent(false);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                className="body-form"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailSent(false);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                setEmailSent(false);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <div>
              {emailSent &&
              <b className='text-info'>Message has been sent to ✉️hadi@alihussein.de</b>}


            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
