function formatNumber(number) {
  let fmt = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return fmt.format(number);
}

function formatNumberPerc(number) {
  var option = {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };
  var fmt = new Intl.NumberFormat('en-US', option);

  return fmt.format(number);
}

export { formatNumber, formatNumberPerc };
