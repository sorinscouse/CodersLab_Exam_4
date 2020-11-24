 $(document).ready(() => {
   const url = 'https://fe-api-jquery.firebaseio.com/fe-api-jquery.json';
   $.ajax({
     url: url,
     title: '',
     year: ''
   }).done(function(res) {
     console.log(res);
     res.forEach(function(e, i) {
       $('#movies').before(`<h2>${e.title}</h2>`, `<h3>${e.year}</h3>`);
     });
   });
 });

