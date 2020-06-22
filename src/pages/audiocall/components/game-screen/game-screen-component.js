import answerline from '../answers';

const gameScreenComponent = (data) => {
  const { id, word, image, answer } = data;
  const generateAnswerLines = (answers = []) => {
    const answerElements = [];
    answers.forEach((item) => {
      answerElements.push(answerline(item));
    });
    return answerElements;
  };
  const template = `<div class="cover">
                          <img src="https://raw.githubusercontent.com/irinainina/rslang-data/master/${image}" class="profile">
                      </div>
                      <div class="answers-group" >
                        <div class="name result-word" data-word-id="${id}"><span></span>${word}</div>
                        <div class="result-translate">${word}</div>
                      </div>`;
  const buttonsTemplate = `<button class="next btn btn-success">Next</button>
                           <button class="forget btn btn-success">Forget</button>`;
  const startScreen = document.createElement('div');
  startScreen.setAttribute('id', 'play-screen');
  startScreen.className = 'container screen';

  const frontFace = document.createElement('div');
  frontFace.className = 'front-face';
  frontFace.innerHTML = template;

  const answerList = document.createElement('div');
  answerList.className = 'answers';
  generateAnswerLines(answer).forEach((item) => answerList.append(item));
  frontFace.append(answerList);

  const buttons = document.createElement('div');
  buttons.className = 'buttons';
  buttons.innerHTML = buttonsTemplate;
  frontFace.append(buttons);
  startScreen.append(frontFace);
  return startScreen;
};

export default gameScreenComponent;
