import React, { useState }  from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';


const List = ({childClicked, isLoading }) => {
  const [type, setType] = useState('restaurants');
  const[ratings,setRatings]=useState('');
  const classes = useStyles();

   const places=[
      {name:'Cool place'},
      {name:'Bear place'},
      {name:'Ravanda place'},
      {name:'Tech place'},
      {name:'Chiken place'},
      {name:'zoo place'},
      {name:'mall place'},
      {name:'wow place'},
  ]

    return(
        <div className={classes.container}>
            <Typography variant="h4">
                Restaurants, Hotels and view points around
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e)=>setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="viewpoints">Views</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Ratings</InputLabel>
                <Select value={ratings} onChange={(e)=>setRatings(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>Above 3.0</MenuItem>
                    <MenuItem value={2}>Above 4.0</MenuItem>
                    <MenuItem value={2}>Full 5.0</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place,i)=>(
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />

                    </Grid>
                ))}

            </Grid>

        </div>
        
    );
}
export default List;