export default class History {
  getHistory() {
    let histories;

    if (localStorage.getItem('history') === null) {
      histories = [];
    } else {
      histories = JSON.parse(localStorage.getItem('history'));
    }
    return histories;
  }

  setHistory(history) {
    let histories = this.getHistory();

    localStorage.setItem('history', JSON.stringify([...histories, history]));
  }

  removeHistory(history) {}

  clearHistories() {
    localStorage.removeItem('history');
  }
}
