import React from "react";
import NewPost from "./NewPost/NewPost";
import TextPost from "./PostsTypes/TextPost/TextPost";
import Story from "./Story/Story";

const MidSection = (props) => {
  const descriptions = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sint eius aut voluptates optio tempore quod eaque, odit temporibus. Id.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, magni laudantium incidunt ea delectus culpa perferendis nulla impedit veritatis explicabo sequi ad, rem omnis quae laborum? Esse amet doloremque laudantium libero dolor illo quis fugiat tempora expedita animi tenetur odit, veritatis velit molestiae blanditiis nisi nesciunt numquam suscipit omnis quisquam! ",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos nobis possimus nihil dolor molestias tempora nemo reiciendis? Officia, voluptatem? Illum dolorem corrupti recusandae quis facilis veritatis provident est pariatur doloremque repellat dolores fugiat consequuntur, soluta maiores optio unde dolore labore porro amet quos molestiae consequatur error similique enim. Pariatur totam sunt, rerum voluptate excepturi expedita praesentium aliquid hic dolore perferendis, perspiciatis nihil vel corrupti voluptatum labore exercitationem aut voluptas dicta reprehenderit error tenetur laudantium illum voluptates nemo? Esse fugiat ab, minima nihil illo quisquam dicta, in natus labore modi pariatur ipsam odio? Nemo, nesciunt omnis! Distinctio repudiandae quisquam cum voluptates.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, magni laudantium incidunt ea delectus culpa perferendis nulla impedit veritatis explicabo sequi ad, rem omnis quae laborum? Esse amet doloremque laudantium libero dolor illo quis fugiat tempora expedita animi tenetur odit, veritatis velit molestiae blanditiis nisi nesciunt numquam suscipit omnis quisquam! ",
  ];
  return (
    <>
      <Story />
      <NewPost />
      <TextPost name={"Bilas Halder"} description={descriptions[0]} />
      <TextPost
        feeling={"Happy"}
        name={"Bilas"}
        description={descriptions[1]}
      />
      <TextPost
        name={"Halder"}
        activity="Tasks"
        description={descriptions[2]}
      />
      <TextPost
        name={"Halder"}
        activity="Tasks"
        description={descriptions[3]}
      />
    </>
  );
};

export default MidSection;
