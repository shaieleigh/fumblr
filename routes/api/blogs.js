const express = require('express');

const { Blogs } = require('../../db/models');

// const { s3,
//   singlePublicFileUpload,
//   multiplePublicFileUpload,
//   singlePrivateFileUpload,
//   multiplePrivateFileUpload,
//   retrievePrivateFile,
//   singleMulterUpload,
//   multipleMulterUpload } = require('../util/aws');

const router = express.Router();

router.post('/', async function (req, res) {
  let blog = await Blogs.findAll();
  console.log('req', req);
  console.log('res', res);
})
