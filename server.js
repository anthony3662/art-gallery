const paintings = {
  collection0: [
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349118940-HXU1JHF1Z4NJ3M9PZZS8/ke17ZwdGBToddI8pDm48kPcQCfWmjodQuThvRD_vsaZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgW76Fdph_yfmF3xbrrdflVy7C6uYDF1SxHJjFFzJesaug/A+few+songlike+canisters+popped.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349203688-UBHTZUSAAOHPCWPPUXFM/ke17ZwdGBToddI8pDm48kDOUZ6oz_SYjuo_-Z684RLJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hZPx-jNbZA_TaS-5l2nNKG8NL_bBkUKBgd7s8zw7vZknL2Scc6JHyBJCPVi4G3z8w/In+a+split+second+the+stride+of+a+million.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349142540-3M3CF52BRESZIX334XQE/ke17ZwdGBToddI8pDm48kPpAxxAMkdWLvZ8KPwskBm17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p5uBJOnOmCWBN4JfYsIDyS6K0NYX-Vp73rpruyycpr9CU5uQp4nuBxKgx0JQoevkw/Horn-loudspeaker-birds+soaked.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349164821-0QJC09T3W8A2FRXTVNN2/ke17ZwdGBToddI8pDm48kI5LLFD310hRzGbHNqBNk9Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1iABP4NLB7hexwIF53MHR8F7LYJzTSroBaKfMCwLmZEoA/Flags+like+moths+wings.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349240957-EK9V53QJQ16WX28YTTEB/ke17ZwdGBToddI8pDm48kD3i-_0accf_N5I2nSfwJy57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5cXnumgNsVpJ4BTXsTGcnwUQKnh3BrgHlRwfCT2VrP47Q/The+day+that+went+from+flute+to+flute.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349253858-256TLG10LFLY0H4Z4AT5/ke17ZwdGBToddI8pDm48kPcQCfWmjodQuThvRD_vsaZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgW76Fdph_yfmF3xbrrdflVy7C6uYDF1SxHJjFFzJesaug/The+line+that+marched.jpg?format=1500w'
  ],
  collection1: [
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016049929-5A3KVXRFD28KXZLVEMKS/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/16+Jan+2020_1409+Outside+teahouse+looking+towards+garden.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016060043-QJ3GGYJW2OXINM2UIF6U/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/16+Jan+2020_1508+%28fluttertonguing+helicopters%29.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016070530-20QYF20OLZM4GXHWC34T/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020+%28Bones%29.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016074819-9MST7T724SGPZ83GENG0/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1400+Outside+teahouse+kinda+hiding+from+camera+crew.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016080829-ZCQQRSEHLF9K73P1CAA8/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1450.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016080829-ZCQQRSEHLF9K73P1CAA8/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1450.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016102740-AYORTT02M0I388HNPD0B/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/19+Jan+2020+%28a+zaizen%29+1115am.jpg?format=1500w'
  ]
};

const drawings = {
  collection0: [
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016049929-5A3KVXRFD28KXZLVEMKS/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/16+Jan+2020_1409+Outside+teahouse+looking+towards+garden.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016060043-QJ3GGYJW2OXINM2UIF6U/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/16+Jan+2020_1508+%28fluttertonguing+helicopters%29.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016070530-20QYF20OLZM4GXHWC34T/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020+%28Bones%29.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016074819-9MST7T724SGPZ83GENG0/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1400+Outside+teahouse+kinda+hiding+from+camera+crew.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016080829-ZCQQRSEHLF9K73P1CAA8/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1450.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016080829-ZCQQRSEHLF9K73P1CAA8/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1450.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016102740-AYORTT02M0I388HNPD0B/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/19+Jan+2020+%28a+zaizen%29+1115am.jpg?format=1500w'
  ],
  collection1: [
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349118940-HXU1JHF1Z4NJ3M9PZZS8/ke17ZwdGBToddI8pDm48kPcQCfWmjodQuThvRD_vsaZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgW76Fdph_yfmF3xbrrdflVy7C6uYDF1SxHJjFFzJesaug/A+few+songlike+canisters+popped.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349203688-UBHTZUSAAOHPCWPPUXFM/ke17ZwdGBToddI8pDm48kDOUZ6oz_SYjuo_-Z684RLJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hZPx-jNbZA_TaS-5l2nNKG8NL_bBkUKBgd7s8zw7vZknL2Scc6JHyBJCPVi4G3z8w/In+a+split+second+the+stride+of+a+million.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349142540-3M3CF52BRESZIX334XQE/ke17ZwdGBToddI8pDm48kPpAxxAMkdWLvZ8KPwskBm17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0p5uBJOnOmCWBN4JfYsIDyS6K0NYX-Vp73rpruyycpr9CU5uQp4nuBxKgx0JQoevkw/Horn-loudspeaker-birds+soaked.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349164821-0QJC09T3W8A2FRXTVNN2/ke17ZwdGBToddI8pDm48kI5LLFD310hRzGbHNqBNk9Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iXS6XmVv7bUJ418E8Yoc1iABP4NLB7hexwIF53MHR8F7LYJzTSroBaKfMCwLmZEoA/Flags+like+moths+wings.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349240957-EK9V53QJQ16WX28YTTEB/ke17ZwdGBToddI8pDm48kD3i-_0accf_N5I2nSfwJy57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5cXnumgNsVpJ4BTXsTGcnwUQKnh3BrgHlRwfCT2VrP47Q/The+day+that+went+from+flute+to+flute.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1575349253858-256TLG10LFLY0H4Z4AT5/ke17ZwdGBToddI8pDm48kPcQCfWmjodQuThvRD_vsaZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgW76Fdph_yfmF3xbrrdflVy7C6uYDF1SxHJjFFzJesaug/The+line+that+marched.jpg?format=1500w'
  ],
  collection2: [
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016049929-5A3KVXRFD28KXZLVEMKS/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/16+Jan+2020_1409+Outside+teahouse+looking+towards+garden.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016060043-QJ3GGYJW2OXINM2UIF6U/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/16+Jan+2020_1508+%28fluttertonguing+helicopters%29.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016070530-20QYF20OLZM4GXHWC34T/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020+%28Bones%29.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016074819-9MST7T724SGPZ83GENG0/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1400+Outside+teahouse+kinda+hiding+from+camera+crew.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016080829-ZCQQRSEHLF9K73P1CAA8/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1450.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016080829-ZCQQRSEHLF9K73P1CAA8/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1450.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016102740-AYORTT02M0I388HNPD0B/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/19+Jan+2020+%28a+zaizen%29+1115am.jpg?format=1500w'
  ],
  collection3: [
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016049929-5A3KVXRFD28KXZLVEMKS/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/16+Jan+2020_1409+Outside+teahouse+looking+towards+garden.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016060043-QJ3GGYJW2OXINM2UIF6U/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/16+Jan+2020_1508+%28fluttertonguing+helicopters%29.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016070530-20QYF20OLZM4GXHWC34T/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020+%28Bones%29.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016074819-9MST7T724SGPZ83GENG0/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1400+Outside+teahouse+kinda+hiding+from+camera+crew.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016080829-ZCQQRSEHLF9K73P1CAA8/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1450.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016080829-ZCQQRSEHLF9K73P1CAA8/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/17+Jan+2020_1450.jpg?format=1500w',
    'https://images.squarespace-cdn.com/content/v1/5b189c5870e802e5235557bb/1585016102740-AYORTT02M0I388HNPD0B/ke17ZwdGBToddI8pDm48kOW3kzZ5ya7rzsyhMGA6Hkd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0gmXcXvEVFTLbYX9CdVcGe70yUiUfCubZXJLxIqGjAaPVT8GsA_Szg_-QQhMzMSazA/19+Jan+2020+%28a+zaizen%29+1115am.jpg?format=1500w'
  ]
};

const videos = [
  'https://player.vimeo.com/video/215774222',
  'https://player.vimeo.com/video/215774222',
  'https://player.vimeo.com/video/373154046'
];

const cv = {
  section1: `2021. Jameel Art Centre, Dubai*
  2021. “The World Falls Apart Into Facts,” Ota Fine Arts, Tokyo
  2021. “Closer Reading,” ORDET, Milan`,
  section2: `2021. Jameel Art Centre, Dubai*
  2021. “The World Falls Apart Into Facts,” Ota Fine Arts, Tokyo
  2021. “Closer Reading,” ORDET, Milan`,
  section3: `2021. Jameel Art Centre, Dubai*
  2021. “The World Falls Apart Into Facts,” Ota Fine Arts, Tokyo
  2021. “Closer Reading,” ORDET, Milan`
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
