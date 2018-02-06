$(clickMe).on('click', function(){
  // console.log(1)
  $(popover).show()
  $(document).one('click', function(){
    $(popover).hide()
  })
})
$(wrapper).on('click', function(e){
  e.stopPropagation()
})

