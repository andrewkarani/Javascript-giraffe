     // REAL WORLD OBJECTS
     // using objects to model real world entities in JS
     // a lot of stuff cannot just be rep using a string, boolean or a number eg rep a movie
     // but using an object we can use the 3 basic data types(boolean, strings, intergers) in order to rep more complex info
     // an object can also have other objects
     // creating a movie object

     var myMovie = {
      // now inside here we can start to putinfo abt our movie

      title: "The Social Network",
      releaseyear: "2010",
      duration: 2.0,
      actors:[      // actors was complex.so lets create an array of actor objects
      // inside the actor array we can justmake an object using curly braces
      {
        name: "Jessie Eisenberg",
        birthday: new Date("October 5,1983"),
        hometown: "New York, New York"
      },
      {   // an object for the 2nd actor
        name: "Roonie Mara",
        birthday: new Date("April 17,1985"),
        hometown: "Bedford New York"
      }

      ]
     }

     // now to access the specific info abt the object 
      document.write(myMovie.name); // this will give you the name Social Network
      // to get infoabt the actors remember it is in an array hence you have to index
     document.write(myMovie.actors[0].hometown);  // this will give you jessie eisenberg hometown
     // for roonie mara
     document.write(myMovie.actors[1].hometown);