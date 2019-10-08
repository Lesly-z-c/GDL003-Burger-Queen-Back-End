const Menu = require('../models/menu-models.js');


// Create and Save a new menu item
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "item Menu can not be empty"
        });
    }

    // Create a Menu
    const menu = new Menu({
        name: req.body.name, 
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        type: req.body.type
    });

    // Save Menu in the database
    menu.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Menu."
        });
    });
};

// Retrieve and return all items from the menu database.
exports.findAll = (req, res) => {
    Menu.find()
    .then(menu => {
        res.send(menu);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving menu."
        });
    });
};

// Find a single item with a menuId
exports.findOne = (req, res) => {
    Menu.findById(req.params.menuSpaceId)
    .then(menu => {
        if(!menu) {
            return res.status(404).send({
                message: "Menu not found with id " + req.params.menuSpaceId
            });            
        }
        res.send(menu);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Menu not found with id " + req.params.menuSpaceId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving menu with id " + req.params.menuSpaceId
        });
    });
};

// Update a menu item identified by the menuId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.price) {
        return res.status(400).send({
            message: "Menu price can not be empty"
        });
    }

    // Find menu and update it with the request body
    Menu.findByIdAndUpdate(req.params.menuId, {
        name: req.body.name || "Unname Menu",
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        type: req.body.type
    }, {new: true})
    .then(menu => {
        if(!menu) {
            return res.status(404).send({
                message: "Menu not found with id " + req.params.menuSpaceId
            });
        }
        res.send(menu);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Menu not found with id " + req.params.menuSpaceId
            });                
        }
        return res.status(500).send({
            message: "Error updating menu with id " + req.params.menuId
        });
    });
};

// Delete a item menu with the specified menuId in the request
exports.delete = (req, res) => {
    Menu.findByIdAndRemove(req.params.menuId)
    .then(menu => {
        if(!menu) {
            return res.status(404).send({
                message: "Menu not found with id " + req.params.menuId
            });
        }
        res.send({message: "Menu deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Menu not found with id " + req.params.menuId
            });                
        }
        return res.status(500).send({
            message: "Could not delete menu with id " + req.params.menuId
        });
    });
};