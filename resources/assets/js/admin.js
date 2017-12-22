'use strict'

jQuery(document).ready(function($){
     //send xhr request onload
    let lang_object;
    let data_key;
    function init(){
        $("#profile-tab").on('click', function (e) {
            e.preventDefault();
        });
        initTinyMce();
    }
    
    function initTinyMce() {
        tinymce.init({
            selector: "#english-box",
            setup: function(ed) {
            ed.on('keyup', function(e) {
                handleChange(ed.getContent(),ed.id);
                });
            }
        });
        tinymce.init({ selector: "#poland-box" ,setup: function(ed) {
            ed.on('keyup', function(e) {
                handleChange(ed.getContent(),ed.id);
                });
            }});
    }
    
    function loadData(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
             xhr.onload = () => {
               resolve(xhr.responseText);
             };
             xhr.onerror = () => {
               reject(xhr.statusText, xhr.status);
             };
             xhr.send();
        })
    }
    $(window).bind("storage", function(e) {
        console.log("storage changed");
    });
    loadData("/admin/translations-get-translations").then(data => {
        lang_object = JSON.parse(data);
        
        const wrapper = $("#english-langs .message-widget");
        const table = $('<table><thead><tr></tr></thead></table>');
        const a = document.createElement('a');

        $(wrapper).append(table);
        $(table).append('<tbody></tbody>');
        const tbody = $(table).find('tbody');
        for (let i in lang_object['en_langs']) {
            $(tbody).append("<tr><td><a href='#' class='key'>" +lang_object['en_langs'][i] + "</td></tr>");
        }
        handleClick(tbody);
    });
    
    function handleClick(tbody) {
        let a = $(tbody).find('a');
        let home_tab = $("#home");
        let tab_btn_1 = $("#home-tab");
        let tab_btn_2 = $("#profile-tab");
        let editors_tab = $("#translate");
        $(a).css('cursor', 'pointer');
        
        $(a).on('click', function (e) {
            e.preventDefault();
            data_key = e.target.innerHTML;
            
            tab_btn_1.removeClass('active');
            tab_btn_2.addClass('active');
            home_tab.removeClass('active show');
            editors_tab.addClass("active show");
            
            let editor_1 = tinymce.editors[0];
            let editor_2 = tinymce.editors[1];
            
            editor_1.setContent(lang_object['en_langs'][data_key], { format: "html" });
            editor_2.setContent(lang_object['pl_langs'][data_key], { format: "html" });

        })

    }
    function handleChange(data,id) { 
        switch(id) {
            case 'english-box': 
                lang_object['en_langs'][data_key] = data;
                break;
            case 'poland-box': 
                lang_object['pl_langs'][data_key] = data;
                break;
        }
       
    };

    function saveData() {
        let token = $('input[name=_token]').val()
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", 'translations-save-translations');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('X-CSRF-Token', token);
             xhr.onload = () => {
               resolve(xhr.responseText);
             };
             xhr.onerror = () => {
               reject(xhr.statusText, xhr.status);
             };
             xhr.send(JSON.stringify(lang_object));
        })
    }
        
    $('#save-btn').on('click',function(e){
        saveData().then(data => console.log(data));
    });

    init();
   

})()
