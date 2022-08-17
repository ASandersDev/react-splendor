import React, {useState} from 'react';
import * as tokenConstants from '../constants/token-constants'

const Token = ({type}) => {
  let tokenImgSrc;

  switch(type){
    case tokenConstants.EMERALD_TOKEN:
      tokenImgSrc = 'img-em';
      break;
    case tokenConstants.DIAMOND_TOKEN:
      tokenImgSrc = 'img-dia';
      break;
    case tokenConstants.SAPPHIRE_TOKEN:
      tokenImgSrc = 'img-sapph';
      break;
    case tokenConstants.ONYX_TOKEN:
      tokenImgSrc = 'img-onyx';
      break;
    case tokenConstants.RUBY_TOKEN:
      tokenImgSrc = 'img-ruby';
      break;
      case tokenConstants.GOLD_TOKEN:
        tokenImgSrc = 'img-gold';
        break;
    default:
      tokenImgSrc = 'default'
  }

  return (
    <div className={type}>
      <img src={tokenImgSrc} alt={type} />
    </div>
  )
}

export default Token