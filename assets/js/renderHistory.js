import { format } from 'date-fns';
import History from './history';

const history = new History();
const list = document.querySelector('#list');

const renderHistory = () => {
  let histories = history.getHistory();
  list.innerHTML = '';

  for (const history of histories) {
    console.log(history.date);
    const historyTemplate = `
      <div class="grid grid-cols-2 items-center">
        <div class="py-3.5 pl-6">
          ${format(new Date(history.date), 'dd/MM/yyyy à HH:mm')}
        </div>
        <div class="py-3.5 pl-6">
          ${history.result}
        </div>
      </div>
    `;
    list.innerHTML += historyTemplate;
  }

  if (!histories.length) {
    list.innerHTML =
      '<div class="py-4 flex justify-center">Pas de résultat disponible</div>';
  }
};

renderHistory();

document.querySelector('#removeHistory').addEventListener('click', () => {
  history.clearHistories();
  console.log("L'historique a été supprimé");
  renderHistory();
});
