const firstfloor = require('../../models/firstfloor');
const floorData = require('../../models/product');
const second = require('../../models/second');
const third=require("../../models/secondfloor2")
const forth =require("../../models/secondfloor2.2")
const fifth=require("../../models/thirdfloor3.1")
const sixth=require("../../models/thirdfloor3.2")
const seventh= require("../../models/fourthfloor4.1")
const eight= require("../../models/fourthfloor4.2")
const nine=require("../../models/fourthfloor4.2");
const product = require('../../models/product');

const Software = require('../../models/soft');


const getData = async (req, res) => {
    try {
        const userdata = await floorData.find();
        console.log(userdata);
        res.send(userdata); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Define the deleteProductById function
const deleteProductById = async (req, res, next) => {
    try {
      const _id = req.params.id;
      const deletedProduct = await floorData.findByIdAndDelete(_id);
      console.log("Deleted Product:", deletedProduct); // Log the deleted product
      if (deletedProduct) {
        res.status(200).json({ message: "Floor data deleted successfully" });
      } else {
        res.status(404).json({ message: "Floor data not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Failed to delete floor data", error: error.message });
    }
  };

//   1.2
const deletefloor11 = async (req, res, next) => {
    try {
      const _id = req.params.id;
      const deletedProduct = await firstfloor.findByIdAndDelete(_id);
      console.log("Deleted Product:", deletedProduct); // Log the deleted product
      if (deletedProduct) {
        res.status(200).json({ message: "Floor data deleted successfully" });
      } else {
        res.status(404).json({ message: "Floor data not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Failed to delete floor data", error: error.message });
    }
  };

//   2.1
const deletefloor12 = async (req, res, next) => {
    try {
      const _id = req.params.id;
      const deletedProduct = await third.findByIdAndDelete(_id);
      console.log("Deleted Product:", deletedProduct); // Log the deleted product
      if (deletedProduct) {
        res.status(200).json({ message: "Floor data deleted successfully" });
      } else {
        res.status(404).json({ message: "Floor data not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Failed to delete floor data", error: error.message });
    }
  };
//   2.2
const deletefloor21 = async (req, res, next) => {
    try {
      const _id = req.params.id;
      const deletedProduct = await forth.findByIdAndDelete(_id);
      console.log("Deleted Product:", deletedProduct); // Log the deleted product
      if (deletedProduct) {
        res.status(200).json({ message: "Floor data deleted successfully" });
      } else {
        res.status(404).json({ message: "Floor data not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Failed to delete floor data", error: error.message });
    }
  };

//   3.1
const deletefloor22 = async (req, res, next) => {
    try {
      const _id = req.params.id;
      const deletedProduct = await thirdfloor.findByIdAndDelete(_id);
      console.log("Deleted Product:", deletedProduct); // Log the deleted product
      if (deletedProduct) {
        res.status(200).json({ message: "Floor data deleted successfully" });
      } else {
        res.status(404).json({ message: "Floor data not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Failed to delete floor data", error: error.message });
    }
  };
//   3.2
const deletefloor31 = async (req, res, next) => {
    try {
      const _id = req.params.id;
      const deletedProduct = await thirdfloor32.findByIdAndDelete(_id);
      console.log("Deleted Product:", deletedProduct); // Log the deleted product
      if (deletedProduct) {
        res.status(200).json({ message: "Floor data deleted successfully" });
      } else {
        res.status(404).json({ message: "Floor data not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Failed to delete floor data", error: error.message });
    }
  };
//   4.1
const deletefloor32= async (req, res, next) => {
    try {
      const _id = req.params.id;
      const deletedProduct = await fourthfloor41.findByIdAndDelete(_id);
      console.log("Deleted Product:", deletedProduct); // Log the deleted product
      if (deletedProduct) {
        res.status(200).json({ message: "Floor data deleted successfully" });
      } else {
        res.status(404).json({ message: "Floor data not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Failed to delete floor data", error: error.message });
    }
  };
//   4.2
const deletefloor41 = async (req, res, next) => {
    try {
      const _id = req.params.id;
      const deletedProduct = await fourthfloor42.findByIdAndDelete(_id);
      console.log("Deleted Product:", deletedProduct); // Log the deleted product
      if (deletedProduct) {
        res.status(200).json({ message: "Floor data deleted successfully" });
      } else {
        res.status(404).json({ message: "Floor data not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Failed to delete floor data", error: error.message });
    }
  };


  //software 
  const fetchSoftwareData = async (req, res, next) => {
    try {
      // Query the database to fetch all software data
      const softwareData = await Software.find();
      
      // Check if any software data is found
      if (softwareData.length > 0) {
        res.status(200).json(softwareData); // Send software data as JSON response
      } else {
        res.status(404).json({ message: "No software data found" }); // Send 404 if no data found
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch software data", error: error.message }); // Send 500 if error occurs
    }
  };
  








const getsoft = async (req, res) => {
    try {
        const userdatas = await Software.find();
        // console.log(userdatas);
        res.send(userdatas); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};




const firstData = async (req, res) => {
    try {
        const userdata = await firstfloor.find();
        // console.log(userdata);
        res.send(userdata); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const seconddata= async (req, res) => {
    try {
        const userdata = await second.find();
        // console.log(userdata);
        res.send(userdata); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


const getsecond = async (req, res) => {
    try {
        const userdata = await third.find();
        // console.log(userdata);
        res.send(userdata); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getthird = async (req, res) => {
    try {
        const userdata = await forth.find();
        // console.log(userdata);
        res.send(userdata); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getfourth = async (req, res) => {
    try {
        const userdata = await fifth.find();
        console.log(userdata);
        res.send(userdata); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getfifth = async (req, res) => {
    try {
        const userdata = await sixth.find();
        console.log(userdata);
        res.send(userdata); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getsixth = async (req, res) => {
    try {
        const userdata = await seventh.find();
        console.log(userdata);
        res.send(userdata); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getseventh = async (req, res) => {
    try {
        const userdata = await eight.find();
        console.log(userdata);
        res.send(userdata); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const geteight = async (req, res) => {
    try {
        const userdata = await nine.find();
        console.log(userdata);
        res.send(userdata); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


// first 1.1
const AddUserData = async (req, res, next) => {
    const { id, name, serialNumber, category, attributes } = req.body;

    const user = new floorData({
        id, name, serialNumber, category, attributes 
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user });
};

  
// 1stfloor1.1
const Addfirstfloor = async (req, res, next) => {
    const { id, name, serialNumber, category, attributes } = req.body;

    const user = new firstfloor({
        id, name, serialNumber, category, attributes 
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user });
};
// firstfloor2.1
const Addfirst = async (req, res, next) => {
    const { id, name, serialNumber, category, attributes } = req.body;

    const user = new third({
        id, name, serialNumber, category, attributes 
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user });
};
// second 2.2

const AddSecond = async (req, res, next) => {
    const { id, name, serialNumber, category, attributes } = req.body;

    const user = new forth({
        id, name, serialNumber, category, attributes 
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user });
};
// second3.1

const Addthitd= async (req, res, next) => {
    const { id, name, serialNumber, category, attributes } = req.body;

    const user = new thirdfloor({
        id, name, serialNumber, category, attributes 
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user });
};
// third 3.2

const Addforth= async (req, res, next) => {
    const { id, name, serialNumber, category, attributes } = req.body;

    const user = new thirdfloor32({
        id, name, serialNumber, category, attributes 
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user });
};
// third4.1

const Addsixth= async (req, res, next) => {
    const { id, name, serialNumber, category, attributes } = req.body;

    const user = new fourthfloor41({
        id, name, serialNumber, category, attributes 
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user });
};
// forth 4.2

const Addseventh= async (req, res, next) => {
    const { id, name, serialNumber, category, attributes } = req.body;

    const user = new fourthfloor42({
        id, name, serialNumber, category, attributes 
    });

    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user });
};

const Addurl = async (req, res, next) => {
    const {
        id,
        softwareName,
        alias,
        version,
        serialNumber,
        purchaseDate,
        expirationDate,
        licenseType,
        description
    } = req.body; // Destructure the request body

    try {
        // Create a new instance of the Software model
        const newSoftware = new Software({
            id,
            softwareName,
            alias,
            version,
            serialNumber,
            purchaseDate,
            expirationDate,
            licenseType,
            description
        });

        // Save the new software data to the database
        await newSoftware.save();

        // Respond with the newly created software data
        return res.status(201).json({ software: newSoftware });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server Error' });
    }
};


const fetchDataFromAllCollections = async (req, res) => {
  try {
    const collections = [firstfloor, floorData, Software, second, third, forth, fifth, sixth, seventh, nine];
    
    // Retrieve all unique names present in the collections
    const uniqueNames = new Set();
    await Promise.all(collections.map(async collection => {
      const items = await collection.find({}, { name: 1, _id: 0 });
      items.forEach(item => uniqueNames.add(item.name));
    }));
    
    // Initialize counts for each unique name
    const nameCounts = {};
    uniqueNames.forEach(name => {
      nameCounts[name] = 0;
    });
    
    // Count occurrences of each name across all collections
    await Promise.all(collections.map(async collection => {
      const items = await collection.find({}, { name: 1, _id: 0 });
      items.forEach(item => {
        nameCounts[item.name]++;
      });
    }));

    // Sending the aggregated data with counts for each name
    res.status(200).json(nameCounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
// Export the function to use in routes
exports.fetchDataFromAllCollections=fetchDataFromAllCollections

exports.getData = getData;
exports.deleteProductById=deleteProductById;
exports.AddUserData=AddUserData
exports.getsoft=getsoft
exports.firstData=firstData
exports.seconddata=seconddata
exports.getsecond=getsecond
exports.getthird=getthird
exports.getfourth=getfourth
exports.getfifth=getfifth
exports.getsixth=getsixth
exports.getseventh=getseventh
exports.geteight=geteight
exports.fetchSoftwareData=fetchSoftwareData 
exports.Addfirstfloor=Addfirstfloor
exports.Addfirst=Addfirst
exports.AddSecond=AddSecond
exports.Addthitd=Addthitd
exports.Addforth=Addforth
exports.Addsixth=Addsixth
exports.Addseventh=Addseventh
exports.Addurl=Addurl
exports.deletefloor11=deletefloor11
exports.deletefloor12=deletefloor12
exports.deletefloor21=deletefloor21
exports.deletefloor22=deletefloor22
exports.deletefloor31=deletefloor31
exports.deletefloor32=deletefloor32
exports.deletefloor41=deletefloor41
