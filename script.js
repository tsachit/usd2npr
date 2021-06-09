const fetchCurrentValue = async () => {
  const response = await fetch("https://api.transferwise.com/v3/comparisons?sourceCurrency=USD&targetCurrency=NPR&sendAmount=1", {
    method: 'GET',
  });
  return await response.json();
};

const roundTwo = (num) => parseFloat(num).toFixed(2).replace('.00', '');

const getCurrentValue = () => {
  const currentValue = document.getElementById('currentValue');
  currentValue.innerHTML = '...';
  fetchCurrentValue().then(json => {
    let result = json?.providers[0]?.quotes[0]?.rate;
    currentValue.innerHTML = roundTwo(result);
  });
};

// run immediately
getCurrentValue();
// run every 5 minutes
setInterval(getCurrentValue, 1000 * 60 * 5);