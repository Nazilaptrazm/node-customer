const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

/**
 * Customer Routes
 */

// Homepage
router.get('/', customerController.homepage);

// About Page
router.get('/about', customerController.about);

// Add Customer Page
router.get('/add', customerController.addCustomer);
router.post('/add', customerController.postCustomer);

// View Customer by ID
router.get('/view/:id', customerController.view);

// Edit Customer by ID
router.get('/edit/:id', customerController.edit);
router.put('/edit/:id', customerController.editPost);

// Delete Customer by ID
router.delete('/edit/:id', customerController.deleteCustomer);

// Search Customers
router.post('/search', customerController.searchCustomers);

module.exports = router;
