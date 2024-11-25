import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ chats, setCurrentChatId }) => {
  const [activeChat, setActiveChat] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("Search");
  const [filteredChats, setFilteredChats] = useState(chats);

  return (
    <div className="sidebar text-white d-flex flex-column" style={{ width: "610px", height: "100vh" }}>
      <div className="sidebar-header p-3 d-flex align-items-center justify-content-between">
        <div>
          <h4 className="mb-0">Chats</h4>
        </div>
        <div className="d-flex justify-content-between">
          {/* New Chat Icon */}
          <div className="hover text-white-50">
            <svg viewBox="0 0 24 24" height="26" width="26" preserveAspectRatio="xMidYMid meet" className="" fill="none">
              <title>new-chat-outline</title><path d="M9.53277 12.9911H11.5086V14.9671C11.5086 15.3999 11.7634 15.8175 12.1762 15.9488C12.8608 16.1661 13.4909 15.6613 13.4909 15.009V12.9911H15.4672C15.9005 12.9911 16.3181 12.7358 16.449 12.3226C16.6659 11.6381 16.1606 11.0089 15.5086 11.0089H13.4909V9.03332C13.4909 8.60007 13.2361 8.18252 12.8233 8.05119C12.1391 7.83391 11.5086 8.33872 11.5086 8.991V11.0089H9.49088C8.83941 11.0089 8.33411 11.6381 8.55097 12.3226C8.68144 12.7358 9.09947 12.9911 9.53277 12.9911Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M0.944298 5.52617L2.99998 8.84848V17.3333C2.99998 18.8061 4.19389 20 5.66665 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667C22 5.19391 20.8061 4 19.3333 4H1.79468C1.01126 4 0.532088 4.85997 0.944298 5.52617ZM4.99998 8.27977V17.3333C4.99998 17.7015 5.29845 18 5.66665 18H19.3333C19.7015 18 20 17.7015 20 17.3333V6.66667C20 6.29848 19.7015 6 19.3333 6H3.58937L4.99998 8.27977Z" fill="currentColor"></path>
            </svg>
          </div>

          <div className="hover text-white-50 ms-3">
            <svg viewBox="0 0 24 24" height="26" width="26" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24">
              <title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="px-3 py-2 search-bar-container">
        <label className="search-bar-label">
          {
            searchActive ? (
              <svg className="search-bar-icon-back"
                enableBackground="new 0 0 32 32"
                height="32px"
                version="1.1"
                viewBox="0 0 32 32"
                width="32px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.002,16c0,0.5522-0.4473,1-1,1H9.8672l4.9629,7.4453c0.3066,0.4595,0.1826,1.0806-0.2773,1.3867   C14.3818,25.9458,14.1895,26,13.999,26c-0.3232,0-0.6406-0.1563-0.833-0.4453L6.7959,16l6.3701-9.5547   c0.3057-0.46,0.9248-0.5845,1.3867-0.2773c0.46,0.3062,0.584,0.9272,0.2773,1.3867L9.8672,15H24.002   C24.5547,15,25.002,15.4478,25.002,16z"
                  fill="#01a882"
                />
              </svg>
            ) : (
              <svg color="#8796a1"
                className="search-bar-icon-search"
                viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>search</title><path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path>
              </svg>
            )
          }

        </label>
        <input
          type="text"
          className="form-control search-bar border-0"
          placeholder={searchText}
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
        />
      </div>

      <div className="filter-buttons px-3 mb-2 d-flex gap-2">
        {/* {console.log('activeFilter', activeFilter)} */}
        <button className={`rounded-4 px-3 py-1 border-0 ${activeFilter === "All" ? "activeFilter" : "inactiveFilter"}`} onClick={() => {
          setActiveFilter("All");
          setSearchText("Search");
          setFilteredChats(chats);
        }
        }>All</button>
        <button className={`rounded-4 px-3 py-1 border-0 ${activeFilter === "Unread" ? "activeFilter" : "inactiveFilter"}`} onClick={() => {
          setActiveFilter("Unread");
          setSearchText("Search unread chats");
          setFilteredChats(chats.filter(chat => chat.status === "unread"));
        }}>Unread</button>
        <button className={`rounded-4 px-3 py-1 border-0 ${activeFilter === "Favorites" ? "activeFilter" : "inactiveFilter"}`} onClick={() => {
          setActiveFilter("Favorites");
          setSearchText("Search favorite chats");
          setFilteredChats(chats.filter(chat => chat.isFavorite));
        }}>Favorites</button>
        <button className={`rounded-4 px-3 py-1 border-0 ${activeFilter === "Groups" ? "activeFilter" : "inactiveFilter"}`} onClick={() => {
          setActiveFilter("Groups");
          setSearchText("Search group chats");
          setFilteredChats(chats.filter(chat => chat.type === "group"));
        }}>Groups</button>
      </div>

      <div className="chats-list flex-grow-1 overflow-auto">
        {filteredChats?.map((chat, index) => (
          <div
            key={chat.id}
            className={`chat hover m-0 ${activeChat === chat.id ? "activeChat" : ""}`}
            onClick={() => {
              setActiveChat(chat.id);
              setCurrentChatId(chat.id);
            }}
          >
            <div className="d-flex justify-content-start align-items-center gap-3 p-3">
              <div>
                {
                  chat.profilePic && chat.profilePic !== "" ? (
                    <img className="rounded-circle" width={50} height={50} alt="profile-pic" draggable="false" tabIndex="-1" src={chat.profilePic} />
                  ) : (
                    chat.type === "group" ? (
                      <svg viewBox="0 0 212 212" height="50" width="50" preserveAspectRatio="xMidYMid meet" fill="none">
                        <title>default-group</title><path d="M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z" fill="#697174" className="xl21vc0"></path><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z" className="x1d6ck0k"></path>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 212 212" height="50" width="50" preserveAspectRatio="xMidYMid meet" className="xh8yej3 x5yr21d" version="1.1" x="0px" y="0px" enableBackground="new 0 0 212 212">
                        <title>default-user</title><path fill="#697174" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z" className="xl21vc0"></path><g><path fill="#FFFFFF" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z" className="x1d6ck0k"></path><path fill="#FFFFFF" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z" className="x1d6ck0k"></path></g>
                      </svg>
                    )
                  )
                }
              </div>
              <div className="d-flex justify-content-between w-100">
                <div className="">
                  <h6 className={`text-white m-0 fw-medium ${chat.unread > 0 ? "fw-bold" : ""}`}>{chat.name}</h6>
                  <small className={`${chat.unread > 0 ? "text-white" : "text-white-50"}`}>{chat.lastMessage}</small>
                </div>
                <div>
                  <div className={`text-end chat-time-text ${chat.unread > 0 ? "chat-time-unread-msg fw-bold" : "text-white-50"}`} style={{ minWidth: "60px" }}>{chat.time}</div>
                  {chat.unread > 0 &&
                    <div className="text-end">
                      <span className="unread-count text-black fw-semibold">{chat.unread}</span>
                    </div>
                  }
                </div>
              </div>
            </div>
            {index + 1 < chats?.length &&
              <div className="ms-5 ps-2 my-0">
                <hr className="text-secondary m-0 ms-4" />
              </div>
            }
          </div>
        ))}
        <div className="mx-4">
          <hr className="mb-2 border border-secondary border-1" />
        </div>
        <div className="mb-3 text-center encrypted-text">
          <svg fill="#ffffff" viewBox="0 0 13 12" height="12" width="13" preserveAspectRatio="xMidYMid meet" className="mb-1">
            <title></title><path d="M9.54004 3.4668C9.54004 2.87891 9.39421 2.33887 9.10254 1.84668C8.81543 1.34993 8.4235 0.958008 7.92676 0.670898C7.43457 0.379232 6.89681 0.233398 6.31348 0.233398C5.72559 0.233398 5.18327 0.379232 4.68652 0.670898C4.19434 0.958008 3.80241 1.34993 3.51074 1.84668C3.22363 2.33887 3.08008 2.87891 3.08008 3.4668V4.7041C3.05273 4.71322 2.99805 4.73828 2.91602 4.7793C2.61979 4.9388 2.39421 5.16439 2.23926 5.45605C2.15267 5.61556 2.09115 5.79102 2.05469 5.98242C2.01823 6.17383 2 6.45866 2 6.83691V9.25C2 9.62826 2.01823 9.91309 2.05469 10.1045C2.09115 10.2959 2.15267 10.4714 2.23926 10.6309C2.39421 10.9225 2.61979 11.1481 2.91602 11.3076C3.07096 11.3942 3.24414 11.4557 3.43555 11.4922C3.63151 11.5286 3.91634 11.5469 4.29004 11.5469H8.33008C8.70378 11.5469 8.98633 11.5286 9.17773 11.4922C9.3737 11.4557 9.54915 11.3942 9.7041 11.3076C9.99577 11.1527 10.2214 10.9271 10.3809 10.6309C10.4674 10.4714 10.529 10.2959 10.5654 10.1045C10.6019 9.91309 10.6201 9.62826 10.6201 9.25V6.83691C10.6201 6.45866 10.6019 6.17383 10.5654 5.98242C10.529 5.79102 10.4674 5.61556 10.3809 5.45605C10.2214 5.15983 9.99577 4.93424 9.7041 4.7793C9.62207 4.73828 9.56738 4.71322 9.54004 4.7041V3.4668ZM4.37207 3.4668C4.37207 3.11589 4.45866 2.79232 4.63184 2.49609C4.80501 2.19531 5.03971 1.95833 5.33594 1.78516C5.63672 1.61198 5.96257 1.52539 6.31348 1.52539C6.66439 1.52539 6.98796 1.61198 7.28418 1.78516C7.5804 1.95833 7.8151 2.19531 7.98828 2.49609C8.16146 2.79232 8.24805 3.11589 8.24805 3.4668V4.54004H4.37207V3.4668Z"></path>
          </svg>
          Your personal messages are <span className="hover encrypted-text-color">end-to-end encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
