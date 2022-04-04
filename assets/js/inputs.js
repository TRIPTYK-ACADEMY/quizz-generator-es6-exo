export const directQuestion = (question) => {
  return `
    <div class="mt-8 flex flex-col">
      <label for="${question.name}" class="block text-lg font-semibold text-gray-700">${question.question}*</label>
      <div class="mt-1">
        <input type="text" name="${question.name}" id="${question.name}" class="shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md">
      </div>
    </div>
  `;
};

export const radioQuestion = (question) => {
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

export const booleanQuestion = (question) => {
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