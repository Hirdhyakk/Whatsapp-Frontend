import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ chats, setCurrentChatId }) => {
    // const chats = [
    //     { id: 1, name: "Work Updates", time: "9:30 AM", lastMessage: "Meeting at 10 AM", type: "group" },
    //     { id: 2, name: "John Doe", time: "8:15 AM", lastMessage: "Let's catch up later!", type: "individual" },
    //     { id: 3, name: "Family Group", time: "Yesterday", lastMessage: "Dinner plans?", type: "group" },
    //     { id: 4, name: "Book Club", time: "11:45 PM", lastMessage: "Loved the last chapter!", type: "group" },
    //     { id: 5, name: "Alex", time: "3:50 PM", lastMessage: "Got it, thanks!", type: "individual" },
    //     { id: 6, name: "Fitness Squad", time: "7:30 AM", lastMessage: "New workout plan shared", type: "group" },
    //     { id: 7, name: "Project X Team", time: "4:10 PM", lastMessage: "Files updated on Drive", type: "group" },
    //     { id: 8, name: "Emily", time: "10:20 PM", lastMessage: "Let me know when you're free", type: "individual" },
    //     { id: 9, name: "Travel Buddies", time: "Yesterday", lastMessage: "Tickets booked!", type: "group" },
    //     { id: 10, name: "Mike", time: "5:30 PM", lastMessage: "Call me when you're done", type: "individual" },
    //     { id: 11, name: "Marketing Team", time: "2:15 PM", lastMessage: "Ad campaign approved!", type: "group" },
    //     { id: 12, name: "Sarah", time: "12:00 PM", lastMessage: "Lunch tomorrow?", type: "individual" },
    //     { id: 13, name: "Tech Enthusiasts", time: "5:00 AM", lastMessage: "Check out this cool gadget", type: "group" },
    //     { id: 14, name: "Gaming Crew", time: "7:45 PM", lastMessage: "Ready for tonight's session?", type: "group" },
    //     { id: 15, name: "David", time: "Yesterday", lastMessage: "Thanks for the help!", type: "individual" },
    //     { id: 16, name: "Movie Night", time: "11:10 AM", lastMessage: "What should we watch?", type: "group" },
    //     { id: 17, name: "Sophia", time: "9:00 AM", lastMessage: "Good morning!", type: "individual" },
    //     { id: 18, name: "Startup Team", time: "6:15 PM", lastMessage: "Next steps finalized", type: "group" },
    //     { id: 19, name: "Pet Lovers", time: "2:00 PM", lastMessage: "Cute pic of my dog!", type: "group" },
    //     { id: 20, name: "Ethan", time: "8:40 PM", lastMessage: "Let's finalize the details", type: "individual" },
    // ];

    // const chats = [
    //     {
    //         id: 1,
    //         name: "Work Updates",
    //         time: "9:30 AM",
    //         lastMessage: "Meeting at 10 AM",
    //         type: "group",
    //         messages: [
    //             { sender: "Alice", text: "Meeting at 10 AM", time: "9:30 AM", messageType: "sent" },
    //             { sender: "Bob", text: "See you there!", time: "9:32 AM", messageType: "received" },
    //             { sender: "Charlie", text: "I'll be there!", time: "9:35 AM", messageType: "received" },
    //             { sender: "Alice", text: "Do we have the agenda for today?", time: "9:37 AM", messageType: "sent" },
    //             { sender: "Bob", text: "I haven't received it yet.", time: "9:40 AM", messageType: "received" },
    //             { sender: "Charlie", text: "I think Sarah has it.", time: "9:42 AM", messageType: "received" },
    //             { sender: "Alice", text: "I’ll ping her for it.", time: "9:45 AM", messageType: "sent" },
    //             { sender: "Bob", text: "Great, thanks!", time: "9:47 AM", messageType: "received" },
    //             { sender: "Charlie", text: "Can we meet for coffee before the meeting?", time: "9:50 AM", messageType: "received" },
    //             { sender: "Alice", text: "Sure, I’ll be there at 9:55 AM.", time: "9:52 AM", messageType: "sent" },
    //             { sender: "Bob", text: "Perfect, let’s discuss some points before the meeting.", time: "9:55 AM", messageType: "received" },
    //             { sender: "Charlie", text: "I’ll grab a coffee as well, see you soon.", time: "9:58 AM", messageType: "received" },
    //             { sender: "Alice", text: "Great, looking forward to it.", time: "10:00 AM", messageType: "sent" },
    //             { sender: "Bob", text: "Same here!", time: "10:02 AM", messageType: "received" },
    //             { sender: "Charlie", text: "Alright, let’s get the meeting started!", time: "10:05 AM", messageType: "received" },
    //         ],
    //     },
    //     {
    //         id: 2,
    //         name: "John Doe",
    //         time: "8:15 AM",
    //         lastMessage: "Let's catch up later!",
    //         type: "individual",
    //         messages: [
    //             { sender: "John", text: "Let's catch up later!", time: "8:15 AM", messageType: "sent" },
    //             { sender: "John", text: "I’ll call you around 5 PM.", time: "8:16 AM", messageType: "sent" },
    //             { sender: "John", text: "Have a busy day ahead!", time: "8:20 AM", messageType: "sent" },
    //             { sender: "John", text: "By the way, how’s work going?", time: "8:25 AM", messageType: "sent" },
    //             { sender: "John", text: "I need to discuss some ideas with you.", time: "8:30 AM", messageType: "sent" },
    //             { sender: "John", text: "Got a new project on the table.", time: "8:32 AM", messageType: "sent" },
    //             { sender: "John", text: "I'll need some advice on how to handle it.", time: "8:35 AM", messageType: "sent" },
    //             { sender: "John", text: "Hope your day’s going well!", time: "8:40 AM", messageType: "sent" },
    //             { sender: "John", text: "Let’s plan something for the weekend.", time: "8:45 AM", messageType: "sent" },
    //             { sender: "John", text: "Maybe dinner on Friday?", time: "8:50 AM", messageType: "sent" },
    //             { sender: "John", text: "Let me know your thoughts.", time: "8:55 AM", messageType: "sent" },
    //             { sender: "John", text: "Can’t wait to catch up!", time: "9:00 AM", messageType: "sent" },
    //             { sender: "John", text: "We really should plan some travel too.", time: "9:05 AM", messageType: "sent" },
    //             { sender: "John", text: "Talk later!", time: "9:10 AM", messageType: "sent" },
    //         ],
    //     },
    //     {
    //         id: 3,
    //         name: "Family Group",
    //         time: "Yesterday",
    //         lastMessage: "Dinner plans?",
    //         type: "group",
    //         messages: [
    //             { sender: "Mom", text: "Dinner plans?", time: "7:00 PM", messageType: "sent" },
    //             { sender: "Dad", text: "What time?", time: "7:05 PM", messageType: "received" },
    //             { sender: "Sister", text: "Can we do 8 PM?", time: "7:10 PM", messageType: "received" },
    //             { sender: "Mom", text: "Sounds good to me.", time: "7:15 PM", messageType: "sent" },
    //             { sender: "Dad", text: "I’ll pick up pizza on my way home.", time: "7:18 PM", messageType: "received" },
    //             { sender: "Sister", text: "I’ll bring dessert!", time: "7:20 PM", messageType: "received" },
    //             { sender: "Mom", text: "Perfect! What about drinks?", time: "7:25 PM", messageType: "sent" },
    //             { sender: "Dad", text: "I’ll grab some wine.", time: "7:30 PM", messageType: "received" },
    //             { sender: "Sister", text: "I’ll get some soda.", time: "7:35 PM", messageType: "received" },
    //             { sender: "Mom", text: "Great! I’ll prepare the sides.", time: "7:40 PM", messageType: "sent" },
    //             { sender: "Dad", text: "Awesome, I’ll be home by 8.", time: "7:45 PM", messageType: "received" },
    //             { sender: "Sister", text: "I’ll be there in 20 minutes.", time: "7:50 PM", messageType: "received" },
    //             { sender: "Mom", text: "See you all soon!", time: "7:55 PM", messageType: "sent" },
    //             { sender: "Dad", text: "Can’t wait for pizza!", time: "8:00 PM", messageType: "received" },
    //             { sender: "Sister", text: "This is going to be a fun evening.", time: "8:05 PM", messageType: "received" },
    //         ],
    //     },
    //     {
    //         id: 4,
    //         name: "Book Club",
    //         time: "11:45 PM",
    //         lastMessage: "Loved the last chapter!",
    //         type: "group",
    //         messages: [
    //             { sender: "Alice", text: "Loved the last chapter!", time: "11:45 PM", messageType: "sent" },
    //             { sender: "Bob", text: "Totally agree!", time: "11:50 PM", messageType: "received" },
    //             { sender: "Charlie", text: "Can’t wait for next week’s discussion.", time: "11:55 PM", messageType: "received" },
    //             { sender: "Alice", text: "I think we should talk about the plot twist.", time: "11:57 PM", messageType: "sent" },
    //             { sender: "Bob", text: "That was insane!", time: "12:00 AM", messageType: "received" },
    //             { sender: "Charlie", text: "I didn’t see that coming at all.", time: "12:03 AM", messageType: "received" },
    //             { sender: "Alice", text: "What do you think will happen next?", time: "12:05 AM", messageType: "sent" },
    //             { sender: "Bob", text: "I’m hoping for a good ending.", time: "12:08 AM", messageType: "received" },
    //             { sender: "Charlie", text: "Do you think there will be a sequel?", time: "12:10 AM", messageType: "received" },
    //             { sender: "Alice", text: "Possibly, but it’s hard to say.", time: "12:12 AM", messageType: "sent" },
    //             { sender: "Bob", text: "I love the characters, especially the main one.", time: "12:15 AM", messageType: "received" },
    //             { sender: "Charlie", text: "Same here! So relatable.", time: "12:17 AM", messageType: "received" },
    //             { sender: "Alice", text: "I’ll start on the next chapter tomorrow.", time: "12:20 AM", messageType: "sent" },
    //             { sender: "Bob", text: "Can’t wait to continue.", time: "12:22 AM", messageType: "received" },
    //             { sender: "Charlie", text: "Same, this book is so gripping.", time: "12:25 AM", messageType: "received" },
    //         ],
    //     },
    //     {
    //         id: 5,
    //         name: "Alex",
    //         time: "3:50 PM",
    //         lastMessage: "Got it, thanks!",
    //         type: "individual",
    //         messages: [
    //             { sender: "Alex", text: "Got it, thanks!", time: "3:50 PM", messageType: "sent" },
    //             { sender: "Alex", text: "I’ll send you the report by tomorrow.", time: "3:55 PM", messageType: "sent" },
    //             { sender: "Alex", text: "I’ve already started on it.", time: "4:00 PM", messageType: "sent" },
    //             { sender: "Alex", text: "It should be ready by 5 PM.", time: "4:05 PM", messageType: "sent" },
    //             { sender: "Alex", text: "I’m planning to review everything tonight.", time: "4:10 PM", messageType: "sent" },
    //             { sender: "Alex", text: "Let me know if you need anything else.", time: "4:15 PM", messageType: "sent" },
    //             { sender: "Alex", text: "I hope everything’s clear.", time: "4:20 PM", messageType: "sent" },
    //             { sender: "Alex", text: "I’ll follow up once I’m done.", time: "4:25 PM", messageType: "sent" },
    //             { sender: "Alex", text: "Hope everything’s going smoothly on your end.", time: "4:30 PM", messageType: "sent" },
    //             { sender: "Alex", text: "Let’s aim to wrap this up by tomorrow.", time: "4:35 PM", messageType: "sent" },
    //             { sender: "Alex", text: "Looking forward to your feedback.", time: "4:40 PM", messageType: "sent" },
    //             { sender: "Alex", text: "Talk soon!", time: "4:45 PM", messageType: "sent" },
    //             { sender: "Alex", text: "Thanks again for your help.", time: "4:50 PM", messageType: "sent" },
    //             { sender: "Alex", text: "I really appreciate it.", time: "4:55 PM", messageType: "sent" },
    //         ],
    //     },
    //     {
    //         id: 6,
    //         name: "Fitness Squad",
    //         time: "7:30 AM",
    //         lastMessage: "New workout plan shared",
    //         type: "group",
    //         messages: [
    //             { sender: "Trainer", text: "New workout plan shared", time: "7:30 AM" },
    //             { sender: "Mike", text: "Looks great!", time: "7:40 AM" },
    //             { sender: "Sara", text: "I’m excited to try this!", time: "7:45 AM" },
    //         ],
    //     },
    //     {
    //         id: 7,
    //         name: "Project X Team",
    //         time: "4:10 PM",
    //         lastMessage: "Files updated on Drive",
    //         type: "group",
    //         messages: [
    //             { sender: "Project Lead", text: "Files updated on Drive", time: "4:10 PM" },
    //             { sender: "Tom", text: "I’ve downloaded them.", time: "4:15 PM" },
    //             { sender: "Emily", text: "Got it, thanks!", time: "4:20 PM" },
    //         ],
    //     },
    //     {
    //         id: 8,
    //         name: "Emily",
    //         time: "10:20 PM",
    //         lastMessage: "Let me know when you're free",
    //         type: "individual",
    //         messages: [
    //             { sender: "Emily", text: "Let me know when you're free", time: "10:20 PM" },
    //         ],
    //     },
    //     {
    //         id: 9,
    //         name: "Travel Buddies",
    //         time: "Yesterday",
    //         lastMessage: "Tickets booked!",
    //         type: "group",
    //         messages: [
    //             { sender: "Alice", text: "Tickets booked!", time: "6:00 PM" },
    //             { sender: "Bob", text: "Awesome, looking forward!", time: "6:05 PM" },
    //             { sender: "Charlie", text: "Can’t wait!", time: "6:10 PM" },
    //         ],
    //     },
    //     {
    //         id: 10,
    //         name: "Mike",
    //         time: "5:30 PM",
    //         lastMessage: "Call me when you're done",
    //         type: "individual",
    //         messages: [
    //             { sender: "Mike", text: "Call me when you're done", time: "5:30 PM" },
    //         ],
    //     },
    //     {
    //         id: 11,
    //         name: "Marketing Team",
    //         time: "2:15 PM",
    //         lastMessage: "Ad campaign approved!",
    //         type: "group",
    //         messages: [
    //             { sender: "Team Lead", text: "Ad campaign approved!", time: "2:15 PM" },
    //             { sender: "Mark", text: "Great news!", time: "2:20 PM" },
    //             { sender: "Lily", text: "Let’s get started!", time: "2:25 PM" },
    //         ],
    //     },
    //     {
    //         id: 12,
    //         name: "Sarah",
    //         time: "12:00 PM",
    //         lastMessage: "Lunch tomorrow?",
    //         type: "individual",
    //         messages: [
    //             { sender: "Sarah", text: "Lunch tomorrow?", time: "12:00 PM" },
    //         ],
    //     },
    //     {
    //         id: 13,
    //         name: "Tech Enthusiasts",
    //         time: "5:00 AM",
    //         lastMessage: "Check out this cool gadget",
    //         type: "group",
    //         messages: [
    //             { sender: "John", text: "Check out this cool gadget", time: "5:00 AM" },
    //             { sender: "Emma", text: "That looks awesome!", time: "5:05 AM" },
    //             { sender: "Liam", text: "I need that in my life!", time: "5:10 AM" },
    //         ],
    //     },
    //     {
    //         id: 14,
    //         name: "Gaming Crew",
    //         time: "7:45 PM",
    //         lastMessage: "Ready for tonight's session?",
    //         type: "group",
    //         messages: [
    //             { sender: "Ryan", text: "Ready for tonight's session?", time: "7:45 PM" },
    //             { sender: "James", text: "I’m in!", time: "7:50 PM" },
    //             { sender: "Chris", text: "Let’s do this!", time: "7:55 PM" },
    //         ],
    //     },
    //     {
    //         id: 15,
    //         name: "David",
    //         time: "Yesterday",
    //         lastMessage: "Thanks for the help!",
    //         type: "individual",
    //         messages: [
    //             { sender: "David", text: "Thanks for the help!", time: "7:00 PM" },
    //         ],
    //     },
    //     {
    //         id: 16,
    //         name: "Movie Night",
    //         time: "11:10 AM",
    //         lastMessage: "What should we watch?",
    //         type: "group",
    //         messages: [
    //             { sender: "Sophia", text: "What should we watch?", time: "11:10 AM" },
    //             { sender: "Oliver", text: "How about a thriller?", time: "11:15 AM" },
    //             { sender: "Emma", text: "I’m in for that!", time: "11:20 AM" },
    //         ],
    //     },
    //     {
    //         id: 17,
    //         name: "Sophia",
    //         time: "9:00 AM",
    //         lastMessage: "Good morning!",
    //         type: "individual",
    //         messages: [
    //             { sender: "Sophia", text: "Good morning!", time: "9:00 AM" },
    //         ],
    //     },
    //     {
    //         id: 18,
    //         name: "Startup Team",
    //         time: "6:15 PM",
    //         lastMessage: "Next steps finalized",
    //         type: "group",
    //         messages: [
    //             { sender: "CEO", text: "Next steps finalized", time: "6:15 PM" },
    //             { sender: "Anna", text: "Ready to move forward!", time: "6:20 PM" },
    //             { sender: "David", text: "Let’s do this!", time: "6:25 PM" },
    //         ],
    //     },
    //     {
    //         id: 19,
    //         name: "Pet Lovers",
    //         time: "2:00 PM",
    //         lastMessage: "Cute pic of my dog!",
    //         type: "group",
    //         messages: [
    //             { sender: "John", text: "Cute pic of my dog!", time: "2:00 PM" },
    //             { sender: "Lily", text: "Aww, so cute!", time: "2:05 PM" },
    //             { sender: "Emma", text: "I love dogs!", time: "2:10 PM" },
    //         ],
    //     },
    //     {
    //         id: 20,
    //         name: "Ethan",
    //         time: "8:40 PM",
    //         lastMessage: "Let's finalize the details",
    //         type: "individual",
    //         messages: [
    //             { sender: "Ethan", text: "Let's finalize the details", time: "8:40 PM" },
    //         ],
    //     },
    // ];

    const [activeChat, setActiveChat] = useState(null);
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchActive, setSearchActive] = useState(false);
    const [searchText, setSearchText] = useState("Search");

    return (
        <div className="sidebar text-white d-flex flex-column" style={{ width: "600px", height: "100vh" }}>
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
                                viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet"  version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>search</title><path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path>
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
                }
                }>All</button>
                <button className={`rounded-4 px-3 py-1 border-0 ${activeFilter === "Unread" ? "activeFilter" : "inactiveFilter"}`} onClick={() => {
                    setActiveFilter("Unread")
                    setSearchText("Search unread chats");
                }}>Unread</button>
                <button className={`rounded-4 px-3 py-1 border-0 ${activeFilter === "Favorites" ? "activeFilter" : "inactiveFilter"}`} onClick={() => {
                    setActiveFilter("Favorites")
                    setSearchText("Search favorite chats");
                }}>Favorites</button>
                <button className={`rounded-4 px-3 py-1 border-0 ${activeFilter === "Groups" ? "activeFilter" : "inactiveFilter"}`} onClick={() => {
                    setActiveFilter("Groups")
                    setSearchText("Search group chats");
                }}>Groups</button>
            </div>

            <div className="chats-list flex-grow-1 overflow-auto">
                {chats?.map((chat, index) => (
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
                                {chat.type === "group" ? (
                                    <svg viewBox="0 0 212 212" height="50" width="50" preserveAspectRatio="xMidYMid meet" className="xh8yej3 x5yr21d" fill="none">
                                        <title>default-group</title><path d="M105.946 0.25C164.318 0.25 211.64 47.596 211.64 106C211.64 164.404 164.318 211.75 105.945 211.75C47.571 211.75 0.25 164.404 0.25 106C0.25 47.596 47.571 0.25 105.946 0.25Z" fill="#697174" className="xl21vc0"></path><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M102.282 77.2856C102.282 87.957 93.8569 96.5713 83.3419 96.5713C72.827 96.5713 64.339 87.957 64.339 77.2856C64.339 66.6143 72.827 58 83.3419 58C93.8569 58 102.282 66.6143 102.282 77.2856ZM150.35 80.1427C150.35 89.9446 142.612 97.857 132.954 97.857C123.296 97.857 115.5 89.9446 115.5 80.1427C115.5 70.3409 123.296 62.4285 132.954 62.4285C142.612 62.4285 150.35 70.3409 150.35 80.1427ZM83.3402 109.428C68.5812 109.428 39 116.95 39 131.928V143.714C39 147.25 41.8504 148 45.3343 148H121.346C124.83 148 127.68 147.25 127.68 143.714V131.928C127.68 116.95 98.0991 109.428 83.3402 109.428ZM126.804 110.853C127.707 110.871 128.485 110.886 129 110.886C143.759 110.886 174 116.95 174 131.929V141.571C174 145.107 171.15 148 167.666 148H134.854C135.551 146.007 135.995 143.821 135.995 141.571L135.75 131.071C135.75 121.51 130.136 117.858 124.162 113.971C122.772 113.067 121.363 112.15 120 111.143C119.981 111.123 119.962 111.098 119.941 111.07C119.893 111.007 119.835 110.931 119.747 110.886C121.343 110.747 124.485 110.808 126.804 110.853Z" className="x1d6ck0k"></path>
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 212 212" height="50" width="50" preserveAspectRatio="xMidYMid meet" className="xh8yej3 x5yr21d" version="1.1" x="0px" y="0px" enableBackground="new 0 0 212 212">
                                        <title>default-user</title><path fill="#697174" d="M106.251,0.5C164.653,0.5,212,47.846,212,106.25S164.653,212,106.25,212C47.846,212,0.5,164.654,0.5,106.25 S47.846,0.5,106.251,0.5z" className="xl21vc0"></path><g><path fill="#FFFFFF" d="M173.561,171.615c-0.601-0.915-1.287-1.907-2.065-2.955c-0.777-1.049-1.645-2.155-2.608-3.299 c-0.964-1.144-2.024-2.326-3.184-3.527c-1.741-1.802-3.71-3.646-5.924-5.47c-2.952-2.431-6.339-4.824-10.204-7.026 c-1.877-1.07-3.873-2.092-5.98-3.055c-0.062-0.028-0.118-0.059-0.18-0.087c-9.792-4.44-22.106-7.529-37.416-7.529 s-27.624,3.089-37.416,7.529c-0.338,0.153-0.653,0.318-0.985,0.474c-1.431,0.674-2.806,1.376-4.128,2.101 c-0.716,0.393-1.417,0.792-2.101,1.197c-3.421,2.027-6.475,4.191-9.15,6.395c-2.213,1.823-4.182,3.668-5.924,5.47 c-1.161,1.201-2.22,2.384-3.184,3.527c-0.964,1.144-1.832,2.25-2.609,3.299c-0.778,1.049-1.464,2.04-2.065,2.955 c-0.557,0.848-1.033,1.622-1.447,2.324c-0.033,0.056-0.073,0.119-0.104,0.174c-0.435,0.744-0.79,1.392-1.07,1.926 c-0.559,1.068-0.818,1.678-0.818,1.678v0.398c18.285,17.927,43.322,28.985,70.945,28.985c27.678,0,52.761-11.103,71.055-29.095 v-0.289c0,0-0.619-1.45-1.992-3.778C174.594,173.238,174.117,172.463,173.561,171.615z" className="x1d6ck0k"></path><path fill="#FFFFFF" d="M106.002,125.5c2.645,0,5.212-0.253,7.68-0.737c1.234-0.242,2.443-0.542,3.624-0.896 c1.772-0.532,3.482-1.188,5.12-1.958c2.184-1.027,4.242-2.258,6.15-3.67c2.863-2.119,5.39-4.646,7.509-7.509 c0.706-0.954,1.367-1.945,1.98-2.971c0.919-1.539,1.729-3.155,2.422-4.84c0.462-1.123,0.872-2.277,1.226-3.458 c0.177-0.591,0.341-1.188,0.49-1.792c0.299-1.208,0.542-2.443,0.725-3.701c0.275-1.887,0.417-3.827,0.417-5.811 c0-1.984-0.142-3.925-0.417-5.811c-0.184-1.258-0.426-2.493-0.725-3.701c-0.15-0.604-0.313-1.202-0.49-1.793 c-0.354-1.181-0.764-2.335-1.226-3.458c-0.693-1.685-1.504-3.301-2.422-4.84c-0.613-1.026-1.274-2.017-1.98-2.971 c-2.119-2.863-4.646-5.39-7.509-7.509c-1.909-1.412-3.966-2.643-6.15-3.67c-1.638-0.77-3.348-1.426-5.12-1.958 c-1.181-0.355-2.39-0.655-3.624-0.896c-2.468-0.484-5.035-0.737-7.68-0.737c-21.162,0-37.345,16.183-37.345,37.345 C68.657,109.317,84.84,125.5,106.002,125.5z" className="x1d6ck0k"></path></g>
                                    </svg>
                                )}
                            </div>
                            <div className="d-flex justify-content-between w-100">
                                <div className="">
                                    <h6 className="text-white m-0 fw-medium">{chat.name}</h6>
                                    <small className="text-white-50">{chat.lastMessage}</small>
                                </div>
                                <small className="text-white-50 text-end" style={{ minWidth: "60px" }}>{chat.time}</small>
                            </div>
                        </div>
                        {index + 1 < chats?.length &&
                            <div className="mx-4 my-0">
                                <hr className="text-secondary m-0 ms-5" />
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
