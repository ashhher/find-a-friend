import React from "react";
import { AppBar, Avatar, Button, Grid, Paper, TextField, Toolbar, Typography } from '@material-ui/core';
import {Link, Redirect} from 'react-router-dom';

const gridStyle = {
    width: "100%",
    margin: "0px"
}

const leftPaperStyle = {
    width: "100%",
    backgroundColor: "#405185"
}

const h3Style = {
    color: "#FFFFFF",
    padding: "20px"
}

const rightPaperStyle = {
    padding: "20px",
    height: "60vh",
    width: "280px",
    margin: "20px auto"
}

const buttonStyle = {
    margin: "10px 0",

}

class SignUp extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             email: "",
             password: "",
             fistname: "",
             lasname: "",
             success: false,
             login: false
         };
         this.handleChange  = this.handleChange.bind(this);
         this.redirectToLogIn = this.redirectToLogIn.bind(this);
     }

     handleChange(event) {
         this.setState({[event.target.name]: event.target.value});
     }

     redirectToLogIn() {
         this.setState({login: true});
     }

    render() {
        if(this.state.login) {
            return <Redirect to='./login'/>
        }
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <h1>
                            Find-A-Friend
                        </h1>
                    </Toolbar>
                </AppBar>
                <Grid container style={gridStyle} spacing={2}>
                    <Grid item xs={9}>
                        <Paper style={leftPaperStyle}>
                            <div>
                                <h3 style={h3Style}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum eum, delectus vitae, ea laborum fuga sint eos officia sed, commodi fugit odio dolores? Soluta neque aut necessitatibus! Assumenda, dolores odit!
                                </h3>
                                <img src="https://wallpapercave.com/wp/wp1843955.jpg" alt="background" width="60%"/>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper style={rightPaperStyle} elevation={10}>
                            <Grid align='center'>
                                <Avatar></Avatar>
                                <h2>Sign up</h2>
                            </Grid>
                            <form>
                                <TextField label="First name" placeholder="John" name="firstname" id="firstname" fullWidth required autoFocus onChange={this.handleChange} value={this.state.firstname}/>
                                <TextField label="Last name" placeholder="Appleseed" name="lastname" id="lastname" fullWidth required onChange={this.handleChange} value={this.state.lastname}/>
                                <TextField label="Email" placeholder="Enter email" name="email" id="email" fullWidth required onChange={this.handleChange} value={this.state.email}/>
                                <TextField label="Password" placeholder="Enter password" name="password" id="password" fullWidth required type="password" onChange={this.handleChange} value={this.state.password}/>
                                <Button type="submit" color="primary" variant="contained" fullWidth style={buttonStyle}>Sign up</Button>
                            </form>
                            <Typography>
                                Already have an account?{" "}<Link href="" onClick={this.redirectToLogIn}>Log in</Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default SignUp;