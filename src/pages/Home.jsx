import { Avatar, Box, Card, Grid } from "@mui/material";
import React from "react";

export default function Home() {

  const CARD_PROPERTIES ={
    borderRadius:1.5,
    boxShadow:1,
    padding:2
  }

  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={3}
        sx={{ width: "100%" }}
      >
        <Card sx={CARD_PROPERTIES} variant="outlined">
          <Box
          sx={{
            display: "flex",
            flexDirection:'column',
            alignItems: 'center',
            textAlign: 'center',
            p:2
          }}
          >
            <Avatar></Avatar>
          </Box>
        </Card>
      </Grid>
    </>
  );
}
