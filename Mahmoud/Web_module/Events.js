
const  test_event = (html_element_id) => {
     var elem = document.querySelector(`#${html_element_id}`);
     elem.addEventListener('change',(e,data)=>{
        console.log(e.target.value);
    },false)
  }


  





 
  window.addEventListener("load",
  document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
            test_event('e')
})
  , false);


  