var vueApp = {
    el: "#app",
    data: {},
    methods:{
        openLink: function (link) {   
            window.open(link, "_blank");    
        }
      }
}

function isMobile() {
    try{ document.createEvent("TouchEvent"); return true; }
    catch(e){ return false; }
  }

vueApp.data.isMobile = isMobile();


$.getJSON("data/content.json", (res) => {
    console.log(res);
    vueApp.data.projects = res.projects;
    var app = new Vue(vueApp);
});
