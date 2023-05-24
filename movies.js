// function playAudio(){
function search(){
	var movie=document.getElementById("moviediv")
	movie.style.display="none"
	var obj
var Actor=document.getElementById("Search_size").value
console.log(Actor)
// const url = 'https://actor-movie-api1.p.rapidapi.com/getid/'+Actor+'?apiKey=62ffac58c57333a136053150eaa1b587';
// 			// 'https://actor-movie-api1.p.rapidapi.com/getid/prabhas?apiKey=62ffac58c57333a136053150eaa1b587';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '754ee67f44msh73315c567c13cc6p163e85jsn2f883ac74a0c',
// 						//   '754ee67f44msh73315c567c13cc6p163e85jsn2f883ac74a0c',
// 		'X-RapidAPI-Host': 'actor-movie-api1.p.rapidapi.com'
// 	}
	
// };
const url = 'https://online-movie-database.p.rapidapi.com/auto-complete?q='+Actor+'';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '754ee67f44msh73315c567c13cc6p163e85jsn2f883ac74a0c',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};
fetch(url,options)
.then(response=>data = response.json())

.then((data)=> {
	obj=data ;
})
// console.log(obj)
.then(() => {
	console.log(obj);
	console.log(obj.d.length)
	// var image=document.createElement("img")
	var div=document.createElement("div")
	var main=document.createElement("div")
	div.setAttribute("class","div1")
	// var table = document.createElement("table")
	for(var n=0;n<=obj.d.length;n++){
		var para=document.createElement("p")
		para.style.color="white"
		var Name=document.createElement("p")
		Name.style.color="white"
		var people=document.createElement("p")
		people.style.color="white"
		var year=document.createElement("p")
		year.style.color="white"
		Name.innerText+="Movie:"+obj.d[n].l
		people.innerText+="staring:"+obj.d[n].s
		year.innerText+="year:"+obj.d[n].y
		var image=document.createElement("img")
		var div=document.createElement("div")
		var main=document.createElement("div")
		var span=document.createAttribute("span")
		main.style.display="inline-block"
		main.style.border="1px solid black"
		div.setAttribute("class","div1")
		main.style.width="310px";
		image.src=obj.d[n].i.imageUrl
		image.style.height="250px";
		image.style.width="320px";
		div.append(image,para,Name,people,year)
		main.append(div)
		// div.append(span)
		// span.append(div)
		// div.innerText+=(image)
		// ,"Movie:"+obj.d[n].l,"staring:"+obj.d[n].s,"year:"+obj.d[n].y
		// console.log(obj.d[j].i.imageUrl)
		// var col=document.createElement("td")
		// var br=document.createElement("br")
	    // col.innerText+=("Movie:"+obj.d[n].l)
        // var col1=document.createElement("td")
        // col1.innerText+=("staring:"+obj.d[n].s)
		// var col2=document.createElement("td")
        // col2.innerText+=("year:"+obj.d[n].y)
		// var row = document.createElement("tr")
		
		// row.append(div,col,col1,col2)
		// table.append(row)
		// break
		
	// }
	document.body.append(main)
}

});
}

	// for(var i=0;i<obj.length;i++){
	// 	console.log(obj[i].original_title,obj[i].character)
	// }
	// var table = document.createElement("table")
    //     for(var i = 0;i < obj.length;i++){
    //         var row = document.createElement("tr")
    //         for(var j = 0;j <obj.length;j++){
	// 			var div=document.createElement("div")
    //             var image=document.createElement("img")
    //             image.src=obj.backdrop_path
    //          	div.append(image)
	// 				col4.innerText+=(result.data[i].avatar)
    //             var col=document.createElement("td")
    //             col.innerText+=(obj[i].original_title)
    //             var col1=document.createElement("td")
    //             col1.innerText+=(obj[i].character)
    //             // var col2=document.createElement("td")
    //             // col2.innerText+=(result.data[i].first_name)
    //             // var col3=document.createElement("td")
    //             // col3.innerText+=(result.data[i].last_name)
    //             // var col4=document.createElement("td")
    //             var div=document.createElement("div")
    //             var image=document.createElement("jpg")
    //             image.src=obj.backdrop_path

    //             // col4.innerText+=(result.data[i].avatar)
    //             div.append(image)
    //             row.append(div,col,col1)
    //             table.append(row)
    //             break
    //             // console.log(result.data[j].id)
    //         }
    //         document.body.append(table)
    //     }

//     console.log(obj);
// 	console.log(obj.length)
// });
// }
	// console.log(obj.data[0].preview)
	// console.log(obj.playlists.items[0].data.images.items[0].sources[0].url);
	// console.log(obj.playlists.items[0].data.uri)
	// var x=document.createElement("img")
	// var y=document.createElement("audio")
	
	// var div=document.createElement("div")
	// y.src=obj.data[0].preview
	// y.play()
	// x.src=obj.playlists.items[0].data.images.items[0].sources[0].url
// 	div.append(x,y)
// 	document.body.append(div)
   