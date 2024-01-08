import {
  mdiFacebook,
  mdiInstagram,
  mdiPaletteOutline,
  mdiPinterest,
  mdiTwitter,
} from "@mdi/js";
import Icon from "@mdi/react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const icons = {
  Facebook: mdiFacebook,
  Twitter: mdiTwitter,
  Pinterest: mdiPinterest,
  IG: mdiInstagram,
};
const socialIcons = [
  { name: "Facebook", url: "https://www.facebook.com/your-profile" },
  { name: "Twitter", url: "https://twitter.com/your-profile" },
  { name: "Pinterest", url: "https://www.pinterest.com/your-profile" },
  { name: "IG", url: "https://www.instagram.com/your-profile" },
];
const SocialIconButtons = () => {
  return (
    <CardContent
      sx={{
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      {socialIcons.map(({ name, url }) => (
        <IconButton
          key={name}
          size="large"
          component="a"
          href={url}
          target="_blank"
        >
          <Icon path={icons[name]} size={1.1} color="#616161" />
        </IconButton>
      ))}
    </CardContent>
  );
};

export default function Home() {
  const CARD_PROPERTIES = {
    borderRadius: 1.5,
    boxShadow: 1,
    padding: 2,
  };

  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={3}
        sx={{
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        <Card sx={CARD_PROPERTIES} variant="outlined">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 2,
            }}
          >
            <Avatar
              sx={{
                height: 70,
                width: 70,
                mb: 2,
                cursor: "pointer",
              }}
              src="https://images.pexels.com/photos/6214730/pexels-photo-6214730.jpeg?auto=compress&cs=tinysrgb&w=600"
            ></Avatar>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {" "}
              Richard Rick
            </Typography>
            <Typography variant="body1" color={"text.secondary"}>
              {" "}
              Fullstack Developer
            </Typography>
          </Box>
          <SocialIconButtons />
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        lg={4}
        xl={3}
        sx={{
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        <Card sx={CARD_PROPERTIES}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              p: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon path={mdiPaletteOutline} color={"#616161"} size={1.3} />
              <Typography variant="h5" sx={{ ml: 1, fontWeight: "bold" }}>
                Inspiration
              </Typography>
            </Box>
          </Box>
          <Box sx={{ position: "relative", mb: 2 }}>
            <CardMedia
              component={"img"}
              height={250}
              sx={{borderRadius:3}}
              image="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: 2,
                background: "#000000d1",
              }}
            >
              <Typography sx={{ mb: 1 }} variant="body1" color={"white"}>
                Welcome to
              </Typography>
              <Typography sx={{ mb: 1 }} variant="h5" color={"white"}>
                My Website
              </Typography>
            </Box>
          </Box>
          <CardContent sx={{ p: 3, mb: 0 }}>
            <Typography variant="body1" color={"text.secondary"} sx={{ mb: 1 }}>
              Introduction
            </Typography>
            <Typography variant="body1" color={"text.secondary"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nisi necessitatibus quia accusantium repellendus eligendi!
            </Typography>
          </CardContent>
          <Box
            sx={{
              p: 3,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Link
              href="#"
              underline="always"
              variant="body1"
              color="text.primary"
              sx={{ fontWeight: "bold" }}
            >
              Views
            </Link>
          </Box>
        </Card>
      </Grid>
    </>
  );
}
