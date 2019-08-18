import React from 'react';

const getRandomInteger = maxNumber => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {

  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);

    return (
      <a href="http://lorempixel.com">
        <img height={this.props.height} width={this.props.width} src={`http://lorempixel.com/400/200/cats/${randomCat}`} alt="Random cat" />
      </a>
    );
  }
}

RandomCat.defaultProps = {
  height: '200px',
  width: '400px'
}

export default RandomCat;