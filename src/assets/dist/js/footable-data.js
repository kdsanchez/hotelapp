/*FooTable Init*/
$(function () {
	"use strict";
	
	/*Init FooTable*/
	$('#footable_1,#footable_3').footable();
	
	/*Editing FooTable*/
	
	var $modal = $('#editor-modal'),
	$editor = $('#editor'),
	$editorTitle = $('#editor-title'),
	ft = FooTable.init('#footable_2', {
		editing: {
			enabled: true,
			addRow: function(){
				$modal.removeData('row');
				$editor[0].reset();
				$editorTitle.text('Añadir nuevo cliente');
				$modal.modal('show');
			},
			editRow: function(row){
				var values = row.val();
				$editor.find('#id').val(values.id);
				$editor.find('#nombre').val(values.nombre);
				$editor.find('#apellido').val(values.apaterno);
				$editor.find('#num_documento').val(values.num_documento);
				$editor.find('#telefono').val(values.telefono);
				$editor.find('#email').val(values.email);

				$modal.data('row', row);
				$editorTitle.text('Editar cliente #' + values.id);
				$modal.modal('show');
			},
			deleteRow: function(row){
				if (confirm('Estas seguro de querer eliminar este cliente?')){
					row.delete();
				}
			}
		}
	}),
	uid = 10;

	$editor.on('submit', function(e){
		if (this.checkValidity && !this.checkValidity()) return;
		e.preventDefault();
		var row = $modal.data('row'),
			values = {
				id: $editor.find('#id').val(),
				firstName: $editor.find('#firstName').val(),
				lastName: $editor.find('#lastName').val(),
				jobTitle: $editor.find('#jobTitle').val(),
				startedOn: moment($editor.find('#startedOn').val(), 'YYYY-MM-DD'),
				dob: moment($editor.find('#dob').val(), 'YYYY-MM-DD')
			};

		if (row instanceof FooTable.Row){
			row.val(values);
		} else {
			values.id = uid++;
			ft.rows.add(values);
		}
		$modal.modal('hide');
	});
});
		