import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  useTheme
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const data = [
  {
    id: "1",
    name: "Tasty Garden",
    description: "Chinese food done differently",
    imgLink:
      "https://cdn.vox-cdn.com/thumbor/zmmzoF3-DAlNrb66huJaQtG2Pso=/0x0:1000x667/1200x800/filters:focal(420x253:580x413)/cdn.vox-cdn.com/uploads/chorus_image/image/61169007/05_2013_CHI_LIN-5.0.0.1412884270.0.jpeg"
  },
  {
    id: "2",
    name: "Albertos",
    description: "Carne asada better than ever",
    imgLink:
      "https://tornadoughalli.com/wp-content/uploads/2016/03/Carne-Asada-Fries.jpg"
  },
  {
    id: "3",
    name: "Boba Guys",
    description: "SF's most hipster spot",
    imgLink:
      "https://images.squarespace-cdn.com/content/v1/50ce46ece4b01020c34fd52b/1537998860035-RM5X2404KB9TULLCLLM4/ke17ZwdGBToddI8pDm48kEiYbslFmXqxZW7MqMI8YSVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwQxboqUzBAeBLrgWJDZBB-HRtjRoqhAGhrRQPIQzVAp20lhq6BYwyANd4d8_R4FaA/Screen+Shot+2018-09-26+at+2.52.49+PM.png"
  },
  {
    id: "1",
    name: "Tasty Garden",
    description: "Chinese food done differently",
    imgLink:
      "https://cdn.vox-cdn.com/thumbor/zmmzoF3-DAlNrb66huJaQtG2Pso=/0x0:1000x667/1200x800/filters:focal(420x253:580x413)/cdn.vox-cdn.com/uploads/chorus_image/image/61169007/05_2013_CHI_LIN-5.0.0.1412884270.0.jpeg"
  },
  {
    id: "2",
    name: "Albertos",
    description: "Carne asada better than ever",
    imgLink:
      "https://tornadoughalli.com/wp-content/uploads/2016/03/Carne-Asada-Fries.jpg"
  },
  {
    id: "3",
    name: "Boba Guys",
    description: "SF's most hipster spot",
    imgLink:
      "https://images.squarespace-cdn.com/content/v1/50ce46ece4b01020c34fd52b/1537998860035-RM5X2404KB9TULLCLLM4/ke17ZwdGBToddI8pDm48kEiYbslFmXqxZW7MqMI8YSVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwQxboqUzBAeBLrgWJDZBB-HRtjRoqhAGhrRQPIQzVAp20lhq6BYwyANd4d8_R4FaA/Screen+Shot+2018-09-26+at+2.52.49+PM.png"
  },
  {
    id: "1",
    name: "Tasty Garden",
    description: "Chinese food done differently",
    imgLink:
      "https://cdn.vox-cdn.com/thumbor/zmmzoF3-DAlNrb66huJaQtG2Pso=/0x0:1000x667/1200x800/filters:focal(420x253:580x413)/cdn.vox-cdn.com/uploads/chorus_image/image/61169007/05_2013_CHI_LIN-5.0.0.1412884270.0.jpeg"
  },
  {
    id: "2",
    name: "Albertos",
    description: "Carne asada better than ever",
    imgLink:
      "https://tornadoughalli.com/wp-content/uploads/2016/03/Carne-Asada-Fries.jpg"
  },
  {
    id: "3",
    name: "Boba Guys",
    description: "SF's most hipster spot",
    imgLink:
      "https://images.squarespace-cdn.com/content/v1/50ce46ece4b01020c34fd52b/1537998860035-RM5X2404KB9TULLCLLM4/ke17ZwdGBToddI8pDm48kEiYbslFmXqxZW7MqMI8YSVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwQxboqUzBAeBLrgWJDZBB-HRtjRoqhAGhrRQPIQzVAp20lhq6BYwyANd4d8_R4FaA/Screen+Shot+2018-09-26+at+2.52.49+PM.png"
  },
  {
    id: "1",
    name: "Tasty Garden",
    description: "Chinese food done differently",
    imgLink:
      "https://cdn.vox-cdn.com/thumbor/zmmzoF3-DAlNrb66huJaQtG2Pso=/0x0:1000x667/1200x800/filters:focal(420x253:580x413)/cdn.vox-cdn.com/uploads/chorus_image/image/61169007/05_2013_CHI_LIN-5.0.0.1412884270.0.jpeg"
  },
  {
    id: "2",
    name: "Albertos",
    description: "Carne asada better than ever",
    imgLink:
      "https://tornadoughalli.com/wp-content/uploads/2016/03/Carne-Asada-Fries.jpg"
  },
  {
    id: "3",
    name: "Boba Guys",
    description: "SF's most hipster spot",
    imgLink:
      "https://images.squarespace-cdn.com/content/v1/50ce46ece4b01020c34fd52b/1537998860035-RM5X2404KB9TULLCLLM4/ke17ZwdGBToddI8pDm48kEiYbslFmXqxZW7MqMI8YSVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwQxboqUzBAeBLrgWJDZBB-HRtjRoqhAGhrRQPIQzVAp20lhq6BYwyANd4d8_R4FaA/Screen+Shot+2018-09-26+at+2.52.49+PM.png"
  }
];

export default function Home() {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing(2)
    },
    gridItem: {
      width: "60%"
    },
    inputRoot: {
      background: "#fff",
      color: "#1976d2",
      opacity: 1,
      borderRadius: "5px",
      margin: "20px 0",
      padding: "7px"
    },
    cardContainer: {
      width: "90%"
    }
  }));
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center">
      <Grid
        item
        className={classes.gridItem}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <InputBase
          fullWidth={true}
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </Grid>
      <Grid className={classes.cardContainer} item>
        {data.map(item => (
          <SimpleCard
            id={item.id}
            name={item.name}
            description={item.description}
            imgLink={item.imgLink}
          />
        ))}
      </Grid>
    </Grid>
  );
}

function SimpleCard(props) {
  const { id, name, description, imgLink } = props;
  const useStyles = makeStyles(theme => ({
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    card: {
      [theme.breakpoints.down("md")]: {
        width: "80%"
      },
      width: "28%",
      margin: "10px"
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: "100%",
      padding: "15px 0"
    },
    cardImg: {
      borderRadius: "5px",
      objectFit: "cover",
      height: "250px",
      width: "80%"
    },
    cardAction: {
      color: "#fff",
      background: "#1976d2"
    },
    button: {
      color: "#fff"
    },
    link: {
      color: "inherit",
      textDecoration: "none"
    }
  }));

  const classes = useStyles();
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.card} style={{ display: "inline-block" }}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {description}
          </Typography>
          <img className={classes.cardImg} src={imgLink} />
        </CardContent>
        <CardActions className={classes.cardAction}>
          <Button className={classes.button} size="small">
            <Link className={classes.link} to={"/waitlist/" + name}>
              Join the Waitlist
            </Link>
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
