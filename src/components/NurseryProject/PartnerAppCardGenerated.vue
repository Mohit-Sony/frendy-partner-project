<template>
 <div class="mb-12 grey lighten-2">
  <v-system-bar dark color="primary">
   <v-spacer></v-spacer>
   <v-icon>mdi-wifi-strength-4</v-icon>
   <v-icon>mdi-signal-cellular-outline</v-icon>
   <v-icon>mdi-battery</v-icon>
   <span>12:30</span>
  </v-system-bar>

  <v-card class="mx-auto" max-width="344">
   <div class="printMe">
    <v-img src="../../assets/CardBlank.png" height="200px" class="img">
     <v-avatar class="profile-image" size="45">
       <v-img
        :src="profileImage"
       ></v-img>
      <!-- <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" /> -->
     </v-avatar>
     <v-card-title class="px-3 py-1 text-subtitle-2 font-weight-bold">
      <div class="name-position yellow--text">
       {{ $store.getters.name }}<br />Frendy Partner <br /><span
        class="white--text hashtag"
        >#EmpoweredHomepreneur</span
       >
      </div>
      <div class="number-position white--text">
       <v-icon small class="white black--text mr-1">mdi-phone</v-icon>
       {{ $store.getters.phoneNumber }}
       <span class="address-position">
        <v-icon small class="white black--text mr-1">mdi-map-marker</v-icon>
        {{ $store.getters.cityName }}, {{ $store.getters.stateName }}</span
       >
      </div>
     </v-card-title>
    </v-img>
   </div>
  </v-card>

  <v-container>
   <v-row>
    <v-col cols="4"> </v-col>
    <v-col cols="8">
     <v-img
      class="center mt-12 mb-12"
      height="70px"
      width="70px"
      src="../../assets/check.png"
     >
     </v-img>
    </v-col>
   </v-row>
  </v-container>

  <!-- <h2 class="mt-12 text-center">{{ $store.getters.name }}</h2> -->
  <p class="text-center">Your visiting card is created successfully</p>
  <v-row>
   <v-col class="text-center">
    <v-btn color="green" class="white--text" @click="takeShot"
     ><v-icon class="mr-1">mdi-whatsapp</v-icon>Share on whatsapp</v-btn
    >
   </v-col>
  </v-row>
 </div>
</template>

<script>
import html2canvas from "html2canvas";
import toDataUrl from "image-to-base64";
import axios from "axios";
// import { wordBreak } from 'html2canvas/dist/types/css/property-descriptors/word-break';
export default {
 data: () => ({
  valid: true,
  name: "",
  // image:'',
  email: "",
  phoneNumber: "",
  cityName: "",
  stateName: "",
  profileImage:''
 }),
 methods: {
  takeShot: async function () {
   let div = document.getElementsByClassName("printMe")[0];
   let ImageToUrl = await html2canvas(div);
   let image = ImageToUrl.toDataURL("image/png").replace(
    "image/png",
    "image/octet-stream"
   );
   console.log(image);
   window.location.href = image;
  },
  convertImageToDataUrl:function (url) {
    console.log(url);
   toDataUrl(url).then((response) => {
    let appendToImage = "data:image/jpeg;base64,";
    let imageToDataUrl = appendToImage + response;
    console.log(imageToDataUrl);

    return imageToDataUrl;
   });
  },
  getProfilePic:async function(){
    console.log("::::::::::::::::::::::::");
    let data=await axios.get("http://localhost:8000/profilepic");
    console.log(data.data);
    this.profileImage=data.data;
  }
 },
 created() {
  console.log(this.$store.getters.name);
  console.log(this.$store.getters.phoneNumber);
  console.log(this.$store.getters.cityName);
  console.log(this.$store.getters.stateName);
  this.getProfilePic();
 },
};
</script>

<style> 
.avtar {
 text-align: center;
}
.avtar img {
 width: 100px;
}
.abc {
 margin: 8px;
}
.name-position {
 color: white;
 margin-left: 44.25px;
 margin-top: 7.8px;
 font-size: 0.8rem;
 line-height: 1.3;
}
.hashtag {
 display: block;
 font-size: 0.5rem;
 padding-top: -100px;
}
.profile-image {
 margin-left: 10px;
 margin-top: 10px;
 position: absolute;
}
.number-position {
 margin-top: 19px;
 margin-left: 90px;
 font-size: 0.75rem;
}
.address-position {
 font-size: 0.75rem;
 display: block;
 margin-top: -8px;
}
.abc {
 color: black;
}
.tick {
 margin: auto;
}
</style>
