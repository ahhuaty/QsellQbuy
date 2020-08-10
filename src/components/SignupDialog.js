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
					required
                    fullWidth
                    label="Username"
                />
                <TextField
					required
                    fullWidth
                    label="Password"
					type="password"
                />
				<TextField
					required
                    fullWidth
                    label="Confirm Password"
					type="password"
                />
				<TextField
					required
                    fullWidth
                    label="Contact"
                />
				<TextField
					required
                    fullWidth
                    label="E-mail"
                />
				<TextField
                    fullWidth
                    label="Address"
                />
				<TextField
                    fullWidth
                    label="Referral Code"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleLogin} color="primary">
                    Signup
                </Button>
            </DialogActions>
        </Dialog>
    )
}