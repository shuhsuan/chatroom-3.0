import axios from "axios"; //require('axios') shows up as axios is not a function error

 const getGrammar = (text) => axios({ 
  method: 'POST',
  url: 'https://grammarbot-neural.p.rapidapi.com/v1/check',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': DUMMY_API_KEY,
    'X-RapidAPI-Host': 'grammarbot-neural.p.rapidapi.com'
  },
  data: {
    text: text,
    lang: 'en'
  }
});

export default getGrammar;