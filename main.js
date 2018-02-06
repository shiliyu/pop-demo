$(clickMe).on('click', function(){
  if($(popover).is(':hidden')){
    $(popover).show()
  } else {
    $(popover).hide()
  }
  
  $(document).one('click', function(){
    // console.log(e.currentTarget)
    $(popover).hide()
  })
})
$(wrapper).on('click', function(e){
  e.stopPropagation()
})




