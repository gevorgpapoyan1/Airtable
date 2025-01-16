export function encryptCardNumber(cardNumber: string): string {
  if (cardNumber.length !== 16 || isNaN(Number(cardNumber))) {
    throw new Error("Invalid card number");
  }

  const firstPart = cardNumber.substring(0, 4);
  const lastPart = cardNumber.substring(12, 16);
  const encryptedCardNumber = `${firstPart} **** **** ${lastPart}`;

  return encryptedCardNumber;
}

const routeNames: { [key: string]: string } = {
  '/': 'Overview',
  '/credit-card': "My Cards"
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase().replace(/-/g, ' ');

export const getPageName = (path: string) => {
  return routeNames[path] || capitalize(path.split('/').filter(Boolean).pop() || 'Home');
};
