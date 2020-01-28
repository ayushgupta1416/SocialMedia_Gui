import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Scream from '../components/Scream'


class home extends Component {
    state={
        screams:null
    }
    componentDidMount(){
        axios.get(`/screams`)
        .then(res=>{
            //console.log(res.data)
            this.setState({
                screams:res.data
            })
            //console.log(`userImage is here ${res.data.commentCount}`)
        })
        .catch(err=>{
            console.log(err);
        })

        
    }
    render() {
        let recentScreams=this.state.screams ?(
            this.state.screams.map(scream=> <Scream key={scream.screamId} scream={scream}/>)
        ) : <p>loading...</p>
        return (
           <Grid container spacing={6}>
               <Grid item sm={8} xs={12}>
                    {recentScreams}
               </Grid>
               <Grid item sm={4} xs={12}>
                   <p>Hyy</p>
               </Grid>
            </Grid>
        );
    }
}

export default home;