import React from "react";
import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            height: "100vh"
        }
    },
    textField: {
        width: "100%"
    },
    button: {
        marginRight: 20
    },
    form: {
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),
    }


}));

const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenAlert(false);
    };

    return (
        <>
            <Tooltip title="Add" aria-label="add" onClick={() => { setOpen(true) }}>
                <Fab color="primary" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>
                    <form className={classes.form} autoComplete="off">
                        <div className={classes.item}>
                            <TextField id="standard-basic" label="Title" size="small" className={classes.textField} />
                        </div>
                        <div className={classes.item}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                defaultValue="write here you story..."
                                variant="outlined"
                                label="Description"
                                size="small"
                                className={classes.textField} />
                        </div>
                        <div className={classes.item}>
                            <TextField select label="visibility" value="Public">
                                <MenuItem value="Public"> Public </MenuItem>
                                <MenuItem value="Private"> Private </MenuItem>
                                <MenuItem value="Unlist"> Unlist </MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend"> Who can comment</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="everyone" control={<Radio size="small" />} label="Everyone" />
                                <FormControlLabel value="myFriends" control={<Radio size="small" />} label="my Friends" />
                                <FormControlLabel value="nobody" control={<Radio size="small" />} label="nobody" />
                                <FormControlLabel value="custom" control={<Radio size="small" />} label="Custom (Premium)" disabled />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button variant="outlined" color="primary" className={classes.button} onClick={() => setOpenAlert(true)}>Create</Button>
                            <Button variant="outlined" color="secondary" className={classes.button} onClick={() => setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Container>
            </Modal>
            <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "left" }}>
                <Alert onClose={handleClose} severity="success">
                    this is a Success Messagae !
                </Alert>
            </Snackbar>
        </>
    );
};

export default Add;