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
  const textBody = req.body.post;

  const createdBlog =  await Blogs.create({
    blog: textBody.text,
    blogType: 'text',
    userId: req.body.userId,
    title: textBody.title
  });
  console.log('createdBlogs', createdBlog);
});

router.post('/image', singleMulterUpload('upl'), async function (req, res, next) {
  console.log('req.body.userId', req.body.userId);
  console.log('req.body.image', req.body.image);
  console.log('req.file', req.file);
  let userData = req.body;

  let image = await singlePublicFileUpload(req.file);
  console.log('\x1b[36m%s\x1b[0m', 'image', image);

  const createdBlog =  await Blogs.create({
    blog: image,
    blogType: 'image',
    userId: req.body.userId,
  });
  console.log('\x1b[36m%s\x1b[0m', 'createdBlog', createdBlog);
  return createdBlog;
})


module.exports = router;
