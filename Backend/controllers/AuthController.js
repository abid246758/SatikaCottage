const jwt = require('jsonwebtoken');

// User login and token generation
exports.login = async (req, res) => {

  try {
    if(process.env.USER_MAIL!=req.body.email || process.env.USER_PASS!=req.body.pass){
        return res.status(404).json({ error: 'User not found' });
    }
    // Create token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Authentication failed', details: err.message });
  }
};
