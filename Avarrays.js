 /* 1. Create an array with 10 objects, each of them should have a "name" property and a "URL" property and a "number" property. */


const arr1 = [
  { name: "James", URL: "https://www.bbc.com/news", Number: 100 },
  { name: "Tom", URL: "https://www.foxnews.com/", Number: 50},
  { name: "Dave", URL: "https://www.itv.com/news", Number: 3 },
  { name: "Tim", URL: "https://edition.cnn.com/", Number: 4 },
  { name: "Kate", URL: "https://abcnews.go.com/", Number:5 },
  { name: "John", URL: "https://www.dw.com/en/top-stories/s-9097", Number:6},
  { name: "Hanan", URL: "https://www.welt.de/politik/deutschland/",Number:7},
  { name: " Mary", URL: "https://www.dailymail.co.uk/ushome/index.html", Number:8},
  { name: "Kevin", URL: "https://www.telegraph.co.uk/", Number:9},
  { name: "Ann", URL: "https://www.mirror.co.uk/", Number:10},
]
  

/*2. Then based on the array, create a new array that contains just the names. always be a map*/

const newArray = arr1.map(function (team) {
  return team.name;
});

console.log(newArray);


/*3. Go through the array and check each individual URL property - if the URL starts with "http", print the URL. Otherwise, print "Invalid URL for" and the value of the name property.*/

arr1.forEach(function (team) {
  if (team.URL.startsWith("http")) {
    console.log(team.URL)
  }
  else {
    console.log("Invalid URL value of the name property" + team.name);
  };
});

  /*4. Sort the array based on the "number" property to a random order.*/

  arr1.forEach((element, i) => {
    const index = Math.floor(Math.random() * arr1.length);
    console.log(index);
    arr1[i] = arr1[index];
    arr1[index] = element;
  });
  




  /*5. Sort the array based on the "number" property, with the lowest number first.*/

  arr1.sort(function (a, b) {
    if (a.Number > b.Number) {
      return 1;
    }
    else if (b.Number > a.Number) {
      return -1;
    }
    else {
      return 0;
    }
  });



  /*6. Sort the array based on the "number" property, with the highest number first.*/

  arr1.sort(function (a, b) {
    if (a.Number < b.Number) {
      return 1;
    }
    else if (b.Number < a.Number) {
      return -1;
    }
    else {
      return 0;
    }
  });
  console.log(arr1);



  /*7. Based on the array, create a string with all of the names of the people in the array separated by a comma and then replace the last comma with the string `" and "`*/


  const newArr3 = arr1.map(function (team) {
    return team.name;
  });

  console.log(newArr3);

  const joined = newArr3.join(",").replace(/,(?=[^,]+$)/, ", and");
  console.log(joined);