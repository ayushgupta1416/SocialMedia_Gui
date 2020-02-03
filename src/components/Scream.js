import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

const styles={
    card:{
        display:'flex',
        marginBottom:20,
    },
    image:{
        minWidth:200,
        height:140,
    },
    content:{
        padding:25,
        objectfit:'cover'

    },
}
class Scream extends Component {
    render() {
        dayjs.extend(relativeTime);
        const {classes,scream:{body,createdAt,userImage,userHandle,screamId,likeCount,commentCount}}=this.props;
        console.log({userImage});
        console.log(userHandle);
        return (
            
                <Card className={classes.card}>
                    <CardMedia
                    image={userImage}
                    title="Profile Picture"
                    className={classes.image}
                    />
                    <CardContent className={classes.content}>
                        <Typography variant="h5" color="primary" component={Link} to={`/users/${userHandle}`}>
                             {userHandle}   
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                              {dayjs(createdAt).fromNow()}  
                        </Typography>
                        <Typography variant="body1">
                              {body}  
                        </Typography>
                    </CardContent>
                </Card>
            
        );
    }
}

export default withStyles(styles)(Scream);
