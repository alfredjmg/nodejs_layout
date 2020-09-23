module.exports = {
  async up(db) {
    
    try {
      await db.collection('currencies').insertMany([
        {name:"Dolar",symbol:"$"},
        {name:"Euros",symbol:""},
        {name:"Bolivares",symbol:"BsF"},
      ]);
   } catch (error) {
      console.log(error);
   };

  },

  async down(db) {

  },
};
