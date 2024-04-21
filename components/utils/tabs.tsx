// icons
import {
  UserIcon,
  InboxStackIcon,
  BellIcon,
  HeartIcon,
  StarIcon,
  ChatBubbleLeftIcon,
  WalletIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export const tabs = [
  {
    label: "Ο λογαριασμός μου",
    icon: UserIcon,
    link: "my-account",
  },
  {
    label: "Παραγγελίες",
    icon: InboxStackIcon,
    link: "orders",
  },
  {
    label: "Ειδοποιήσεις",
    icon: BellIcon,
    link: "notifications",
  },
  {
    label: "Αγαπημένα",
    icon: HeartIcon,
    link: "favorites",
  },
  {
    label: "Αξιολογήσεις",
    icon: StarIcon,
    link: "reviews",
  },
  {
    label: "Συζητήσεις",
    icon: ChatBubbleLeftIcon,
    link: "discussions",
  },
  {
    label: "Skroutz Wallet",
    icon: WalletIcon,
    link: "wallet",
  },
  {
    label: "Skroutz Plus",
    icon: ChatBubbleLeftEllipsisIcon,
    link: "plus",
  },
  {
    label: "Ρυθμίσεις",
    icon: Cog6ToothIcon,
    link: "settings",
  },
  {
    label: "Βοήθεια",
    icon: QuestionMarkCircleIcon,
    link: "help",
  },
];
