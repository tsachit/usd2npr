const cv = document.getElementById('currentValue');
const usd = document.getElementById('usd');
const npr = document.getElementById('npr');

const fetchCurrentValue = async () => {
  const response = await fetch("https://api.transferwise.com/v3/comparisons?sourceCurrency=USD&targetCurrency=NPR&sendAmount=1", {
    method: 'GET',
  });
  return await response.json();
};

const roundTwo = (num) => parseFloat(num).toFixed(2).replace('.00', '');

const getCurrentValue = () => {
  cv.innerHTML = '...';
  fetchCurrentValue().then(json => {
    let result = json?.providers[0]?.quotes[0]?.rate;
    cv.innerHTML = roundTwo(result);
    convert();
  });
};

const convert = () => {
  if(cv.innerHTML === '...') return;
  if(usd.value === '') {
    npr.innerHTML = '';
    return;
  }

  const nprValue = roundTwo(cv.innerHTML) * roundTwo(usd.value);
  npr.innerHTML = roundTwo(nprValue);
};

// run immediately
getCurrentValue();
// run every 5 minutes
setInterval(getCurrentValue, 1000 * 60 * 5);