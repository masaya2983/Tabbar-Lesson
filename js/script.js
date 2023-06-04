$('#tab-contents .tab[id !="tab"]').hide();
$('#tab-menu a').on('click', function(event){
 $("#tab-contents .tab").hide();
  $("#tab-mwnu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("heef")).show();
  event.preventDefault();
});
