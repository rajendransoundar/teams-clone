import React from 'react'
import {Chat, Activity, Call, Teams, Calendar, Files, Apps, Help} from "../../assets/Icons"

export default function index() {
    const Menu = [
        {
            icon: <Activity/>,
            label: "Activity",
            path: "/activity"
        },
        {
            icon: <Chat/>,
            label: "Chat",
            path: "/chat"
        },
        {
            icon: <Teams/>,
            label: "Teams",
            path: "/Teams"
        },

        {
            icon: <Calendar/>,
            label: "Calendar",
            path: "/Calendar"
        },
        {
            icon: <Call/>,
            label: "Call",
            path: "/Call"
        },
        {
            icon: <Files/>,
            label: "Files",
            path: "/Files"
        },
        {
            icon: <Activity/>,
            label: "Activity",
            path: "/Activity"
        },
        {
            icon: <Activity/>,
            label: "Activity",
            path: "/Activity"
        },
        {
            icon: <Apps/>,
            label: "Apps",
            path: "/Apps"
        },
        {
            icon: <Help/>,
            label: "Help",
            path: "/Help"
        },
        ];
  return (
    <>
    <div className="sidebar-container">
        <div className="top-menu">
            {Menu?.map((menus, indx)=>(
                <>
                <figure>{menus.icon}<figcaption>{menus.label}</figcaption></figure>
                </>
            )) }
        </div>
        <div className="help-menu"></div>
    </div>
    </>
  )
}
