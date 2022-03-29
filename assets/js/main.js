import History from './history';

const questions = [
  {
    question: 'Quel est le surnom du tractopelle au Québec ?',
    type: 'direct',
    answer: 'pépine',
    name: 'pseudo',
  },
  {
    question: 'Quel est le fabricant qui ne produit pas de tractopelle ?',
    type: 'radio',
    choices: ['Caterpillar', 'Volvo', 'Tesla', 'JCB'],
    answer: 'Tesla',
    name: 'builder',
  },
  {
    question: "Est-ce qu'un tractopelle est un engin génial ?",
    type: 'boolean',
    answer: 'true',
    name: 'awesome',
  },
  {
    question: 'Tractopelle, un engin de chantier [...]',
    type: 'direct',
    answer: 'polyvalent',
    name: 'polyvalent',
  },
  {
    question: 'En quelle année a été inventé le tractopelle ?',
    type: 'radio',
    choices: ['1947', '1953', '1967', '2025'],
    answer: '1947',
    name: 'year',
  },
];

const history = new History();
const main = document.querySelector('main');

const generateForm = () => {
  const form = document.createElement('form');
  form.onsubmit = submitForm;

  const formElement = [];

  for (const q of questions) {
    let element;
    console.log(q.type);
    switch (q.type) {
      case 'direct':
        element = directQuestion(q);
        break;
      case 'radio':
        element = radioQuestion(q);
        break;
      case 'boolean':
        element = booleanQuestion(q);
        break;
    }

    formElement.push(element);
  }
  form.innerHTML = `
    <h3 class="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">El famoso Tractopelle Quizz</h3>
  `;
  form.innerHTML += formElement.join('');
  form.innerHTML += `
    <button
      type="submit"
      class="px-6 py-2 border border-transparent text-lg mt-8 mx-auto block font-semibold rounded-full shadow-sm text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      Soumettre
    </button>
  `;

  main.innerHTML = '';
  main.append(form);
};

function submitForm(e) {
  e.preventDefault();
  // const keys = questions.map((q) => q.name);
  let result = 0;
  for (const question of questions) {
    if (!this[question.name].value) {
      alert("Le formulaire n'est pas complet");
      result = 0;
      return;
    }
    if (this[question.name].value == question.answer) {
      result++;
    }
  }
  showResult(result);
  history.setHistory({
    date: new Date(),
    result: `${result}/${questions.length}`,
  });
}

const directQuestion = (question) => {
  return `
    <div class="mt-8 flex flex-col">
      <label for="${question.name}" class="block text-lg font-semibold text-gray-700">${question.question}*</label>
      <div class="mt-1">
        <input type="text" name="${question.name}" id="${question.name}" class="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md">
      </div>
    </div>
  `;
};

const radioQuestion = (question) => {
  console.log(question);
  const radioElement = (value, name) => {
    return `
      <div class="flex items-center mr-8">
        <input id="${value}" value="${value}" name="${name}" type="radio" class="focus:ring-primary h-4 w-4 text-primary border-gray-300">
        <label for="${value}" class="ml-3 block text-sm font-medium text-gray-700">${value}</label>
      </div>
    `;
  };

  return `
    <div class="mt-8">
      <label class="block text-lg font-semibold text-gray-700">${
        question.question
      }*</label>
      <div class="mt-1 flex items-center">
        ${question.choices.map((choice) => radioElement(choice, question.name)).join('')}
      </div>
    </div>
  `;
};

const booleanQuestion = (question) => {
  return `
    <div class="mt-8">
      <label class="block text-lg font-semibold text-gray-700">${question.question}*</label>
      <div class="mt-1 flex items-center">
        <div class="flex items-center mr-8">
          <input id="true-${question.name}" value="true" name="${question.name}" type="radio" class="focus:ring-primary h-4 w-4 text-primary border-gray-300">
          <label for="true-${question.name}" class="ml-3 block text-sm font-medium text-gray-700">Vrai</label>
        </div>
        <div class="flex items-center mr-8">
          <input id="false-${question.name}" value="false" name="${question.name}" type="radio" class="focus:ring-primary h-4 w-4 text-primary border-gray-300">
          <label for="false-${question.name}" class="ml-3 block text-sm font-medium text-gray-700">Faux</label>
        </div>
      </div>
    </div>
  `;
};

const showResult = (result) => {
  main.innerHTML = `
  <div class="flex flex-col items-center>
    <h2 class="text-xl font-semibold text-gray-900 tracking-tight sm:text-2xl text-center">Vous avez obtenu le score</h2>
    <h3 class="text-primary text-center text-4xl my-8">${result}/${questions.length}</h3>
    <button
      type="button"
      class="px-6 py-2 border border-transparent text-lg mt-8 mx-auto block font-semibold rounded-full shadow-sm text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2"
      id="restart"
    >
      Recommencer
    </button>
  </div>
  `;
  document.getElementById('restart').addEventListener('click', generateForm);
};

document.getElementById('generateQuizz').addEventListener('click', generateForm);
// generateForm();
