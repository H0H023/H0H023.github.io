
function checkinput(input){
  var search_form = document.getElementById('search-form')
  var content = document.getElementById('content')
  var len = input.length;

  if(input.includes(":r")){
    var search = input.slice(0,-2)
    content.value = search
    content.placeholder = "reddit search"
    search_form.action = "https://www.reddit.com/search/"
  }
  if(input.includes(":y")){
    var search = input.slice(0,-2)
    content.value = search
    content.placeholder = "youtube search"
    search_form.action = "https://www.youtube.com/search"
  }
  if(input.includes(":g")){
    var search = input.slice(0,-2)
    content.value = search
    content.placeholder = "google search"
    search_form.action = "https://www.google.co.uk/search"
  }
  if(input.includes(":se")){
    var search = input.slice(0,-3)
    content.value = search
    content.placeholder = "stackexchange search"
    search_form.action = "https://stackexchange.com/search"
  }
}
