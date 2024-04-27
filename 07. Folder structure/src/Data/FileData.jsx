let dataobj = {
  //objects can have his own folderitemobj also
  foldername: "src",
  folderItems: [
    {
      filename: "app.js",
    },
    {
      filename: "Index.js",
    },
    {
      foldername: "Styles", //nestedfoldername
      folderItems: [
        {
          filename: "styles.css",
        },
        {
          filename: "Index.css",
        },
      ],
    },
  ],
};

export default dataobj;
