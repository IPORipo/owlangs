jQuery(document).ready(function ($) { 
    const node = $('#english-langs');
    tinymce.init({
        selector: '#language-editor-2',
        branding: false,
        toolbar: 'bold,italic',
        menu: '',
        menubar: false,
        init_instance_callback: function (editor) {
            var input;
            $(node).on('click', 'a', function (e) {
                e.preventDefault();
                 input = $(e.target).find('input').val();
                $('#language-editor-2').tinymce().dom.remove($('#language-editor-2').tinymce().dom.select('p'));
                $('#language-editor-2').tinymce().execCommand('mceInsertContent', false, text);
            });
            editor.on('keyup', function (e) {
                $(input).val();
                $('#language-editor-2').tinymce().getContent({ format: 'html' });
            });
        }
        
    });
    tinymce.init({
        selector: '#language-editor',
        branding: false,
        toolbar: 'bold,italic',
        menu: '',
        menubar: false
    });

    function editLang(editor, selector) {
        
    }

    
});