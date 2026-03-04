import React from 'react'
import{
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
  Typography,
  Stack,
  Chip,
  Button,
  CardActions,
} from '@mui/material'
import {link} from 'react-router-dom';
import { getimageurl } from '../utils/getimageurl';



const Jobcard = ({job,onDelete}) => {
  const img = job?.jobimage ? getimageurl(job.jobimage) : "";
  return (
    <div>
      <card>
        {img ? (
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt={job?.jobtitle}
          />
        ) : (
          <CardMedia> 
            <Typography variant="h5" component="div" align="center">
              No Image Available
            </Typography>
           </CardMedia>)}
        <CardContent>
          <Typography variant="h5" component="div">
            {job?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {job?.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Company: {job?.company}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {job?.location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Salary: {job?.salary}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Job Type: {job?.jobType}
          </Typography>
        </CardContent>
      </card>
    </div>
  )
}

export default Jobcard
