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
  console.log('req.body', req.body);
  const textBody = req.body.post;
  // console.log('req.file', req.file);
  // textBody.mediaUrl = await singlePublicFileUpload(req.file);
  // console.log('textBody.mediaUrl', textBody.mediaUrl);
  console.log('textBody', textBody);
  console.log('user', req.body.userId)

  const createdBlog =  await Blogs.create({
    blog: textBody.text,
    blogType: 'text',
    userId: req.body.userId,
    title: textBody.title
  });
  console.log('createdBlogs', createdBlog);
});

router.post('/image', async function (req, res, next) {
  console.log('req.body', req.body);
  console.log('req.body.file', req.body.file);
  const userData = req.body;
  userData.image = await singlePrivateFileUpload(req.body.file);
  consol.log('userData.image', 'color:blue;font-size:15px');
})


module.exports = router;
