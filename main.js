import axios from "axios";

async function fetchAnime(){
  try{
    const animePics = await axios.get("https://nekos.best/api/v2/search?query=Senko&type=2&amount=1");
    console.log(animePics);
    if(animePics.status === 200){
      return animePics.data;
    } else {
      return null;
    }
    return animePics;
  } catch(error){
   
  console.log("Oh no, something went wrong", error);
}
  
}
fetchAnime();

function showAnimeGif(){
  const animeGifContainer = document.getElementById
  ("animeGifContainer");

  const animeGeneratorButton = document.getElementById
  ("animeGeneratorButton");

  animeGeneratorButton.addEventListener("click", async function(){
    const newAnime = await fetchAnime();

 const updateDetails = (url,img) => {
 img.setAttribute("src", url);
   }
newAnime.results.forEach(element =>{
  const newGifElement = document.createElement ("img");
    updateDetails(element.url,newGifElement);
    animeGifContainer.append(newGifElement);
});
  // for (let i = 0; i < newAnime.results.length; i++){
  //   animeGifContainer.innerHTML = "";
  //   const newGifElement = document.createElement ("img");
  //   updateDetails(newAnime.results[i].url,newGifElement)
  //   animeGifContainer.append(newGifElement);
  // 
})
}
showAnimeGif()