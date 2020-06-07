export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  // "dev": {
  //   "username": "udagramleocdev",
  //   "password": "Suporte#634",
  //   "database": "udagramleocdev",
  //   "host": "udagramleocdev.cyukqlvlwzz0.us-east-1.rds.amazonaws.com",
  //   "dialect": "postgres",
  //   "aws_region": "us-east-1",
  //   "aws_profile": "default",
  //   "aws_media_bucket": "udagram-leoc-dev"
  // },
//   app.get("/filteredimage", async ( req, res) => {
//     const { url } = req.query;

//     if (!url) {
//       res.status(400).send("Not a valid URL");
//     }

//     try {
//       const post = await filterImageFromURL(url);

//       await res.status(200).sendFile(post, (e) => {
//         if (e) return res.status(422).send("Unable to filter image");
//         deleteLocalFiles([post]);
//       });
//     } catch (e) {
//       res.status(422).send("Unable to find / filter image");
//     }
// });
  "jwt":{
    "secret": "helloworld"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
