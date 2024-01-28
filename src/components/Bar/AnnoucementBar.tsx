import React from "react";
import Email from "../../utils/Email";
import PhoneIcon from "../../utils/PhoneIcon";
import { theme } from "../../utils/theme";
import "./modules.bar.css";

type socialIcon = {
  name: React.ReactNode;
  url: string;
};

type TextProps = {
  fontWeight: number;
  padding: number;
  backgroundColor: string;
  color: string;
  phoneNumber: string;
  email: string;
  socialIcon: socialIcon[];
};

export default function AnnouncementBar({
  fontWeight,
  padding,
  backgroundColor,
  color,
  phoneNumber,
  email,
  socialIcon,
}: TextProps) {
  return (
    <div
      style={{
        padding: padding ? padding : 20,
        backgroundColor: backgroundColor ? backgroundColor : theme.barColor,
        color: color ? color : theme.light,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Contact Information */}
      <div className="mainBar">
        <div className="contactInfo">
          {/* Contact 1 */}
          <h6 style={{ fontWeight: fontWeight ? fontWeight : 400 }}>
            <PhoneIcon />
            +1 {phoneNumber ? phoneNumber : "647-924-6789"}
          </h6>
          <h6 style={{ fontWeight: fontWeight ? fontWeight : 400 }}>
            <Email />
            {email ? email : "devil@gmail.com"}
          </h6>
        </div>
      </div>

      <div className="iconContainer">
        {socialIcon?.map(({ name, url }, index) => {
          return (
            <a href={url} key={index}>
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
