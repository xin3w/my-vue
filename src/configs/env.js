// if (process.env.NODE_ENV !== 'production') {
//   console.warn('NODE_ENV = ' + process.env.NODE_ENV)
// }
console.warn('NODE_ENV = ' + process.env.NODE_ENV)
export default require(`./env.${process.env.NODE_ENV}`)
