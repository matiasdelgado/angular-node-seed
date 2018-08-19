import * as express from "express";
const router = express.Router();

router.get('/', (req, res, next) => {
  Promise.resolve({ test: true })
		.then(result => res.send(result))
		.catch(next);
});

export default router;
