async function fetchData(){

    let res = await fetch("https://icanhazdadjoke.com/slack")

    let  result = await res.json()
    console.log(result.attachments[0].fallback)
    let joke=result.attachments[0].fallback;
    const jokeelement = document.getElementById('jokeElement');

    jokeelement.innerHTML=joke


}
fetchData()