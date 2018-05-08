const faker = require ('faker');
const fs = require ('fs');

const saveProducts = function() {
  console.time('data');
  let fd = fs.openSync('Product.txt', 'a');
  let data = [];
  let datacount = 0;
  for (let i = 1; i <= 10000000; i++) {
    console.time('datagroup')
    //Product Data
    let product_id = i
    let name = faker.commerce.productName();
    let title = faker.commerce.productName();
    let description = faker.lorem.paragraph();
    let img = faker.image.avatar();
    let category = faker.commerce.department();
    let numBackers = getRndIntIncl(0,20);
    let amtPledged = getRndIntIncl(0, 50000);
    let endDate = getRndIntIncl(5, 12) + '/' + getRndIntIncl(1,28) + '/' + 2018;
    let amt = getRndIntIncl(0, 50000);
    let instance = `${product_id}|${name}|${category}|${numBackers}|${amtPledged}|${endDate}|${amt}|${title}|${description}|${img}`
    data.push(instance)
    if (i % 10000 === 0) {
      fs.appendFileSync(fd, `${data.join('\n')} \n`);
      data = [];
      if (i % 50000 === 0) {
        datacount += 50000;
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

const saveCreators = function () {
  console.time('data');
  let fd = fs.openSync('Creator.txt', 'a');
  let data = [];
  let datacount = 0;
  for (let i = 1; i <= 10000000; i++) {
    console.time('datagroup')
    //Creator Data
    let creator_id = i;
    let name = faker.name.firstName() + ' ' + faker.name.lastName();
    let location = faker.address.city() + ', ' + faker.address.state();
    let avatarImg = faker.image.avatar();
    let numberProducts = 1;
    let instance = `${creator_id}|${name}|${location}|${avatarImg}|${numberProducts}`
    data.push(instance);
    if (i % 10000 === 0) {
      fs.appendFileSync(fd, `${data.join('\n')} \n`);
      data = [];
      if (i % 50000 === 0) {
        datacount += 50000;
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

const saveIds = function () {
  console.time('data');
  let fd = fs.openSync('Id.txt', 'a');
  let data = [];
  let datacount = 0;
  for (let i = 1; i <= 10000000; i++) {
    console.time('datagroup')
    //ID
    let creator_id = i;
    let product_id = i;
    let instance = `${product_id}|${creator_id}`
    data.push(instance);
    if (i % 10000 === 0) {
      fs.appendFileSync(fd, `${data.join('\n')} \n`);
      data = [];
      if (i % 50000 === 0) {
        datacount += 50000;
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
saveCreators();
saveIds();