import { Dropdown, Avatar } from "@rewind-ui/core";
import {
  Gear,
  ChatCircleText,
  Images,
  MagnifyingGlass,
  Export,
  Trash,
  SignOut,
  XCircle,
} from "@phosphor-icons/react";
import logo from "/FumbleLogo1.webp";

export default function Nav() {
  return (
    <header
      className="z-20 p-1 flex flex-row sticky top-0 px-8 items-center bg-white border-b border-b-gray-100 w-full shadow-sm min-h-[4rem]"
      style={{ maxHeight: "50px" }}
    >
      <div className="flex flex-row items-center">
        <img
          src={logo}
          alt="Logo"
          height={"100px"}
          width={"100px"}
          className="mt-12 me-4"
          style={{ borderRadius: 50 }}
        ></img>
        {/* <div className="text-4xl font-semibold text-gray-800">Fumble</div> */}
      </div>
      <div className="ms-auto me-auto">Test</div>
      <div>
        <Dropdown itemColor="gray" trigger="hover" className="ms-auto">
          <Dropdown.Trigger>
            <div className="flex flex-row items-center hover:bg-gray-200 rounded-md p-2">
              <Avatar
                src="matt.png"
                initials="M"
                alt="Matt"
                size="lg"
                className="me-2"
              />
              <div className="font-medium text-gray-700 text-base cursor-default">
                Matt
              </div>
            </div>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Label>Application</Dropdown.Label>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Gear size={20} weight="duotone" className="mr-1.5" />
              Settings
            </Dropdown.Item>
            <Dropdown.Item>
              <ChatCircleText size={20} weight="duotone" className="mr-1.5" />
              Messages
            </Dropdown.Item>
            <Dropdown.Item>
              <Images size={20} weight="duotone" className="mr-1.5" />
              Gallery
            </Dropdown.Item>
            <Dropdown.Item>
              <MagnifyingGlass size={20} weight="duotone" className="mr-1.5" />
              Search
            </Dropdown.Item>
            <Dropdown.Label color="red">Danger Zone</Dropdown.Label>
            <Dropdown.Divider />
            <Dropdown.Item color="yellow">
              <Export size={20} weight="duotone" className="mr-1.5" />
              Transfer my data
            </Dropdown.Item>
            <Dropdown.Item disabled>
              <Trash size={20} weight="duotone" className="mr-1.5" />
              Delete my account
            </Dropdown.Item>
            <Dropdown.Item color="red">
              <SignOut size={20} weight="duotone" className="mr-1.5" />
              Logout
            </Dropdown.Item>
            <Dropdown.Item color="gray">
              <XCircle size={20} weight="duotone" className="mr-1.5" />
              Close
            </Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </div>
    </header>
  );
}
