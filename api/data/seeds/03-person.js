exports.seed = async function (knex) {
  await knex("people").insert([
    {
      person_name: "Jimmy Paul Jones",
      person_birthday: "04/27/59",
      person_image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/166722279_10165103822160192_2171319867880398667_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=niYotRMKiYMAX_kWp-i&_nc_ht=scontent-dfw5-2.xx&oh=00_AT8jRfIA3dOVddrjKISxUaYitqoFwDY-pnKuCILqocAcQA&oe=6223B4AA",
      person_spouse_id: 2,
      nuclear_id: 1
    },
    {
      person_name: "Dana Leanne Jones",
      person_birthday: "03/23/62",
      person_image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/38508319_10160759462300192_7134717917412720640_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ytZK_cjasz0AX8dFj23&_nc_ht=scontent-dfw5-2.xx&oh=00_AT_LhwQpLQDGf6ZPwWygx2gme84KODEKpNv-bhIijH6jUQ&oe=62231F61",
      person_spouse_id: 1,
      nuclear_id: 1
    },
    {
      person_name: "Travis Paul Jones",
      person_birthday: "12/14/89",
      person_image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t31.18172-8/11118607_10100414053405997_4174260195412380993_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ba80b0&_nc_ohc=Qs4fey5jtd4AX9PPmAR&_nc_ht=scontent-dfw5-1.xx&oh=00_AT9KR2jXLTJFBfvHv2IzmQ3wh8QgV3w1l8Mf1LCeaea0ew&oe=6221CF1B",
      person_spouse_id: 4,
      nuclear_id: 2
    },
    {
      person_name: "Morgan Blaire Jones",
      person_birthday: "07/05/89",
      person_image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/72981489_10158013995053028_6898806135621419008_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MVGlwKScVc4AX-IOyQq&_nc_ht=scontent-dfw5-2.xx&oh=00_AT-fwEV1xjQ7Idn_ZUkXe9t9X_5oyBDFPMWbOKBSuJwh2w&oe=62225120",
      person_spouse_id: 3,
      nuclear_id: 2
    },
    {
      person_name: "Skylar Paige Jones",
      person_birthday: "09/13/19",
      person_image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/72981489_10158013995053028_6898806135621419008_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=MVGlwKScVc4AX-IOyQq&_nc_ht=scontent-dfw5-2.xx&oh=00_AT-fwEV1xjQ7Idn_ZUkXe9t9X_5oyBDFPMWbOKBSuJwh2w&oe=62225120",
      person_spouse_id: null,
      nuclear_id: 2
    },
    {
      person_name: "Emily Kathryn Mills",
      person_birthday: "01/08/91",
      person_image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/160845516_10164701866285368_5984157458397211835_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=CKrKMQ7bYYwAX8wXHxX&tn=di-4HtWsz5FFSxQn&_nc_ht=scontent-dfw5-2.xx&oh=00_AT_VfdKqxyZxeQR65emotnbq12C05xLz_t_syI0WQYCL_w&oe=6223359B",
      person_spouse_id: 7,
      nuclear_id: 3
    },
    {
      person_name: "Ian Christian Mills",
      person_birthday: "01/08/91",
      person_image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/161265440_10164701862145368_2701694035510266084_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=PFBhZN_Kf-oAX_oPD6r&_nc_ht=scontent-dfw5-1.xx&oh=00_AT9gJrewNM1vAOtjfSvRNaB7adYjFrd3cQRmkWdYx5fAvA&oe=6222F8DD",
      person_spouse_id: 6,
      nuclear_id: 3
    },
    {
      person_name: "Rosemary Joy Mills",
      person_birthday: "12/20/20",
      person_image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/269739027_10165650765765368_4606952917624818924_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=vEuNAiwYpt8AX8aPqhU&_nc_ht=scontent-dfw5-1.xx&oh=00_AT9jYQxI0SoPVY95rAxISshLoN2y8X6w6jw4lvzvJMX2-A&oe=62020493",
      person_spouse_id: null,
      nuclear_id: 3
    },
    {
      person_name: "Morgan Kelly Jones",
      person_birthday: "10/01/95",
      person_image: "https://drive.google.com/file/d/1RET7HiOJt1O3aGz-5juenetdCpu8DuRl/view?usp=sharing",
      person_spouse_id: null,
      nuclear_id: 1
    },
  ]);
};
