(function () {
    var me = {};
    var form = document.querySelector('.fonm-conteiner');

    me.open = function () {
      form.classList.remove('is-hidden');
    };
    
    me.close = function () {
      form.classList.add('is-hidden');
    };

    window.form = me;
}());