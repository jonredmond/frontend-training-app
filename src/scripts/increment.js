module.exports = () => {
  const values = document.getElementsByClassName('gridList__value');

  Array.prototype.forEach.call(values, element => {
    element.addEventListener('click', () => {
      ++element.childNodes[0].nodeValue
    });
  });
};