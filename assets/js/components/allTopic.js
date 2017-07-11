'use strict';

const ItemTopic = (dataTopic) => {
  const topic         = $('<div class="topic-'+dataTopic.id+ '"></div>');
  const colContent       = $('<div class="col-md-6 col-md-offset-3"></div>');
  const spanContent   = $('<span>'+ dataTopic.content+ '- </span>');
  const spanAuthor    = $('<span> Por: '+dataTopic.author_name+'</span>');
  const colResponses  = $('<div class="col-md-2 pull-left"></div>');
  const spanResponses = $('<span>Respuestas: '+dataTopic.responses_count+'</span>');
  const viewResponses = $('<a href="verTopic.html?topic_id='+dataTopic.id+'">Ver respuesta</a>');
  const lines           = $('<hr></hr>');
  topic.append(colContent);
  colContent.append(spanContent);
  colContent.append(spanAuthor);
  topic.append(colResponses);
  colResponses.append(spanResponses);
  colContent.append(viewResponses);
  topic.append(lines);

  viewResponses.on('click',(e)=>{
  });

  return topic;
}

const Topics = () => {
  const topics          = $('<section class="topics"></section>');
  const container       = $('<div class="container"></div>');
  const row             = $('<div class="row"></div>');
  const colTitle        = $('<div class="col-md-9 text-center"></div>');
  const titleTopics     = $('<h1>Foro Cool</h1>');
  const colButtonCreate = $('<div class="col-md-3"></div>');
  const buttonCreate    = $('<button type="button" class="btn btn-info btn-lg" id="modalThemeNew">Crear Temas</button>');
  const topicDiv        = $('<div class="content-topic"></div>');
  const modal             = $('<div id="modalThemeNew" class="modal"></div>');
  const modalDialog       = $('<div class="modal-dialog role="document"></div>');
  const formModal         = $('<form id="formNewTheme"></form')
  const modalContent      = $('<div class="modal-content"></div>');
  const modalHeader       = $('<div class="modal-header"</div>');
  const buttonClose       = $('<button type="button" class="close" data-dismiss="modal">&times;</button>');
  const titleHeader       = $('<h4 class="modal-title" id="modalLabel">Tema nuevo</h4>');
  const modalBody         = $('<div class="modal-body"></div>');
  const formGroup         = $('<div class="form-group"></div>');
  const labelAuthor       = $('<label for="theme-author">Autor</label>');
  const inputAuthor       = $('<input type="text" class="form-control" id="theme-author" placeholder="Autor">');
  const labelContent       = $('<label for="theme-content">Tema</label>');
  const inputContent       = $('<input type="text" class="form-control" id="theme-content" placeholder="Contenido">');
  const modalFooter       = $('<div class="modal-footer"></div>');
  const buttonModalClose  = $('<button type="button" class="btn btn-default">Cancelar</button>');
  const buttonModalCreate  = $('<button type="submit" class="btn btn-success">Crear</button>');

  modal.css("display","none");
  buttonCreate.on('click', (e) =>{
    e.preventDefault();
    modal.css("display", "block");
  });

  buttonModalCreate.on('click', (e) =>{
    e.preventDefault();
    $.post('https://examen-laboratoria-sprint-5.herokuapp.com/topics', {
        author_name: inputAuthor.val(),
        content: inputContent.val()
    }, function (data) {
        //para ocultar modal y enviar nuevo tema a html
        modal.css("display","none");
        alert("datos guardados");
    });
  });

  buttonModalClose.on('click', (e) =>{
    modal.css("display", "none");
  });

  state.topics.forEach((topic) => {
    topicDiv.append(ItemTopic(topic));

  });

  topics.append(container);
  container.append(row);
  row.append(colTitle);
  colTitle.append(titleTopics);
  row.append(colButtonCreate);
  colButtonCreate.append(buttonCreate);
  topics.append(topicDiv);
  topics.append(modal);
  modal.append(modalDialog);
  modalDialog.append(formModal);
  formModal.append(modalContent);
  modalContent.append(modalHeader);
  modalHeader.append(buttonClose);
  modalHeader.append(titleHeader);
  modalContent.append(modalBody);
  modalBody.append(formGroup);
  formGroup.append(labelAuthor);
  formGroup.append(inputAuthor);
  formGroup.append(labelContent);
  formGroup.append(inputContent);
  modalContent.append(modalFooter);
  modalFooter.append(buttonModalClose);
  modalFooter.append(buttonModalCreate);

  return topics;
}
