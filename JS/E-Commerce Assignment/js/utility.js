$(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } 
            else{
                $(".box").hide();
            }
        });
    }).change();
    $(window).keydown(function(event){
        if(event.keyCode == 13 && (noenter()== true)) {
          event.preventDefault();
          return false;
        }
      });
});

function validateEmail(){
    var emailField = document.getElementById("result").value;
    atpos = emailField.indexOf("@");
    dotpos = emailField.lastIndexOf(".");

    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        document.getElementById("result").className = "email-warning";
        return false;
    }
    document.getElementById("result").className = "email-valid";
    return true;

}

function mySearchFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    var parent = document.getElementsByClassName("panel-heading");
    for (i = 0; i < parent.length; i++) {
        txtValue = parent[i].textContent || parent[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            parent[i].parentElement.parentElement.style.display = "";
        }else{
            parent[i].parentElement.parentElement.style.display = "none";
        }
    }
  }

function incrementCounter(el) {
	val = $(el).find(".counter").html(function(i, val) { return +val+1 })
}

function noenter() {
    var input = document.getElementById("searchInput");
    if(window.event.code=="Enter"){
    optionMaker(input.value);
    input.value = '';
    }
    return true;
}

const optionMaker = (text) => {
    const historyOptions = document.createElement('OPTION');
    historyOptions.setAttribute("value", text);
    var t = document.createTextNode(text);
    historyOptions.appendChild(t);
    document.getElementById("sel2").appendChild(historyOptions);
  }
