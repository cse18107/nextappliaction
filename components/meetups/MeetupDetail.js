import React from 'react';
import classes from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
    <img src={props.image} alt={props.title}/>
    <address>{props.address}</address>
    <p>{props.description}</p>
  </section>
  )
}

export default MeetupDetail