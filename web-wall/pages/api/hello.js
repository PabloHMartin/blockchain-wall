const { createHash } = require('crypto');

export default function handler(req, res) {

  const msg = "hello";

  const hash = createHash('sha256').update(msg).digest('hex');
  res.status(200).json({ hash: hash })

}
