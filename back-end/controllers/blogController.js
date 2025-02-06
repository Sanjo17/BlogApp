

const Blogs = require('../models/Blog');

exports.getBlogs = async(req,res) => {
    try {
        const blogs = await Blogs.find()
          .populate("author", "username email")
          .sort({ createdAt: -1 }); // Sort by latest first
    
        res.status(200).json({ success: true, data: blogs });
      } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
      }
}
exports.getUserBlogs = async(req,res) => {
    try {
        
    
        const userPosts = await Blogs.find({ author: req.user.id })
          .populate("author", "username email")
          .sort({ createdAt: -1 });
    
        res.status(200).json({ success: true, data: userPosts });
      } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
      }
    };

exports.createBlog = async (req, res) => {
  try {
    const { title, content, isPublic } = req.body;
    const userId = req.user.id; // Assuming user ID is extracted from JWT
    console.log(userId)

    // Validate required fields
    if (!title || !content) {
      return res.status(400).json({ success: false, message: "Title and content are required" });
    }

    const newPost = new Blogs({
      title,
      content,
      author: userId,
      isPublic: isPublic !== undefined ? isPublic : true, // Default to public if not provided
    });

    await newPost.save();


    res.status(201).json({ success: true, message: "Post created successfully", data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};



