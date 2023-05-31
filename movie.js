function search(){
	var movie=document.getElementById("moviediv")
	document.getElementById("moviediv").innerHTML=" "
	var obj
	var poster=document.getElementById("Search_size").value
	console.log(poster)
	const url = 'https://streaming-availability.p.rapidapi.com/v2/search/title?title='+poster+'&country=us&show_type=movie&output_language=en';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '754ee67f44msh73315c567c13cc6p163e85jsn2f883ac74a0c',
			'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
		}
};
fetch(url,options)
.then(response=>data = response.json())

.then((data)=> {
	obj=data ;
})

.then(() => {
	var span=document.createElement("span")
	for(var n=0;n<=obj.result.length;n++){
		var para=document.createElement("p")
		para.style.color="white"
		var Name=document.createElement("p")
		Name.style.color="white"
		var people=document.createElement("p")
		people.style.color="white"
		var year=document.createElement("p")
		year.style.color="white"
		Name.innerText+="Movie:"+obj.result[n].title
		Name.setAttribute("class","nameclass")
		people.innerText+="staring:"+obj.result[n].cast[n]
		year.innerText+="year:"+obj.result[n].year
		var image=document.createElement("img")
		image.src+=obj.result[n].posterURLs[780]
		var imageDiv=document.createElement("div")
		imageDiv.append(image)
		imageDiv.setAttribute("class","imageDiv")
		image.setAttribute("class","imageclass")
		var div=document.createElement("div")
		div.setAttribute("class","datadiv")
		div.style.display="inline-block"
		div.append(imageDiv,para,Name,people,year)
		span.append(div)
		movie.append(span)
		document.body.append(movie)
	

	}
});
}
