import { GitHub, Web } from "@mui/icons-material";
import {
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";

export default function AboutPage() {
  return (
    <Container sx={{ mb: 3 }} maxWidth="sm">
      <Typography gutterBottom textAlign="center" variant="h2">
        About Me
      </Typography>
      <Paper elevation={3} sx={{p: 2}}>
        <Typography gutterBottom variant="subtitle1" paragraph={true}>
          Hi there!
          <br />
          My name is Samir Boutazzout and I am a web developer from Morocco. My
          main stack is .NET for the backend and ReactTS for the frontend.
          <br />
          <br />
          I have been a developer for around two years and a half, coding mainly
          in C#. I started my journey creating games on Unity through which I
          improved my coding skills, as well as my general language about the
          .NET ecosystem and design patterns.
          <br />
          <br />
          I am pretty proficient in C#, JavaScript, TypeScript, HTML, and CSS. I
          also have experience using databases such as Postgres DB, SQL DB,
          SQLite, in addition to EntityFramework 5+. <br />
          <br />
          For cloud solutions, my main experience is with Azure Functions and
          Azure Storage, CosmosDB SQL Core API in particular.
          <br />
          <br />
          For more information about me or any inquiry, feel free to reach out
          to me via the contact form.
          <br />
          Check my github repository and my personal portfolio for other
          projects that I have worked on.
        </Typography>
        <IconButton href="https://github.com/SamDevLog" target='_blank'>
          <GitHub />
        </IconButton>
        <IconButton href="https://samdevlog.netlify.app/" target='_blank'>
          <Web />
        </IconButton>
      </Paper>
    </Container>
  );
}
