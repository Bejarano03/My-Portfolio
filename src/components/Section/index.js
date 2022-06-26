import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Profile from "../../assets/profilepicture.jpg";

function Section({
  title,
  title2,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  experience1,
  description1,
  description2,
}) {
  return (
    <>
      <Box
        sx={{
          margin: "0 20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Paper
              sx={{
                // eslint-disable-next-line
                background:
                  "rgb(11, 45, 89)" /* Fallback for older browsers without RGBA-support */,
                // eslint-disable-next-line
                background: "rgba(11, 45, 89, 0.5)",
                padding: "20px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      marginLeft: "5px",
                      textDecorationLine: "underline",
                    }}
                  >
                    {title}
                  </Typography>
                  <ul
                    style={{
                      listStyleType: "square",
                      color: "#fff",
                      paddingLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <li>
                      <Typography variant="body1" color="#fff">
                        {skill1}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" color="#fff">
                        {skill2}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" color="#fff">
                        {skill3}
                      </Typography>
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={6}>
                  <ul
                    style={{
                      listStyleType: "square",
                      color: "#fff",
                      paddingTop: "31px",
                      marginTop: "20px",
                    }}
                  >
                    <li>
                      <Typography variant="body1" color="#fff">
                        {skill4}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" color="#fff">
                        {skill5}
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1" color="#fff">
                        {skill6}
                      </Typography>
                    </li>
                  </ul>
                </Grid>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      paddingLeft: "20px",
                      marginTop: "20px",
                      textDecorationLine: "underline",
                    }}
                  >
                    {title2}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="#fff"
                    paddingLeft="20px"
                    marginTop="20px"
                  >
                    {experience1}
                  </Typography>
                  <Typography variant="body1" color="#fff" paddingLeft="20px">
                    {description1}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                      paddingLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    VP Welding & Rails:
                  </Typography>
                  <Typography variant="body1" color="#fff" paddingLeft="20px">
                    {description2}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#fff",
                      paddingLeft: "20px",
                      marginTop: "20px",
                      textDecorationLine: "underline",
                    }}
                  >
                    Education
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="body1" sx={{
                        color: '#fff',
                        marginTop: '20px',
                        paddingLeft: '20px'
                      }}>North Seattle College</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="body1" sx={{
                        color: '#fff',
                        marginTop: '20px',
                        textAlign: 'center'
                      }}>2022 - TBD<br />BAS in Application Development</Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="h5" sx={{
                    color: '#fff',
                    textDecorationLine: 'underline',
                    marginTop: '20px',
                    paddingLeft: '20px'
                  }}>Work Experience</Typography>
                  <Grid container>
                  <Grid item xs={6}>
                  <Typography variant="body1" sx={{
                    color: '#fff',
                    paddingLeft: '20px',
                    marginTop: '20px'
                  }}>T-Mobile USA Inc.</Typography>
                  </Grid>
                  <Grid item xs={6}>
                  <Typography variant="body1" sx={{
                    color: '#fff',
                    paddingLeft: '20px',
                    marginTop: '20px',
                    textAlign: 'center'
                  }}>2016 - Present</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{
                        color: '#fff',
                        marginTop: '20px',
                        paddingLeft: '20px'
                    }}>WinCo Foods</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{
                        color: '#fff',
                        marginTop: '20px',
                        paddingLeft: '20px',
                        textAlign: 'center'
                    }}>2015 - 2016</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{
                        color: '#fff',
                        marginTop: '20px',
                        paddingLeft: '20px'
                    }}>Family Fun Center</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" sx={{
                        color: '#fff',
                        marginTop: '20px',
                        paddingLeft: '20px',
                        textAlign: 'center'
                    }}>2013 - 2015</Typography>
                  </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper
              sx={{
                background: "rgba(11, 45, 89, 0.5)",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography variant="h6" color="#fff">
                Profile
              </Typography>

              <img className="profile" src={Profile} alt="Profile" />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Section;
