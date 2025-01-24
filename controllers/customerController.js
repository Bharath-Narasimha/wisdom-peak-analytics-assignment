const Customer = require('../models/customer');

exports.create = async (req, res) => {
  try {
    const { name, email, phone, company } = req.body;

    const customer = await Customer.create({ name, email, phone, company, userId: req.user.id });
    res.status(201).json({ message: 'Customer created successfully', customer });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.list = async (req, res) => {
  try {
    const { search, company } = req.query;
    const where = {};

    if (search) {
      where.name = { [Op.like]: `%${search}%` };
    }
    if (company) {
      where.company = company;
    }

    const customers = await Customer.findAll({ where, userId: req.user.id });
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Other CRUD functions like `update` and `delete` can be added here.
