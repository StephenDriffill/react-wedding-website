export function formatTel(tel: string) {
  const telNums = tel.replace(' ', '').split('');
  telNums.splice(0, 1, '+44');
  return telNums.join('');
}