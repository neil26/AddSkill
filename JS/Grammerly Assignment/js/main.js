
function ReadFile(files){	
    let file = inputfile.files[0];	
    let reader = new FileReader();	
    reader.readAsText(file);	
    reader.onload = function(){	
        filecontent.value = reader.result;
        spellCheck();	         
    }	
}	

async function spellCheck() {	
    let badwords=[];
    var text = filecontent.value;
    let url = "https://api.textgears.com/spelling?key=Bkvnux2LCaXwSdR1&text=" + text + "!&language=en-GB";	
    let response = await fetch(url);
    let user = await response.json();
    console.log(user);	
    for(item of user.response.errors){
        badwords.push(item.bad);
    }
    console.log(badwords);
    document.getElementById('result').innerHTML = transformContent(text, badwords);
}	

function transformContent(content, keywords){
  let temp = content

  keywords.forEach(keyword => {
    temp = temp.replace(new RegExp(keyword, 'ig'), wrapKeywordWithHTML(keyword, `https://www.google.com/search?q=${keyword}`))
  })

  return temp
}

function wrapKeywordWithHTML(keyword, url){
  return ` <span style="font-weight: bold; color: red; font-size: 15px">  ${keyword}  </span> </a>`
}