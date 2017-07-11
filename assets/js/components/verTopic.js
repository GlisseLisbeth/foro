let topicId = getParameterByName('topic_id');

let url = 'http://examen-laboratoria-sprint-5.herokuapp.com/topics/';

let respuesta = url+topicId;

const render = (rootResponses) => {
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(ResponseTopic());
  rootResponses.append(wrapper);
}
const state ={
  responses: null,
}

$( _ => {
   $.getJSON(respuesta+"/responses", (dataResponses) =>{
     state.responses = dataResponses;
     console.log(state.responses);
     render($('#rootViewTopic'));
   });
});
