import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Movies from './movies';

configure({adapter:new Adapter()});

describe('<Movies/>',()=>{

  let wrapper;
  
  beforeEach(()=>{

    wrapper = shallow(<Movies movies />)

  })
  
  it("Should render movies list when movies are greater than 0", ()=>{

      const moviesObject = [{"vote_count":2061,
                          "id":19404,"video":false,
                          "vote_average":9,
                          "title":"Dilwale Dulhania Le Jayenge",
                          "popularity":12.173,
                          "poster_path":"\/uC6TTUhPpQCmgldGyYveKRAu8JN.jpg",
                          "original_language":"hi",
                          "original_title":"दिलवाले दुल्हनिया ले जायेंगे",
                          "genre_ids":[35,18,10749],
                          "backdrop_path":"\/nl79FQ8xWZkhL3rDr1v2RFFR6J0.jpg",
                          "adult":false,
                          "overview":"Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
                          "release_date":"1995-10-20"}]

      wrapper.setProps({movies:moviesObject});
      expect ( wrapper.find('.moviesList')).toHaveLength(1);  
  })

});
