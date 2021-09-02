import { Avatar, Container, Divider, ImageList, ImageListItem, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  avatarGroup:{
    marginBottom:20
  },
  imageList:{
    marginBottom:20
  },
  link:{
    marginRight: theme.spacing(2),
    color:"#555",
    fontSize:16
  },
  divider:{
    marginBottom:5
  }
}));

const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>Online Friends</Typography>
      <AvatarGroup max={6} className={classes.avatarGroup}>
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
        <Avatar alt="av1" src="https://picsum.photos/300/300" />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom> Galary</Typography>
      <ImageList rowHeight={100} className={classes.imageList} cols={2}>
        <ImageListItem>
          <img src="https://picsum.photos/100/500" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://picsum.photos/200/500" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://picsum.photos/300/500" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://picsum.photos/400/500" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://picsum.photos/500/500" alt="" />
        </ImageListItem>
        <ImageListItem>
          <img src="https://picsum.photos/600/500" alt="" />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom> Cetegories</Typography>
      <Link href="#" className={classes.link} variant="body2">Sport</Link>
      <Link href="#" className={classes.link} variant="body2">Food</Link>
      <Divider className={classes.divider} flexItem/>
      <Link href="#" className={classes.link} variant="body2">Movies</Link>
      <Link href="#" className={classes.link} variant="body2">Science</Link>


    </Container>
  );
};

export default Rightbar;