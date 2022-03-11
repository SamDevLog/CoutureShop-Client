import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

export default function ContactPage() {

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_5bstzba', 'template_a878ukd', e.target, 'user_EvnjeyQLY0vjq6jCzGRmW')
      .then((result) => {
        setIsSubmitting(false);
        toast.success(result.text);
      }, (error) => {
        setIsSubmitting(false);
        toast.error(error.text);
      });
      e.target.reset();
  };

  return (
    <>
      <Typography variant='h3' align="center" gutterBottom>
        Contact Us
      </Typography>

      <Card style={{maxWidth: 450, margin: '0 auto', padding: '20px 5px'}}>
        <CardContent>
          <form onSubmit={sendEmail}>
            <Grid  container spacing={1}>
              <Grid xs={12} item>
                <TextField name="user_name" label="Fullname" fullWidth></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField type='email' name="user_email" label="Email" fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField name="subject" label="Subject" fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField multiline rows={4} name="message" label="Message" fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <LoadingButton loading={isSubmitting} type="submit" variant='contained' color='primary' fullWidth>Submit</LoadingButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  )
}
