import { VideoTemplate } from "./types";

// Standard architectural high-rise photo matching the wireframe
export const GlassBuildingTemplate: VideoTemplate = {
  id: "temp_glass_building",
  title: "企业宣传视频",
  style: "企业宣传",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200", // Glass building matching visual reference
  stats: "已有2K人使用",
  tags: ["#公司介绍", "#企业宣传", "#业务推广"],
  description: "只需要按提示上传你的素材，小鹿拍拍会帮你匹配专业的模版，让客户更了解你的公司实际情况，提升信任感！",
  durationSec: 27,
};

export const MockTemplates: VideoTemplate[] = [
  {
    id: "temp_conl1",
    title: "产品实景推介",
    style: "产品介绍",
    image: `${import.meta.env.BASE_URL}produ2.png`,
    stats: "已有3.5K人使用",
    tags: ["#横屏", "#产品展示", "#爆款推荐"],
    description: "经典横屏全景比例，高清展示产品工艺与使用场景。",
    durationSec: 15,
    isLandscape: true,
  },
  {
    id: "temp_retail",
    title: "客户成功案例",
    style: "客户案例",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600",
    stats: "已有948人使用",
    tags: ["#客户见证", "#暖色温情", "#客户案例"],
    description: "第一视角采访式温情还原，结合精修画质，打动每一个潜在加盟或合作商户。",
    durationSec: 30,
  },
  GlassBuildingTemplate,
  {
    id: "temp_delivery",
    title: "产品发布现场",
    style: "产品介绍",
    image: `${import.meta.env.BASE_URL}produ1.png`,
    stats: "已有1.2K人使用",
    tags: ["#新星产品", "#极简科技", "#产品介绍"],
    description: "全方位拆解产品软硬件技术参数，高科技转场光效瞬间吸睛，产品首发推荐！",
    durationSec: 15,
  },
  {
    id: "temp_activity",
    title: "年会节庆与活动组织",
    style: "节日热点",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600",
    stats: "已有810人使用",
    tags: ["#活动集锦", "#高光时刻", "#年会团建"],
    description: "沉浸式收割各类企业峰会、沙龙或节庆典礼的气氛高光，自动匹配大气配乐与震撼剪辑。",
    durationSec: 45,
  },
  {
    id: "temp_aftersales",
    title: "售后维保质量标准",
    style: "售后维保",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    stats: "已有622人使用",
    tags: ["#标准维保", "#精工品质", "#服务公开"],
    description: "视频化展示售后现场及精密保养步骤，服务透明可信，重塑用户对品牌售后的良好口碑。",
    durationSec: 20,
  },
  {
    id: "temp_recruitment",
    title: "企业招商加盟",
    style: "招商加盟",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
    stats: "已有500+人使用",
    tags: ["#招商引资", "#合作共赢", "#商业蓝图"],
    description: "全景展示企业硬核实力与商业蓝图，高效获取招商引资合作机会。",
    durationSec: 25,
  },
  {
    id: "temp_conl2",
    title: "企业发展史",
    style: "企业宣传",
    image: `${import.meta.env.BASE_URL}company1.png`,
    stats: "已有2.1K人使用",
    tags: ["#横屏", "#大屏播放", "#科技风"],
    description: "16:9高级电影感画幅，塑造品牌宏大叙事与科技实力。",
    durationSec: 30,
    isLandscape: true,
  }
];

export const CreationBanners = [
  {
    id: "b2",
    title: "公司简介 快速制作",
    tagline: "定制你的专属印记",
    image: `${import.meta.env.BASE_URL}home3.png`, // High-rise steel/glass office building matching image
    templateId: "temp_glass_building"
  },
  {
    id: "b1",
    title: "客户成功 信任交付",
    tagline: "激发无限精彩纷呈",
    image: `${import.meta.env.BASE_URL}home2.png`, // office paperwork with hands
    templateId: "temp_retail"
  },
  {
    id: "b3",
    title: "懂产品 懂营销",
    tagline: "真正的视频营销利器",
    image: `${import.meta.env.BASE_URL}home1.jpg`, // Yellow shopping elements/bags
    templateId: "temp_delivery"
  }
];
