'use strict';

const ItemResponse = (dataResponse) => {
  const itemResponse         = $('<div class="response-'+dataResponse.id+ '"></div>');
  const colContent       = $('<div class="col-md-6 col-md-offset-3"></div>');
  const spanContent   = $('<span>'+ dataResponse.content+ '- </span>');
  const spanAuthor    = $('<span> Por: '+dataResponse.author_name+'</span>');
  const lines           = $('<hr></hr>');
  itemResponse.append(colContent);
  colContent.append(spanContent);
  colContent.append(spanAuthor);
  itemResponse.append(lines);

  return itemResponse;
}

const ResponseTopic = () =>{
  const responses          = $('<section class="response-responses"></section>');
  const container       = $('<div class="container"></div>');
  const row             = $('<div class="row"></div>');
  const colTitle        = $('<div class="col-md-9 text-center"></div>');
  const titleResponse     = $('<h1>Foro Cool</h1>');
  const colButtonCreate = $('<div class="col-md-3"></div>');
  const buttonCreate    = $('<button type="button" class="btn btn-info btn-lg" id="modalResṕnseNew">Crear Respuesta</button>');
  const responseDiv        = $('<div class="content-response"></div>');
  const modal             = $('<div id="modalResṕnseNew" class="modal"></div>');
  const modalDialog       = $('<div class="modal-dialog role="document"></div>');
  const formModal         = $('<form id="formNewTheme"></form')
  const modalContent      = $('<div class="modal-content"></div>');
  const modalHeader       = $('<div class="modal-header"</div>');
  const buttonClose       = $('<button type="button" class="close" data-dismiss="modal">&times;</button>');
  const titleHeader       = $('<h4 class="modal-title" id="modalLabel">Nueva Respuesta</h4>');
  const modalBody         = $('<div class="modal-body"></div>');
  const formGroup         = $('<div class="form-group"></div>');
  const labelAuthor       = $('<label for="theme-author">Por: </label>');
  const inputAuthor       = $('<input type="text" class="form-control" id="theme-author" placeholder="Ingrese su nombre">');
  const labelContent       = $('<label for="theme-content">Mensaje: </label>');
  const inputContent       = $('<input type="text" class="form-control" id="theme-content" placeholder="Mensaje">');
  const modalFooter       = $('<div class="modal-footer"></div>');
  const buttonModalClose  = $('<button type="button" class="btn btn-default">Cancelar</button>');
  const buttonModalCreate  = $('<button type="submit" class="btn btn-success">Crear</button>');

  modal.css("display","none");
  buttonCreate.on('click', (e) =>{
    e.preventDefault();
    modal.css("display", "block");
  });

  // buttonModalCreate.on('click', (e) =>{
  //   e.preventDefault();
  //   $.post('https://examen-laboratoria-sprint-5.herokuapp.com/topics', {
  //       author_name: inputAuthor.val(),
  //       content: inputContent.val()
  //   }, function (data) {
  //       //para ocultar modal y enviar nuevo tema a html
  //       modal.css("display","none");
  //       alert("datos guardados");
  //   });
  // });

  buttonModalClose.on('click', (e) =>{
    modal.css("display", "none");
  });

  state.responses.forEach((response) => {
    responseDiv.append(ItemResponse(response));

  });

  responses.append(container);
  container.append(row);
  row.append(colTitle);
  colTitle.append(titleResponse);
  row.append(colButtonCreate);
  colButtonCreate.append(buttonCreate);
  responses.append(responseDiv);
  responses.append(modal);
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

  return responses;
}
