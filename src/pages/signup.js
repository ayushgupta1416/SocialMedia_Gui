import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import img from '../images/imgg.png';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme)=>({
    ...theme.spreadIt
});

class signup extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            handle: '',
            loading: false,
            errors: {}
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle:this.state.handle
        };
        axios.post('/signup', newUserData)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('FBtoken',`Bearer ${res.data.token}`);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                });
            });

    }

    render() {
        const { classes } = this.props;
        const { errors, loading } = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm>
                    <img className={classes.image} src={img} alt="goku" />
                    <Typography variant="h2" className={classes.pageTitle}>
                        Signup
                   </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id="email"
                            name="email"
                            type="email"
                            label="Email"
                            className={classes.textFeild}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            value={this.state.email}
                            onChange={this.handleChange}
                            fullWidth
                        />
                        <TextField id="password"
                            name="password"
                            type="password"
                            label="Password"
                            className={classes.textFeild}
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            value={this.state.password}
                            onChange={this.handleChange}
                            fullWidth />
                            <TextField id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            className={classes.textFeild}
                            helperText={errors.confirmPassword}
                            error={errors.confirmPassword ? true : false}
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            fullWidth />
                            <TextField id="handle"
                            name="handle"
                            type="text"
                            label="Handle"
                            className={classes.textFeild}
                            helperText={errors.handle}
                            error={errors.handle? true : false}
                            value={this.state.handle}
                            onChange={this.handleChange}
                            fullWidth />
                        {errors.general && (
                            <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.button}
                            disabled={loading}>
                            Signup
                            {loading && (
                                <CircularProgress className={classes.progress}></CircularProgress>
                            )}
                        </Button>
                        <br />
                        <small>
                            Already have an account ? login <Link to='/login'>here</Link> 
                        </small>
                    </form>

                </Grid>
                <Grid item sm />

            </Grid>
        );
    }
}
signup.propTypes={
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(signup);