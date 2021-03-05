const express = require('express');
const csrfProtection = require("csurf")({ cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production",
      httpOnly: true,
      }
    });

const { Blogs } = require('../../db/models');
const { requireUser, getCurrentUser } = require('../util/auth');

const { s3,
  singlePublicFileUpload,
  multiplePublicFileUpload,
  singlePrivateFileUpload,
  multiplePrivateFileUpload,
  retrievePrivateFile,
  singleMulterUpload,
  multipleMulterUpload } = require('../util/aws');

const router = express.Router();

router.post('/text', async function (req, res, next) {
  console.log('req', req.body);
  const textBody = req.body.post;
  // console.log('req.file', req.file);
  // textBody.mediaUrl = await singlePublicFileUpload(req.file);
  // console.log('textBody.mediaUrl', textBody.mediaUrl);
  console.log('textBody', textBody);
  
  console.log('user', user)
  const createdBlog =  await Blogs.create({
    blog: textBody.text,
    blogType: 'text',
    userId: user,
    title: textBody.title
  });
  console.log('createdBlogs', createdBlog);
})


module.exports = router;
