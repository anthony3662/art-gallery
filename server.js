//dummy data
// const paintings = {
//   collection0: [
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349118940-HXU1JHF1Z4NJ3M9PZZS8/ke17ZwdGBToddI8pDm48kPcQCfWmjodQuThvRD_vsaZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgW76Fdph_yfmF3xbrrdflVy7C6uYDF1SxHJjFFzJesaug/A+few+songlike+canisters+popped.jpg?format=1500w',
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349203688-UBHTZUSAAOHPCWPPUXFM/ke17ZwdGBToddI8pDm48kDOUZ6oz_SYjuo_-Z684RLJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hZPx-jNbZA_TaS-5l2nNKG8NL_bBkUKBgd7s8zw7vZknL2Scc6JHyBJCPVi4G3z8w/In+a+split+second+the+stride+of+a+million.jpg?format=1500w',
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349142540-3M3CF52BRESZIX334XQE/ke17ZwdGBToddI8pDm48kPpAxxAMkdWLvZ8KPwskBm17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p5uBJOnOmCWBN4JfYsIDyS6K0NYX-Vp73rpruyycpr9CU5uQp4nuBxKgx0JQoevkw/Horn-loudspeaker-birds+soaked.jpg?format=1500w',
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349164821-0QJC09T3W8A2FRXTVNN2/ke17ZwdGBToddI8pDm48kI5LLFD310hRzGbHNqBNk9Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1iABP4NLB7hexwIF53MHR8F7LYJzTSroBaKfMCwLmZEoA/Flags+like+moths+wings.jpg?format=1500w',
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349240957-EK9V53QJQ16WX28YTTEB/ke17ZwdGBToddI8pDm48kD3i-_0accf_N5I2nSfwJy57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5cXnumgNsVpJ4BTXsTGcnwUQKnh3BrgHlRwfCT2VrP47Q/The+day+that+went+from+flute+to+flute.jpg?format=1500w',
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349253858-256TLG10LFLY0H4Z4AT5/ke17ZwdGBToddI8pDm48kPcQCfWmjodQuThvRD_vsaZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgW76Fdph_yfmF3xbrrdflVy7C6uYDF1SxHJjFFzJesaug/The+line+that+marched.jpg?format=1500w'
//   ],
//   collection1: [
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016049929-5A3KVXRFD28KXZLVEMKS/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/16+Jan+2020_1409+Outside+teahouse+looking+towards+garden.jpg?format=1500w',
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016060043-QJ3GGYJW2OXINM2UIF6U/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/16+Jan+2020_1508+%28fluttertonguing+helicopters%29.jpg?format=1500w',
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016070530-20QYF20OLZM4GXHWC34T/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020+%28Bones%29.jpg?format=1500w',
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016074819-9MST7T724SGPZ83GENG0/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1400+Outside+teahouse+kinda+hiding+from+camera+crew.jpg?format=1500w',
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016080829-ZCQQRSEHLF9K73P1CAA8/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1450.jpg?format=1500w',
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016080829-ZCQQRSEHLF9K73P1CAA8/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1450.jpg?format=1500w',
//     'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016102740-AYORTT02M0I388HNPD0B/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/19+Jan+2020+%28a+zaizen%29+1115am.jpg?format=1500w'
//   ]
// };

const paintings = {
  collection0: [
    {url: "https://i.ibb.co/9nBYQCy/firstone.jpg", name: "Dad's Garage, 2021. acrylic on canvas", dimensions: '36 x 36 inches'},
    {url: "https://i.ibb.co/TwFGxxX/20210612-194229-jpg.png", name: 'Redirection, 2021. acrylic on canvas', dimensions: '20 x 18 inches'},
    {url: "https://i.ibb.co/gWs686T/20210612-183752-jpg.png", name: "I Caused All my Breakups, 2021. acrylic on canvas", dimensions: '40 x 30 inches'},
    {url: "https://i.ibb.co/Y3zW8gn/20210612-191705-jpg.png", name: "Camel Castle, 2021. acrylic on canvas", dimensions: '20 x 18 inches'},
    {url: "https://i.ibb.co/D9cWXYL/20210612-193102-jpg.png", name: "I Shouldn't Have To, 2021. acrylic on canvas", dimensions: '20 x 18 inches'},
    {url: "https://i.ibb.co/MSDZhmc/lastone.jpg", name: "Local Celebrity, 2021. acrylic on canvas", dimensions: '40 x 30 inches'},
    {url: 'https://i.ibb.co/0FLvzFm/highquality.jpg', name: "Pilgrim's Progress, 2021. acrylic on canvas", dimensions: '30 x 40 inches'},
    {url: "https://i.ibb.co/sq3Swd1/20210628-133031.jpg", name: 'Find Stuff to Do, 2021. acrylic on canvas', dimensions: '20 x 18 inches'},
    {url: "https://i.ibb.co/LQm2nGN/20210628-134815.jpg", name: "Paid to Party, 2021. acrylic on canvas", dimensions: '18 x 20 inches'},
    {url: "https://i.ibb.co/Hx1syGV/20210612-194419-jpg.png", name: 'If Only to Live in Your Memory, 2021. acrylic on canvas', dimensions: '18 x 14 inches'},
    {url: "https://i.ibb.co/BwySFVH/20210628-132810.jpg", name: 'Celtic Woman, Celtic Man, 2021. acrylic on canvas', dimensions: '18 x 20 inches'},
    {url: "https://i.ibb.co/8YShvjg/20210612-194852-jpg.png", name: 'Antebellum Dream Look, 2021. acrylic on canvas', dimensions: '20 x 18 inches'},
    {url: "https://i.ibb.co/26tgzQY/20210612-195750-jpg.png", name: 'Celestial Flesh, 2021. acrylic on canvas', dimensions: '18 x 20 inches'},
    {url: "https://i.ibb.co/n3WTYR9/20210628-135317.jpg", name: "Pulling Back, 2021. acrylic on canvas", dimensions: '30 x 24 inches'},
    {url: "https://i.ibb.co/PwznPP7/20210612-200528-jpg.png", name: 'Ghosted While Dating, 2021. acrylic on canvas', dimensions: '18 x 20 inches'},
    {url: 'https://i.ibb.co/68hQwgt/cobainrow.png', name: 'No Recess', dimensions: '18 x 44 inches overall'}
    // {url: "https://i.ibb.co/Jzn2dvt/20210612-200823.jpg", name: 'undefined, 2021. acrylic on canvas", dimensions: 'undefined'}
  ],
  // 'No Recess': [
  //   {url: 'https://i.ibb.co/m0DR4MT/cobainsmall.png'},
  //   {url: "https://i.ibb.co/98kVfzp/20210612-190410.jpg"},
  //   {url: 'https://i.ibb.co/cC64YTK/cobain-Square.png'},
  // ],
  // 'For the Sake of Accumulating Facts': [
  //   {url: "https://i.ibb.co/Hd212f2/facts0.png"},
  //   {url: "https://i.ibb.co/mGgDxbf/facts1.png"},
  //   {url: "https://i.ibb.co/z2VvQHf/facts2.png"},
  //   {url: "https://i.ibb.co/1Tzfmsb/facts3.png"},
  // ],
  // Sanitarribley: [
  //   {url: "https://i.ibb.co/C0S2QbK/sani0.png"},
  //   {url: "https://i.ibb.co/TKQZ7TQ/sani1.png"},
  //   {url: "https://i.ibb.co/RCk0nm9/sani2.png"},
  //   {url: "https://i.ibb.co/bmdFYLw/sani3.png"},
  // ]
};

const drawings = {
  Enchiridion: [
    {url: "https://i.ibb.co/G0XKpRJ/IMG-8518.png", name: "Untitled (Enchiridion 1), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/RCWNbTh/IMG-8515.png", name: "Untitled (Enchiridion 2), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/WcTzTJJ/IMG-8527.png", name: "Untitled (Enchiridion 3), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/Y09M6FW/IMG-8517.png", name: "Untitled (Enchiridion 4), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/jbZZpTL/resized.png", name: "Untitled (Enchiridion 5), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/xLSLsq9/IMG-8519.png", name: "Untitled (Enchiridion 6), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    // {url: "https://i.ibb.co/C7TmdLY/IMG-8520.png", name: "Untitled 2021", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/YdP4253/IMG-8521.png", name: "Untitled (Enchiridion 7), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/6XBMQG7/IMG-8522.png", name: "Untitled (Enchiridion 8), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    // {url: "https://i.ibb.co/JKv9VLw/IMG-8523.png", name: "Untitled 2021", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/QPKpmV0/IMG-8524.png", name: "Untitled (Enchiridion 9), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/HXWWh53/IMG-8525.png", name: "Untitled (Enchiridion 10), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/Wc5jCgj/IMG-8526.png", name: "Untitled (Enchiridion 11), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/FXj18FH/IMG-8516.png", name: "Untitled (Enchiridion 12), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/z8vKtqq/IMG-8528.png", name: "Untitled (Enchiridion 13), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/9VJ5MdK/IMG-8529.png", name: "Untitled (Enchiridion 14), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/2YSdrbb/IMG-8530.png", name: "Untitled (Enchiridion 15), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    // {url: "https://i.ibb.co/zbTfWjJ/Untitled-Artwork-11.png", name: "Untitled 2021", dimensions: '16 x 16 inches'}
  ],
  Turtles: [
    {url: "https://i.ibb.co/YhtSSBj/Untitled-Artwork-5.png", name: "Untitled (Turtles 1), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/7zd28Cy/Untitled-Artwork-17.png", name: "Untitled (Turtles 2), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/3C4CmNt/Untitled-Artwork-3.png", name: "Untitled (Turtles 3), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/B6HT7Sw/Untitled-Artwork-6.png", name: "Untitled (Turtles 4), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/sqWDHNk/Untitled-Artwork.png", name: "Untitled (Turtles 5), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/Wn01Xcb/Untitled-Artwork-13.png", name: "Untitled (Turtles 6), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/cxHjs6t/Untitled-Artwork-12.png", name: "Untitled (Turtles 7), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/yYXRP9X/Untitled-Artwork-4.png", name: "Untitled (Turtles 8), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/WV4hWkT/Untitled-Artwork-14.png", name: "Untitled (Turtles 9), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/fQnh0v3/Untitled-Artwork-2.png", name: "Untitled (Turtles 10), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/yN9z2bF/Get-Attachment-Thumbnail-id-AQMk-ADAw-ATY3-Zm-YAZS1i-Njll-LTgy-ZDYt-MDACLTAw-Cg-BGAAADy2-Uw6-Pqfskik.png", name: "Untitled (Turtles 11), 2021. graphite on paper", dimensions: '16 x 16 inches'},
    {url: "https://i.ibb.co/1nT2BcT/Untitled-Artwork-16.png", name: "Untitled (Turtles 12), 2021. graphite on paper", dimensions: '16 x 16 inches'},
  ]
};

const videos = [
  'https://www.youtube.com/embed/1UjhSJF6Rdw?rel=0'
];

const cv = {
  section1: `2021. Jameel Art Centre, Dubai*
  2021. ???The World Falls Apart Into Facts,??? Ota Fine Arts, Tokyo
  2021. ???Closer Reading,??? ORDET, Milan`,
  section2: `2021. Jameel Art Centre, Dubai*
  2021. ???The World Falls Apart Into Facts,??? Ota Fine Arts, Tokyo
  2021. ???Closer Reading,??? ORDET, Milan`,
  section3: `2021. Jameel Art Centre, Dubai*
  2021. ???The World Falls Apart Into Facts,??? Ota Fine Arts, Tokyo
  2021. ???Closer Reading,??? ORDET, Milan`
};

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use('/', express.static(__dirname + "/public"));

app.get('/paintings', (req, res) => {
  res.json(paintings);
});

app.get('/drawings', (req, res) => {
  res.json(drawings);
});

app.get('/videos', (req, res) => {
  res.json(videos);
});

app.get('/cv', (req, res) => {
  res.json(cv);
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

