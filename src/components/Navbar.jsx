import React from "react";
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  search: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 20px 0px 20px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      // display: "none",
      display: (props) => props.open ? "flex" : "none",
      width: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    }
  },
  searchRight: {
    display: "flex",
    alignItems: "center",
    flex: "2",
  },
  searchLeft: {
    display: "flex",
    alignItems: "center",
    // flex:"1",
  },
  logoLg: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    }

  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    }
  },
  input: {
    color: "white",
    margin: theme.spacing(1),
    width: "100%",
  },
  icons: {
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
      display: (props) => props.open ? "none" : "flex",
    }
  },
  badge: {
    marginRight: theme.spacing(2)
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },

}));

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" component="h6" className={classes.logoLg}>
          Hellos
        </Typography>
        <Typography variant="h6" component="h6" className={classes.logoSm}>
          H
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchRight}>
            <Search />
            <InputBase placeholder="Search" className={classes.input} />
          </div>
          <div className={classes.searchLeft}>
            <Cancel className={classes.cancel} onClick={() => { setOpen(false) }} />
          </div>
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={() => setOpen(true)} />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Travis Howard" src="https://picsum.photos/200/300" />

        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;