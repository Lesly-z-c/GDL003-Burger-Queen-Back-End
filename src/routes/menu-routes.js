module.exports = (app) => {
    const menuSpace = require('../controllers/menu-controller.js');

    // Create a new Note
    app.post('/menuSpace', menuSpace.create);

    // Retrieve all Notes
    app.get('/menuSpace', menuSpace.findAll);

    // Retrieve a single Note with noteId
    app.get('/menuSpace/:menuSpaceId', menuSpace.findOne);

    // Update a Note with noteId
    app.put('/menuSpace/:menuSpaceId', menuSpace.update);

    // Delete a Note with noteId
    app.delete('/menuSpace/:menuSpaceId', menuSpace.delete);
}