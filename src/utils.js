export const formatTime = (timeStamp) => {
    const date = new Date(timeStamp);
    return date.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit' })
} 

export const chatSentences = [
    "Hey, how's your day going?",
    "Not bad, just got done with work. You?",
    "I’ve been binge-watching that new series on Netflix!",
    "Oh nice! I was thinking of starting it. Worth it?",
    "Totally! The plot twists are wild.",
    "Cool, I’ll check it out tonight.",
    "Did you finish that project you were working on?",
    "Almost. Just need to clean up the code a bit.",
    "Let me know if you want me to review it!",
    "Appreciate that, I’ll ping you once it’s ready."
  ];

  export function getRandomChatSentence() {
    const index = Math.floor(Math.random() * chatSentences.length);
    return chatSentences[index];
  }