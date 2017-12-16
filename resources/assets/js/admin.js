'use strict'
const Observer = require('observer');

document.onload = (function () {
    //send xhr request onload
    let lang_object;
    // let data_key;
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
                handleChange(ed.getContent(),lang_object);
                });
            }
        });
        tinymce.init({ selector: "#poland-box" });
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
        localStorage.setItem('data', data);
      
        
        const tableData = JSON.parse(localStorage.getItem('data'));
        const wrapper = $("#english-langs .message-widget");
        const table = $('<table><thead><tr></tr></thead></table>');
        const a = document.createElement('a');

        $(wrapper).append(table);
        $(table).append('<tbody></tbody>');
        const tbody = $(table).find('tbody');
        for (let i in tableData) {
            $(tbody).append("<tr><td><a href='#' class='key'>" +tableData[i] + "</td></tr>").add('a');
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
            let data_key = JSON.stringify(e.target.innerHTML);
            localStorage.setItem('data_key',data_key)
            tab_btn_1.removeClass('active');
            tab_btn_2.addClass('active');
            home_tab.removeClass('active show');
            editors_tab.addClass("active show");
            
            let editor_1 = tinymce.editors[0];
            let editor_2 = tinymce.editors[1];
            
            editor_1.setContent("[b]some[/b] html", { format: "bbcode" });
            editor_2.setContent("[b]some[/b] html", { format: "bbcode" });

        })

    }
    function handleChange(data) { 
        let data_key = JSON.parse(localStorage.getItem("data_key"));
        lang_object[data_key] = data;
        console.log(lang_object[data_key]);
    };

    function saveData() {
        
    }
        
    init();
   

})()