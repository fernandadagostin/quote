import React, { Component } from 'react';
import 'typeface-roboto';
import QuoteMachine from './components/QuoteMachine';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  }
};

const colors = ['#e08283', '#947cb0', '#aea8d3', '#a537fd', '#2c82c9', '#2574a9', '#89c4f4', '#23cba7', '#86e2d5', '#03c9a9', '#f27935', '#fcd670', '#fde3a7', '#ffff7e', '#f7ca18'];

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      color: null,
      quotes: [],
      selectedQuoteIndex: null
    }
    this.selectQuoteIndex = this.gererateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  get seletedColor(){
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  /**
   * Returns an integer representing an index in state.quotes
   * If state.quotes is empty, returns undefined
   */
  gererateNewQuoteIndex(){
    if(!this.state.quotes.length){
      return undefined;
    }
    return Math.floor(Math.random() * this.state.quotes.length);
  }
  
  assignNewQuoteIndex(){
    this.setState({ selectedQuoteIndex: this.gererateNewQuoteIndex()});
  }

  assignNewColorIndex(){
    this.setState({ color: this.seletedColor })
  }

  render () {
      console.log(this.state.selectedQuoteIndex);
      console.log(this.state.color)
    
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify="center" container>
        <Grid xs={11} lg={8} item>
          {
            this.selectedQuote ? 
            < QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} /> :
            null
          }
          
        </Grid>
      </Grid>
    );
  }
}


  /*
  User Story #6: On first load, my quote machine displays a random quote in the element with id="text".
  User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".
  User Story #8: When the #new-quotebutton is clicked, my quote machine should fetch a new quote and display it in the #textelement.
  User Story #9: My quote machine should fetch the new quote's author when the #new-quotebutton is clicked and display it in the #authorelement.
  User Story #10: I can tweet the current quote by clicking on the #tweet-quoteaelement. This aelement should include the "twitter.com/intent/tweet"path in it's hrefattribute to tweet the current quote.
  User Story #11: The #quote-boxwrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.
  */


export default withStyles(styles)(App);

