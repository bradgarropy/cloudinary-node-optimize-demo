import "dotenv/config"

import {v2 as cloudinary} from "cloudinary"

cloudinary.config({cloud_name: process.env.CLOUD_NAME})

// Quality Options
// ---------------
// auto
// best
// good
// eco
// low

const img = cloudinary.url("cloudinary-node-optimize-demo/porkchop.jpg", {
    quality: "auto",
    fetch_format: "auto",
})

console.log(img)
