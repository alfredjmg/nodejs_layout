module.exports = {
  async up(db) {
    
    try {
      await db.collection('roles').insertMany([
        {name:"admin",description:"System administrator"},
        {name:"buyer",description:"User who sell products"},
        {name:"seller",description:"User who buy products"},
      ]);
   } catch (error) {
      console.log(error);
   };

  },

  async down(db) {

  },
};
