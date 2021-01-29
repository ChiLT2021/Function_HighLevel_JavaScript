const companies = [
  { name: "Vinamilk", category: "Food", start: 1981, end: 2003 },
  { name: "Viettel", category: "Telemommunication", start: 1992, end: 2008 },
  { name: "Sabeco", category: "Food", start: 1999, end: 2007 },
  { name: "Vinhomes", category: "Real estate", start: 1989, end: 2010 },
  { name: "Mobiphone", category: "Telemommunication", start: 2009, end: 2014 },
  { name: "Masan", category: "Food", start: 1987, end: 2010 },
  { name: "Vinaphone", category: "Telemommunication", start: 1986, end: 1996 },
  { name: "Vietcombank", category: "Banking", start: 2011, end: 2015 },
  { name: "FPT", category: "Technology", start: 1981, end: 1989 },
];


const ages = [45, 62, 14, 16, 46, 26, 65, 33, 34, 13, 21, 17, 6, 55, 22]

// forEach

/*()
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i])
}
*/

/*
companies.forEach(function(company, index, companies) {
  console.log(company)
  console.log(index)
})
*/

/*
companies.forEach(company => {
  console.log(company)
})
*/

// filter

/*
const listAge = []
for (let age of ages) {
  if (age >= 18) {
    listAge.push(age)
  }
}
console.log(listAge)
*/

// const listAge = ages.filter(function (age) {  
//   if (age >= 18) {
//     return true
//   }
// })

// console.log(listAge)

// const listAge = ages.filter(age => {
//   return age >= 18
// })
// console.log(listAge)

// const listAge = ages.filter(age => age >= 18)
// console.log(listAge)  

// const foodCompanies = companies.filter(function (company) {
//   if (company.category === 'Food') {
//     return true
//   }
// })
// console.log(foodCompanies)

// const foodCompanies = companies.filter(company => company.category === 'Food')
// console.log(foodCompanies)

// const companiesTwentiethCentury = companies.filter(company => company.start >= 1901 && company.end <= 2000)
// console.log(companiesTwentiethCentury)

// map

// const companyNames = companies.map(function (company) {
//   return company.name
// })
// console.log(companyNames)

// const companyNames = companies.map(company => company.name)
// console.log(companyNames)

// const companyInfo = companies.map(
//   company => `${company.name} (${company.start} - ${company.end})`
// )
// console.log(companyInfo)

// const agesSquared = ages.map(age => Math.sqrt(age))
// console.log(agesSquared)

// const newAges = ages.map(age => Math.sqrt(age)).map(age => age * 2)
// console.log(newAges)

// sort

// const companiesSorted = companies.sort(function (comA, comB) {
//   if (comA.start > comB.start) return 1
//   else return -1
// })
// console.log(companiesSorted)

// const companiesSorted = companies.sort((comA, comB) =>  comA.start - comB.start)
// console.log(companiesSorted)

// const companiesSorted = companies.sort((comA, comB) => comA.start > comB.start ? 1 : -1)
// console.log(companiesSorted)

// const companiesSorted = companies.sort((comA, comB) =>  
//   comA.name.toLowerCase() > comB.name.toLowerCase() ? 1 : -1
// )

// console.log(companiesSorted)

// reduce 

// let ageSum = 0
// for (let age of ages) {
//   ageSum += age
// }
// console.log(ageSum)

// const ageSum = ages.reduce(function (total, age) {
//   return total + age
// }, 0)
// console.log(ageSum)

// const ageSum = ages.reduce((total, age) => total + age, 0)
// console.log(ageSum)

// const years = companies.reduce((total, company) => {
//   return total + company.end - company.start
// }, 0)
// console.log(years)

// const years = companies.reduce((total, company) => total + company.end - company.start, 0)
// console.log(years)

const combined = ages
  .map(age => age * 2)
  .filter(age => age > 50)
  .sort((ageA, ageB) => ageA - ageB)
  .reduce((total, age) => total + age, 0)
console.log(combined)