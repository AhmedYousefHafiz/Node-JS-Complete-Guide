exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: "First title", content: "First content!" }],
  });
};
