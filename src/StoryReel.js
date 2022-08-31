import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=300"
        profileSrc="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29vZCUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        title="James"
      />
      <Story
        image="https://images.unsplash.com/photo-1516370873344-fb7c61054fa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwYXQlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://media.gettyimages.com/photos/portrait-of-a-smiling-young-businessman-picture-id1283894355?k=20&m=1283894355&s=612x612&w=0&h=TNrlXeFNGmdpiL0wa0QNB_AdX2w346I9nbpVbIy_uZE="
        title="Peter"
      />
      <Story
        image="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        profileSrc="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300"
        title="Andrew"
      />
      <Story
        image="https://www.burjkhalifa.ae/en/Images/BurjKhalifa-02982_new_tcm290-85702.jpg"
        profileSrc="https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=300"
        title="Adam"
      />
      <Story
        image="https://media.istockphoto.com/photos/baked-goods-picture-id139885298?k=20&m=139885298&s=612x612&w=0&h=uLwbu0P6v041MjdMO1hhO-9U9OfnQoDOM330-hqwRhk="
        profileSrc="https://media.istockphoto.com/photos/man-takes-selfie-on-dock-above-lake-using-mobile-phone-picture-id1290077647?k=20&m=1290077647&s=612x612&w=0&h=0EY2NP0nlulLn3cie6CQDmO6iYBtzu4mK6oBGiuv2UA="
        title="Nick"
      />
    </div>
  );
}

export default StoryReel;
