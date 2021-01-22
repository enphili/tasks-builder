export const strRandomGenerate = () => {
  let result       = ''
  const words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
  const maxPosition = words.length - 1
  const resultLength = 16
  for ( let i = 0; i < resultLength; i++ ) {
    const position = Math.floor ( Math.random() * maxPosition );
    result += words.substring(position, position + 1);
  }
  return result;
}