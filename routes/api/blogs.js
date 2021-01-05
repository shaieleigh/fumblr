const express = require('express');
const csrfProtection = require("csurf")({ cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production",
      httpOnly: true,
      }
    });

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

  console.log('req', req);
  console.log('res', res);
  return res;
})
