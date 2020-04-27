const express = require('express');
const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;
  router.get('/', async (request, response) => {
    const speakers = await speakersService.getList();
    return response.json(speakers); // .send('Speakers list');
  });

  router.get('/:shortname', (request, response) => {
    return response.send(`Details of ${request.params.shortname}`);
  });

  return router;
};
