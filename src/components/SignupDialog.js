import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Button} from "@material-ui/core";

export function SignupDialog(props) {
    const {open, handleClose, handleLogin} = props;
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Member Signup</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please provide your information for registration.
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
				<TextField
                    fullWidth
                    label="Confirm Password"
                />
				<TextField
                    fullWidth
                    label="Contact"
                />
				<TextField
                    fullWidth
                    label="E-mail"
                />
				<TextField
                    fullWidth
                    label="Address"
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