'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Search());
  wrapper.append(Topics());
  root.append(wrapper);
}

const state = {
  topics: null,  
}
$( _ => {
   $.getJSON('https://examen-laboratoria-sprint-5.herokuapp.com/topics', (dataTopics) =>{
     state.topics = dataTopics;
     render($('#root'));
   });
});
