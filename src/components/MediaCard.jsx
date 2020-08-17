import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import IconLabelButtons from './Button'
import Typography from '@material-ui/core/Typography'
import apiUtils from '../utils/api'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    width: '95%',
    margin: '50px auto',
  },
})
const MediaCard = props => {
  const { cardData } = props
  const classes = useStyles()
  const linkToFav = cardData._id ? `/favourites/${cardData._id}` : `#`
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={linkToFav}>
          <CardMedia
            component='img'
            alt={cardData.title}
            height='440'
            image={cardData.imageURL}
            title={cardData.title}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {cardData.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {cardData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconLabelButtons
          isSaved={cardData.isSaved}
          saveToDB={() => {
            cardData.isSaved = true
            props.saveToDB(cardData)
          }}
          removeFromDB={() => {
            props.removeFromDB(cardData._id)
          }}
        />
      </CardActions>
    </Card>
  )
}
export default MediaCard
