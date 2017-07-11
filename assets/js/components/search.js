'use strict';

const Search = () => {
  const search   = $('<div class="container"></div>');
  const row         = $('<div class ="row"></div>');
  const col         = $('<div class="col-md-4 col-md-offset-3"></div>');
  const form        = $('<form action="" class="search-form"></form>');
  const formGroup   = $('<div class="form-group has-feedback"></div>');
  const label       = $('<label for="search" class="sr-only" name="search"></label>');
  const input       = $('<input type="text" class="form-control" name="search" id="search" placeholder="Buscar">');
  const formFB      = $('<span class="glyphicon glyphicon-search form-control-feedback"></span>');

  search.append(row);
  row.append(col);
  col.append(form);
  form.append(formGroup);
  formGroup.append(label);
  formGroup.append(input);
  formGroup.append(formFB);
  return search;
}
