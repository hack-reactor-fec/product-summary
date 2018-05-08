const faker = require('faker');
const Product = require('../index.js');
const fs = require('fs');
const stream = require('stream'); 


const saveProducts = function() {
  console.time('data');
  let fd = fs.openSync('datafile.json', 'a');
  let data = [];
  let datacount = 0;
  for (let i = 5000001; i <= 6000000; i++) {
    console.time('datagroup')
    let instance = new Product({
      projectID: i,
      mainDisplay: {
        title: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        img: faker.image.avatar(),
      },
      product: {
        name: faker.commerce.productName(),
        category: faker.commerce.department(),
        numBackers: getRndIntIncl(0,20),
        amtPledged: getRndIntIncl(0, 50000),
      },
      target: {
        endDate: getRndIntIncl(5, 12) + '/' + getRndIntIncl(1,28) + '/' + 2018,
        amt: getRndIntIncl(0, 50000),
      },
      creator: {
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        location: faker.address.city() + ', ' + faker.address.state(),
        avatarImg: faker.image.avatar(),
        numberProducts: 1,
      },
    });
    data.push(JSON.stringify(instance));
    if (i % 1000 === 0) {
      fs.appendFileSync(fd, `${data.join('\n')} \n`);
      data = [];
      if (i % 5000 === 0) {
        datacount += 5000;
        console.log('Files appended: ', datacount);
        console.timeEnd('datagroup');
      }
    }
  }
  console.log('data created');
  fs.closeSync(fd);
  console.timeEnd('data');
  return;
}

const getRndIntIncl = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

saveProducts();