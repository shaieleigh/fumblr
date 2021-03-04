const express = require('express');
const csrfProtection = require("csurf")({ cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production",
      httpOnly: true,
      }
    });

const { Blogs } = require('../../db/models');
const { requireUser } = require('../util/auth');

const { s3,
  singlePublicFileUpload,
  multiplePublicFileUpload,
  singlePrivateFileUpload,
  multiplePrivateFileUpload,
  retrievePrivateFile,
  singleMulterUpload,
  multipleMulterUpload } = require('../util/aws');

const router = express.Router();

router.post('/text', async function (req, res) {
  console.log('req', req.body);
  const textBody = req.body.post;
  // console.log('req.file', req.file);
  // textBody.mediaUrl = await singlePublicFileUpload(req.file);
  // console.log('textBody.mediaUrl', textBody.mediaUrl);
  console.log('textBody', textBody);
  const createdBlog = new Blogs(textBody);
  console.log('createdBlogs', createdBlog);
})


module.exports = router;
