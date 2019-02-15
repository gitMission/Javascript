import React, { Component } from 'react';

class HigherOrder extends Component {
    render(){

        // const companies = [
        //     {name: "Company 1", category: "Finance", start: 1986, end: 2000},
        //     {name: "Company 2", category: "Marketing", start: 1981, end: 2001},
        //     {name: "Company 3", category: "health", start: 1988, end: 2000},
        //     {name: "Company 4", category: "Technology", start: 1985, end: 2500},
        //     {name: "Company 6", category: "Marketing", start: 1923, end: 1970},
        //     {name: "Company 5", category: "Security", start: 1981, end: 2030},
        //     {name: "Company 6", category: "Marketing", start: 1923, end: 1970},
        //     {name: "Company 6", category: "Marketing", start: 1923, end: 1970}
        // ]

        const ages = [33, 12, 31, 5, 5, 64, 87, 3, 23, 654, 768, 123, 43, 56]

        const combined = ages
            .map(age => age)
            .filter(age => age <= 100)
            .sort((a, b) => (a - b), 0)
            .reduce((a, b) => (a + b),0)

            console.log(combined)

        // for(let i = 0; i < companies.length; i++) {
        //     console.log(companies[i])
        // }

        // forEach
        // companies.forEach(function(company) {
        //     console.log(company.name)
        // })

        // filter

        // 1
        // const canDrink = ages.filter(function(age) {
        //     if(age >= 21) {
        //         return true;
        //     }
        // });

        // 2
        // const canDrink = ages.filter(age => age >= 21)

        // console.log(canDrink);

        // es5
        // const retailCompanies = companies.filter(function(company) {
        //     if(company.category === 'Marketing') {
        //         return true;
        //     }
        // })

        // es6
        // get category marketing
        // const retailCompanies = companies.filter(company => company.category === 'Marketing' )
        // console.log(retailCompanies);

        //get 80's companies
        // const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
        // console.log(eightiesCompanies);

        //get companies that last for 10 years
        // const lastTenYears = companies.filter(company => (company.end - company.start) >= 10)
        // console.log(lastTenYears)

        // map

        //create array of companies name
        // const companiesName = companies.map(name => name.name)
        
        // const testMap = companies.map(name => `${name.name} [${name.start} - ${name.end}]` )

        //get age map
        // const ageMap = ages
        //     .map(age => Math.sqrt(age))
        //     .map(age => age * 2)

        // console.log(ageMap)


        // sort
        // const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))

        // const sortedAge = ages.sort((a, b) => a - b)

        
        // console.log(sortedAge)

        // reduce
        // const ageSum = ages.reduce(function(total, age) {
        //     return total + age;
        // }, 0);

        // const ageSum = ages.reduce((total, age) => total + age, 0);
        // console.log(ageSum);

        // const totalYear = companies.reduce((total, company) => total + (company.end - company.start), 0)
        // console.log(totalYear)


        


        
        return(
            <div className="higher-order">

            </div>
        )
    }
}

export default HigherOrder