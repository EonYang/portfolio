var vueApp = {
    el: "#app",
    data: {},
    methods:{
        openLink: function (link) {   
            window.open(link, "_blank");    
        }
      }
}

$.getJSON("data/content.json", (res) => {
    console.log(res);
    vueApp.data = res;
    var app = new Vue(vueApp);
});




