const captions =
    [
        "Total After Bills",
        "When the professor is passionate about teaching and you genuinely understan and enjoy the class.",
        "When ur best friend calls u and have some gossip to tell u.",
        "When you did one set of squats and you check the mirror to see if the booty grew already.",
        "When you go off on him and later on realize you were actually wrong.",
        "When you tell everyone about your summer body goals, but you didn’t tell them which summer",
        "When You Work In A Dope Track",
        "When You’ve Been Eating",
        "When you’ve been eating healthy for the past 15 minutes and STILL see no progress.",
        "When your girl says she doesn’t want anything from MCDonalds but you turn your head and see her like this",
        "Whenever You Knock Me Down",
        "Why In The World",
        "Without Spray Tan Or Hair",
        "Your Brother Will Never Say",
        "Can’t believe I ate the whole thing.",
        "Dank memes for the dankest of dank memes!",
        "Don’t judge me!",
        "Don’t worry about what other people think of you because they don’t know what they’re.",
        "Don’t worry guys, we’re just getting started.",
        "Don’t worry, I won’t tell anyone what you said.",
        "He’s so meta he’s not even real!",
        "How does this happen?",
        "I can’t believe I used to be so serious.",
        "I don’t care if you’re the best there is at what you do, there’s always someone better than you.",
        "I don’t know if my heart is as big as yours, but I’ll take it anyway!",
        "I don’t know what it is, but I want to buy it.",
        "I don’t know what your problem is, but I’ll bet it’s hard to pronounce.",
        "I don’t need to be perfect because I’m already perfect just the way I am.",
        "I don’t think this board game can be beaten.",
        "I like to think of myself as a meme",
        "I wish I could say more, but I’m just too lazy. – Netflix",
        "I’m a meme, get used to it",
        "I’m just memeing with my life",
        "I’m just trying to keep up with your pace!",
        "I’m not a bad person, I just have a really good sense of humor.",
        "I’m not a meme, I’m a living breathing person.",
        "I’m not crying, I’m just laughing so hard my face is wet.",
        "I’m not going to stand here and be a hypocrite",
        "I’m not going to take this seriously anymore.",
        "I’m not laughing at you, I’m laughing with you.",
        "I’m not saying I’m better than you, I’m just saying that you’re not as good as me.",
        "I’m not the one who is on my phone all day.",
        "I’m not trying to say I’m better than you, I’m just trying to prove that I can do better than you.",
        "I’m sorry, I’m just not that into you.",
        "If it doesn’t fit, force it!",
        "If you want to make God laugh, tell him about your plans.",
        "It’s always good when you’re at work and you can take your shoes off.",
        "It’s like I’m living in a dream world now.",
        "It’s not easy being green.",
        "It’s okay if you’re not perfect because nobody is.",
        "Lol what?",
        "Memes are a new religion",
        "Please stop trying to make me famous on Instagram",
        "Sometimes you just need to laugh at yourself for a change",
        "The best part about being single? No one to tell you what to do!",
        "The more you know",
        "The only thing that makes me feel better about my life is knowing that someone else’s is worse.",
        "The only way to get rid of a temptation is to yield to it.",
        "The world is too serious.",
        "This guy’s got a lot of nerve",
        "This is my new favorite meme",
        "This isn’t my first time on this ride. ",
        "This was meant to happen",
        "We’re so close now, but it’s not quite enough to make me feel like we’re over yet…",
        "You can’t catch me in the middle of a meme!",
        "You can’t see the forest for the trees.",
        "You can’t spell",
        "You can’t spell ‘dumb’ without ‘U-M-B-A’.",
        "You know what’s weird? When people think they’re funny.",
        "You’re going to need a bigger boat.",
        "You’re so meta you’re not even real",
        "You’re the only one who’s allowed to laugh at me."
    ]



let videoContainer=document.getElementById("video-container")







// fetch("https://newsapi.org/v2/everything?q=technology&from=2023-03-02&sortBy=publishedAt&apiKey=ee85dbccca2842309262f2907c5eac22")
// .then(response => response.json())
// .then(response => console.log(response))

fetch("https://api.giphy.com/v1/gifs/random?api_key=U30oJ969UfRjxSHJyxkv9Z7HVTh100M5&tag=&rating=g")
.then(response => response.json())
.then(response => {
    let newVideo1=document.createElement("iframe")
    newVideo1.setAttribute("src",response["data"]["embed_url"])
    newVideo1.setAttribute("frameborder",0)
    videoContainer.appendChild(newVideo1)

    let newVideo2=document.createElement("img")
    newVideo2.setAttribute("src","assets/images/main-video-2.gif")
    videoContainer.appendChild(newVideo2)
})

fetch("https://api.giphy.com/v1/gifs/random?api_key=U30oJ969UfRjxSHJyxkv9Z7HVTh100M5&tag=&rating=g")
.then(response => response.json())
.then(response => {
    let newVideo1=document.createElement("iframe")
    newVideo1.setAttribute("src",response["data"]["embed_url"])
    newVideo1.setAttribute("frameborder",0)
    videoContainer.appendChild(newVideo1)

    let newVideo2=document.createElement("img")
    newVideo2.setAttribute("src","assets/images/main-video-4.gif")
    videoContainer.appendChild(newVideo2)

    let newVideo3=document.createElement("img")
    newVideo3.setAttribute("src","assets/images/main-video-5.gif")
    videoContainer.appendChild(newVideo3)
})

// class funFact {
//     constructor() { }

//     generate() {
//         let rand = Math.floor(Math.random() * 2);
//         let fetching;
//         switch (rand) {
//             case 0:
//                 fetching = fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
//                 break;
//             case 1:
//                 fetching = fetch("https://dogapi.dog/api/facts?number=1")
//                 break
//             default:
//                 fetching = fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
//                 break;
//         }
//         console.log(rand);
//         fetching.then(response => response.json())
//             .then(response => {
//                 if (response["text"]) {
//                     console.log(response["text"]);
//                 } else if (response["facts"]) {
//                     console.log(response["facts"][0]);
//                 } else {
//                     console.log(response);
//                 }
//             })
//     }
// }

// x = new funFact()
// x.generate()



// const options = {
//     method: 'GET',
//     headers: {
//         Authorization: 'chrnMsqPx8Ww',
//         'X-RapidAPI-Key': '377876c293mshc1de66a0de7664ep122765jsnd4fd1dc23356',
//         'X-RapidAPI-Host': 'random-stuff-api.p.rapidapi.com'
//     }
// };


// fetch('https://random-stuff-api.p.rapidapi.com/joke/random?exclude=dirty%2Cmoney', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err)); //chistes


// fetch('https://api.chucknorris.io/jokes/random')
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));  //chistes de chuck norris

// fetch('https://api.imgflip.com/get_memes')   //imagenes de memes
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err)); 


// const options = { 
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '377876c293mshc1de66a0de7664ep122765jsnd4fd1dc23356',
// 		'X-RapidAPI-Host': 'reddit-meme.p.rapidapi.com'
// 	}
// };

// fetch('https://reddit-meme.p.rapidapi.com/memes/trending', options)  //buenos memes 
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '377876c293mshc1de66a0de7664ep122765jsnd4fd1dc23356',
// 		'X-RapidAPI-Host': 'memes9.p.rapidapi.com'
// 	}
// };

// fetch('https://memes9.p.rapidapi.com/api/list?genre=memes&type=top', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));   //mas memes

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '377876c293mshc1de66a0de7664ep122765jsnd4fd1dc23356',
// 		'X-RapidAPI-Host': 'daily-cat-facts.p.rapidapi.com'
// 	}
// };

// fetch('https://daily-cat-facts.p.rapidapi.com/facts/random?amount=1', options) 
// 	.then(response => response.json())
// 	.then(response => console.log(response["text"]))
// 	.catch(err => console.error(err)); 

