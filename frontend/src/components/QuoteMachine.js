import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote}) => (
    <Card>
        <CardContent>
            <Typography id="text">
                {selectedQuote.quote} - <span id="author">{selectedQuote.author}</span>
            </Typography>
        </CardContent> 
                
        <CardActions>
            <Button size="small" onClick={assignNewQuoteIndex} id="new-quote">New Quote</Button>
            <IconButton id="tweet-quote" 
                target=""
                href={`https://twitter.com/intent/tweet?hashtags=quoteProject&text=${selectedQuote.quote} - ${selectedQuote.author}`}
            >
                <FontAwesomeIcon icon={faTwitter} size="sm"></FontAwesomeIcon>
            </IconButton>
        </CardActions>
        
    </Card>
);

export default QuoteMachine;

