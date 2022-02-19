/*i did this task in concole*/

/*1 task*/ const paragraph = document.querySelector('p');

  paragraph.innerHTML = paragraph.innerText
  .split(' ')
  .map(word => word.length >= 8 ? `<span style="background: yellow">${word}</span>` : word)
  .join(' ');


/*2 task*/const anchorLink = document.createElement('a');
anchorLink.innerText = 'Top 8 interview questions';
anchorLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
document.body.append(anchorLink);


/*3 task*/paragraph.innerHTML = paragraph.innerHTML.split(/\.[^\.|<]/).join('.</p></p>' + '</p>');


/*4 task*/const totalWords = paragraph.innerText.split(' ').length;
const wordCounter = document.createElement('span');
wordCounter.innerText = `Total Word Counted: ${totalWords}`;
document.body.insertBefore(wordCounter, paragraph);


/*5 task*/Array.from(document.querySelectorAll('p'))
     .forEach(p => {
      p.innerHTML = p.innerHTML.replace(/\?/g, ' 🤔');
      p.innerHTML = p.innerHTML.replace(/\!/g, ' 😲');
})
