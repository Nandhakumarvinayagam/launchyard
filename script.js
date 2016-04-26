
	var json=[
  {
    "name": "Sanchez Hopkins",
    "designation": "Founder and CEO",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/amy_jones.jpg"
  },
  {
    "name": "Abigail Shields",
    "designation": "Software Engineer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/kathleen_byrne.jpg"
  },
  {
    "name": "Juliette Thompson",
    "designation": "Frontend engineer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/julie_taylor.jpg"
  },
  {
    "name": "Marks Whitehead",
    "designation": "Accountant",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/steven_wells.jpg"
  },
  {
    "name": "Ratliff Murphy",
    "designation": "Software Engineer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/ray_moore.jpg"
  },
  {
    "name": "Alyce Hoffman",
    "designation": "Frontend engineer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/paula_gates.jpg"
  },
  {
    "name": "Bauer Cantrell",
    "designation": "Advisor",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/gary_donovan.jpg"
  },
  {
    "name": "Talley Hayden",
    "designation": "Software Engineer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/eugene_lee.jpg"
  },
  {
    "name": "Gonzalez Hurley",
    "designation": "Lead Designer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/james_king.jpg"
  },
  {
    "name": "Trina Bishop",
    "designation": "Designer",
    "avatar": "http://coenraets.org/apps/angular-directory/pics/lisa_wong.jpg"
  }
 ];
 	
 	var myArr = [],i,x,j,index=0;
	
 	function listFunction(){	
		for(i=0;i<json.length;i++){
			myArr[i] = json[i]["name"].toLowerCase();
		}
		x = myArr.sort();
		for(i=0;i<json.length;i++){
			var para = document.createElement("LI");
			liId = "id"+(i+1);
			para.setAttribute('id',liId);
			document.getElementById("addObjectDiv").style.display = "none";
			for(j = 0;j<json.length;j++){
				if(json[j]["name"].toLowerCase() == myArr[i]){
					index=j;
					break;
				}

			}

		var DOM_img = document.createElement("img");
		var image=json[index]["avatar"];
		DOM_img.src = image;
		para.appendChild(DOM_img);

		var node = document.createTextNode(myArr[i]);
		para.appendChild(node);
		para.appendChild(document.createElement("br"));
	
	
		node = document.createTextNode(json[index]["designation"]);
		para.appendChild(node);
		para.appendChild(document.createElement("br"));
	
		var element = document.getElementById("list");
		element.appendChild(para);
	
		} 
	}

	addButton.onclick = function addFunction(){
			json.push({ 
       			 "name" : newName.value,
       			 "designation"  : newDesignation.value,
        		"avatar": "http://coenraets.org/apps/angular-directory/pics/eugene_lee.jpg"
            });
            document.getElementById("newName").value="";
            document.getElementById("newDesignation").value="";
            alert("object added");			
	}
	viewButton.onclick = function addFunction(){
			console.log("length of json="+json.length);
			console.log(json[json.length-1]);
			
			document.getElementById("addObjectDiv").style.display = "none";
					
			for(i=0;i<myArr.length;i++){
				
				var parent = document.getElementById("list");
				var child = document.getElementById("id"+(i+1));
				parent.removeChild(child);
			}
			listFunction();
	}

                var count=0;
		
	myText.onkeyup = function myFunction(e){	
		count=0;
		var fil=document.getElementById("myText").value;
		var file=fil.toLowerCase();
		if (file==""){
			for(var i=0;i<myArr.length;i++){
			document.getElementById("id"+(i+1)).style.display = "block";
			}
		}
		else{
			for(i=0;i<myArr.length;i++){
				if(myArr[i].indexOf(file)<0){
						document.getElementById("id"+(i+1)).style.display = "none";
						count++;
						if(count>=(myArr.length))
						{
						document.getElementById("addObjectDiv").style.display="block";
						}
					}	
				else{
					document.getElementById("id"+(i+1)).style.display = "block";
					document.getElementById("addObjectDiv").style.display="none";
					}
			}			
		}
	}
	
