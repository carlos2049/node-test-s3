export const uploadPhoto = (req, res) => {
  console.log(req.file)
  res.send("subido");
};