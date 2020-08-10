import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button} from "@material-ui/core";
//LoginDialog
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
					required
                    autoFocus
                    fullWidth
                    label="Username"
                />
                <TextField
                    fullWidth
					required
                    label="Password"
					type="password"
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