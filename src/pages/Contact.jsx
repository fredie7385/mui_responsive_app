import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function Contact() {
  return (
    <>
      <Typography gutterBottom variant="h5" align={"center"}>
        contacts
      </Typography>
      <Grid>
        <Card
          style={{
            maxWidth: 450,
            padding: "20px 5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            margin: "0 auto",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h6" align="center">
              Contact Us
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              align="center"
              color={"secondary"}
              component={"p"}
            >
              Fill up the Form and our team will get back to you within 24hrs
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    type="number"
                    label="Phone No"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
