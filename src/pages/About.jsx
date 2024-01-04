import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';
import { Box, Card, CardContent, CardMedia } from '@mui/material';

export default function About() {
  

  const data = [
    { 'year': '2022', 'position': 'IT MANAGER', 'company': 'Google' },
    { 'year': '2019', 'position': 'FULLSTACK DEVELOPER ', 'company': 'Facebook' },
    { 'year': '2017', 'position': 'BACKEND DEVELOPER', 'company': 'Amazon' },
    { 'year': '2015', 'position': 'FRONTEND DEVELOPER', 'company': 'TikTok' }
  ];

  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography component={'div'} variant='h4'>
            Fred Rick
          </Typography>
          <Typography component={'div'} variant='subtitle1'>
            Fullstack Developer
          </Typography>
        </CardContent>

        <Box sx={{display:'flex'}}>
        <Timeline position="alternate">
          {data.map((item, index) => (
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {item.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color='primary'>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  {item.position}
                </Typography>
                <Typography>{item.company}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        </Box>
      </Box>
      <CardMedia component={'img'} sx={{width:400, height:500}} image='https://images.pexels.com/photos/2829373/pexels-photo-2829373.jpeg?auto=compress&cs=tinysrgb&w=600' alt='cover image'></CardMedia>
    </Card>

  );
}
