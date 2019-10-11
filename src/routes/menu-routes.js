module.exports = (app) => {
    const menuSpace = require('../controllers/menu-controller.js');

    // Create a new Menu
    app.post('/menuSpace', menuSpace.create);

    // Retrieve all Menu
    app.get('/menuSpace', menuSpace.findAll);

    // Retrieve an item with menuId
    app.get('/menuSpace/:menuSpaceId', menuSpace.findOne);

    // Update an item with menuId
    app.put('/menuSpace/:menuSpaceId', menuSpace.update);

    // Delete an  item with menuId
    app.delete('/menuSpace/:menuSpaceId', menuSpace.delete);
}