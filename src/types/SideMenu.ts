import { SvgIconComponent } from "@mui/icons-material";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SlowMotionVideoOutlinedIcon from "@mui/icons-material/SlowMotionVideoOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import OutlinedFlagTwoToneIcon from '@mui/icons-material/OutlinedFlagTwoTone';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

export interface MenuItem {
  title: string;
  icon: SvgIconComponent;
  navigationLink: string;
}

export interface Channel {
  title : string;
  channelId : string;
  url : string;
  channelUrl : string;
}

const Menu: MenuItem[] = [
  {
    title: "Home",
    icon: CottageOutlinedIcon,
    navigationLink: "/",
  },

  {
    title: "Explore",
    icon: ExploreOutlinedIcon,
    navigationLink: "",
  },

  {
    title: "Shorts",
    icon: SlowMotionVideoOutlinedIcon,
    navigationLink: "",
  },

  {
    title: "Subscriptions",
    icon: SubscriptionsOutlinedIcon,
    navigationLink: "",
  },
];

const Menu2: MenuItem[] = [
  {
    title: "Library",
    icon: VideoLibraryOutlinedIcon,
    navigationLink: "/",
  },

  {
    title: "History",
    icon: HistoryOutlinedIcon,
    navigationLink: "/",
  },

  {
    title: "Your Videos",
    icon: VideoLibraryOutlinedIcon,
    navigationLink: "/",
  },

  {
    title: "Watch Later",
    icon: WatchLaterOutlinedIcon,
    navigationLink: "",
  },

  {
    title: "Liked Videos",
    icon: SubscriptionsOutlinedIcon,
    navigationLink: "",
  },
];

const SettingsMenu: MenuItem[] = [
  {
    title: "Settings",
    icon: SettingsIcon,
    navigationLink: "",
  },

  {
    title: "Report History",
    icon: OutlinedFlagTwoToneIcon,
    navigationLink: "",
  },

  {
    title: "Help",
    icon: HelpOutlineOutlinedIcon,
    navigationLink: "",
  },

  {
    title: "Send Feedback",
    icon: TextsmsOutlinedIcon,
    navigationLink: "",
  }
];

const Channels: Channel[] = [
  {
    title: "Cipsa Motivation",
    channelId: "UCaFw9cH80hvRyLaxBB9ANWQ",
    url : "https://www.w3schools.com/howto/img_avatar.png",
    channelUrl : '/channel/UCaFw9cH80hvRyLaxBB9ANWQ'
  },
  {
    title: "Coding Ninjas",
    channelId: "UCZJlMUYdbtzQ8tVfLvK1KvQ",
    url : "https://www.w3schools.com/howto/img_avatar.png",
    channelUrl : '/channel/UCZJlMUYdbtzQ8tVfLvK1KvQ'
  },
  {
    title: "take U forward",
    channelId: "UCJskGeByzRRSvmOyZOz61ig",
    url : "https://www.w3schools.com/howto/img_avatar.png",
    channelUrl : '/channel/UCJskGeByzRRSvmOyZOz61ig'
  }
];

export { Menu, Menu2 , SettingsMenu , Channels};
