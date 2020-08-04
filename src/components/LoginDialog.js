import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button} from "@material-ui/core";

export function LoginDialog(props) {
    const {open, handleClose, handleLogin} = props;
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Member Login</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please login with your username and password.
                </DialogContentText>
                <TextField
                    autoFocus
                    fullWidth
                    label="Username"
                />
                <TextField
                    fullWidth
                    label="Password"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleLogin} color="primary">
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    )
}