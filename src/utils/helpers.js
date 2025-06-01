function formatCurrency(value) {
  return new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

function formatMovementDate(date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "Vandaag";
  if (daysPassed === 1) return "Gisteren";
  if (daysPassed <= 7) return `${daysPassed} dagen geleden`;

  return new Intl.DateTimeFormat("nl-BE").format(date);
}

function checkApproval(ammount, account) {
  return new Promise((resolve) =>
    setTimeout(() => {
      const result = account.movements.some(
        (mov) => mov.ammount >= ammount * 0.1,
      );
      resolve(result);
    }, 2000),
  );
}

export { formatCurrency, formatMovementDate, checkApproval };
