const chats = [
    {
        "id": 1,
        "name": "Work Updates",
        "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJUtcobu5Vnd7vP6WRzcfemJqWtT91WtKaaQ&s",
        "time": "10:05 AM",
        "lastMessage": "Alright, let’s get the meeting started!",
        "type": "group",
        "status": "unread",
        "messages": [
            { "messageId": "1", "sender": "John", "text": "Has anyone completed the report for the meeting?", "time": "9:00 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "2", "sender": "Sarah", "text": "I’m almost done with it, should be ready in 30 minutes.", "time": "9:05 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "3", "sender": "John", "text": "Great, I’ll start working on the presentation in the meantime.", "time": "9:10 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "4", "sender": "Tom", "text": "I’ve finished the budget analysis, should I email it now?", "time": "9:15 AM", "messageType": "received", "status": "read", "colorCode": "#ad664b" },
            { "messageId": "5", "sender": "John", "text": "Yes, please send it over so we can include it in the report.", "time": "9:18 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "6", "sender": "Sarah", "text": "Just finished the report, sending it to everyone now.", "time": "9:30 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "7", "sender": "John", "text": "Perfect, I’ll update the presentation with the new data.", "time": "9:35 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "8", "sender": "Tom", "text": "The budget analysis has been sent to everyone.", "time": "9:40 AM", "messageType": "received", "status": "read", "colorCode": "#ad664b" },
            { "messageId": "9", "sender": "John", "text": "Thanks, team! Let’s review everything at 10 AM.", "time": "9:45 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "10", "sender": "Sarah", "text": "Got it, I’ll be ready for the review.", "time": "9:50 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "11", "sender": "Tom", "text": "Just checked, the financial data is up to date.", "time": "9:55 AM", "messageType": "sent", "status": "read", "colorCode": "#ad664b" },
            { "messageId": "12", "sender": "John", "text": "Awesome, that should help with the presentation.", "time": "9:57 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "13", "sender": "Sarah", "text": "I’m adding the final touches to the slides.", "time": "10:00 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "14", "sender": "Tom", "text": "I’ve emailed the budget file to the team. Let me know if you need any changes.", "time": "10:05 AM", "messageType": "received", "status": "read", "colorCode": "#ad664b" },
            { "messageId": "15", "sender": "John", "text": "I’ll go over it and make sure everything is aligned.", "time": "10:10 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "16", "sender": "Sarah", "text": "All set with the presentation. Just need to run through it once more.", "time": "10:15 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "17", "sender": "Tom", "text": "I’ll be available for any last-minute updates if needed.", "time": "10:20 AM", "messageType": "received", "status": "read", "colorCode": "#ad664b" },
            { "messageId": "18", "sender": "John", "text": "Thanks, Tom. I think we’re good to go.", "time": "10:22 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "19", "sender": "Sarah", "text": "Should we schedule a quick rehearsal before the meeting?", "time": "10:25 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "20", "sender": "Tom", "text": "That’s a good idea. Let’s do a 15-minute dry run.", "time": "10:28 AM", "messageType": "received", "status": "read", "colorCode": "#ad664b" },
            { "messageId": "21", "sender": "John", "text": "Agreed. Let’s meet in 10 minutes for a quick rehearsal.", "time": "10:30 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "22", "sender": "Sarah", "text": "Perfect, I’ll start sharing the slides now.", "time": "10:35 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "23", "sender": "Tom", "text": "Slides are looking great! Just checked them.", "time": "10:40 AM", "messageType": "received", "status": "read", "colorCode": "#ad664b" },
            { "messageId": "24", "sender": "John", "text": "Thanks for the feedback, Tom.", "time": "10:42 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "25", "sender": "Sarah", "text": "Rehearsal in 5 minutes. Everyone ready?", "time": "10:45 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "26", "sender": "Tom", "text": "Ready! Let’s do this.", "time": "10:50 AM", "messageType": "received", "status": "read", "colorCode": "#ad664b" },
            { "messageId": "27", "sender": "John", "text": "Let’s go over the key points for the meeting agenda.", "time": "10:55 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "28", "sender": "Sarah", "text": "Starting the dry run now. Everyone, please mute your mics if not speaking.", "time": "11:00 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "29", "sender": "Tom", "text": "Got it. I’ll keep my mic off.", "time": "11:05 AM", "messageType": "received", "status": "read", "colorCode": "#ad664b" },
            { "messageId": "30", "sender": "John", "text": "Looks like the timing is spot on.", "time": "11:10 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "31", "sender": "Sarah", "text": "Great, we’re almost there.", "time": "11:12 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "32", "sender": "Tom", "text": "How much time do we have left for Q&A?", "time": "11:15 AM", "messageType": "received", "status": "read", "colorCode": "#ad664b" },
            { "messageId": "33", "sender": "John", "text": "We have about 10 minutes for Q&A.", "time": "11:20 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "34", "sender": "Sarah", "text": "Perfect, let’s wrap it up then.", "time": "11:25 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "35", "sender": "Tom", "text": "I’ll summarize the main points.", "time": "11:30 AM", "messageType": "received", "status": "read", "colorCode": "#ad664b" },
            { "messageId": "36", "sender": "John", "text": "Thanks, everyone. I’ll handle the closing remarks.", "time": "11:35 AM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" }
        ]
    },
    {
        "id": 2,
        "name": "Grocery List",
        "time": "7:30 PM",
        "lastMessage": "Alright, I’ll get everything tomorrow...",
        "type": "group",
        "unread": 2,
        "messages": [
            { "messageId": "1", "sender": "Mike", "text": "Do we need milk for tomorrow?", "time": "7:00 PM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "2", "sender": "Tina", "text": "Yes, we are out of it.", "time": "7:05 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "3", "sender": "Mike", "text": "Alright, I’ll add it to the list.", "time": "7:07 PM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "4", "sender": "Tina", "text": "We need eggs as well.", "time": "7:10 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "5", "sender": "Mike", "text": "Got it. Anything else?", "time": "7:15 PM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "6", "sender": "Tina", "text": "How about some fruit? We’re running low.", "time": "7:17 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "7", "sender": "Mike", "text": "Sure, I’ll grab some apples and bananas.", "time": "7:20 PM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "8", "sender": "Tina", "text": "Great, and don’t forget bread!", "time": "7:25 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "9", "sender": "Mike", "text": "Bread is on the list now.", "time": "7:30 PM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "10", "sender": "Tina", "text": "Alright, I’ll get everything tomorrow morning.", "time": "7:32 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "11", "sender": "Jake", "text": "Do we need to buy any vegetables?", "time": "7:35 PM", "messageType": "sent", "status": "read", "colorCode": "#08b28a" },
            { "messageId": "12", "sender": "Tina", "text": "Yes, grab some carrots and tomatoes.", "time": "7:38 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "13", "sender": "Mike", "text": "Got it, anything else we need?", "time": "7:40 PM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "14", "sender": "Jake", "text": "Maybe some onions too.", "time": "7:43 PM", "messageType": "received", "status": "read", "colorCode": "#08b28a" },
            { "messageId": "15", "sender": "Mike", "text": "Okay, I'll add onions to the list.", "time": "7:45 PM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "16", "sender": "Tina", "text": "I’ll check the pantry later, we might already have some.", "time": "7:47 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "17", "sender": "Jake", "text": "Alright, I’ll grab the rest of the items.", "time": "7:50 PM", "messageType": "sent", "status": "read", "colorCode": "#08b28a" },
            { "messageId": "18", "sender": "Tina", "text": "Thanks, Jake! I’ll handle the frozen section.", "time": "7:55 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "19", "sender": "Mike", "text": "I’m heading out now. I’ll see you guys tomorrow.", "time": "7:57 PM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "20", "sender": "Jake", "text": "Great, have a good night!", "time": "8:00 PM", "messageType": "received", "status": "read", "colorCode": "#08b28a" },
            { "messageId": "21", "sender": "Tina", "text": "Good night, everyone!", "time": "8:05 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "22", "sender": "Mike", "text": "We’re good to go! See you in the morning.", "time": "8:10 PM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "23", "sender": "Jake", "text": "Got it, good night!", "time": "8:12 PM", "messageType": "received", "status": "read", "colorCode": "#08b28a" },
            { "messageId": "24", "sender": "Tina", "text": "Take care!", "time": "8:15 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "25", "sender": "Mike", "text": "I’ll send the grocery list tomorrow.", "time": "8:20 PM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "26", "sender": "Jake", "text": "Thanks, Mike. I’ll pick up the items first thing in the morning.", "time": "8:25 PM", "messageType": "received", "status": "read", "colorCode": "#08b28a" },
            { "messageId": "27", "sender": "Tina", "text": "Perfect! Everything should be set for tomorrow.", "time": "8:30 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "28", "sender": "Mike", "text": "Absolutely. I’ll get everything sorted for breakfast.", "time": "8:35 PM", "messageType": "sent", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "29", "sender": "Jake", "text": "I’ll be there by 9:00 AM.", "time": "8:40 PM", "messageType": "received", "status": "read", "colorCode": "#08b28a" },
            { "messageId": "30", "sender": "Tina", "text": "See you at 9, good night!", "time": "8:45 PM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" }
        ]
    },
    {
        "id": 3,
        "name": "Family Gathering",
        "time": "8:00 PM",
        "lastMessage": "I’ll bring the dessert.",
        "type": "group",
        "isFavorite": true,
        "messages": [
            { "sender": "Dad", "text": "When should we all meet up tomorrow?", "time": "8:05 PM", "messageType": "sent", "status": "read", "colorCode": "#4CAF50" },
            { "sender": "Mom", "text": "How about 5 PM?", "time": "8:10 PM", "messageType": "received", "status": "read", "colorCode": "#FF5722" },
            { "sender": "Dad", "text": "Sounds good to me!", "time": "8:12 PM", "messageType": "sent", "status": "read", "colorCode": "#4CAF50" },
            { "sender": "Sophie", "text": "I’ll be there, but I’m bringing my friend Sam.", "time": "8:15 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "Mom", "text": "That’s fine, but make sure Sam knows the dress code.", "time": "8:17 PM", "messageType": "received", "status": "read", "colorCode": "#FF5722" },
            { "sender": "Sophie", "text": "Of course, I’ll tell her.", "time": "8:20 PM", "messageType": "sent", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "Dad", "text": "What’s everyone bringing for the meal?", "time": "8:25 PM", "messageType": "sent", "status": "read", "colorCode": "#4CAF50" },
            { "sender": "Sophie", "text": "I’ll bring the drinks.", "time": "8:30 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "Mom", "text": "I’ll make lasagna and garlic bread.", "time": "8:35 PM", "messageType": "received", "status": "read", "colorCode": "#FF5722" },
            { "sender": "Dad", "text": "I’ll bring the salad.", "time": "8:40 PM", "messageType": "received", "status": "read", "colorCode": "#4CAF50" },
            { "sender": "Sophie", "text": "I’ll bring the dessert.", "time": "8:45 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "Sam", "text": "Can I bring something else? I’m thinking of making a side dish.", "time": "8:50 PM", "messageType": "sent", "status": "read", "colorCode": "#3F51B5" },
            { "sender": "Mom", "text": "That sounds great! Maybe something vegetarian?", "time": "8:55 PM", "messageType": "received", "status": "read", "colorCode": "#FF5722" },
            { "sender": "Sam", "text": "I’ll bring a vegetarian pasta salad.", "time": "9:00 PM", "messageType": "sent", "status": "read", "colorCode": "#3F51B5" },
            { "sender": "Dad", "text": "Sounds delicious! This is going to be a great meal.", "time": "9:05 PM", "messageType": "sent", "status": "read", "colorCode": "#4CAF50" },
            { "sender": "Sophie", "text": "I’m excited! It’s been a while since we’ve all gotten together.", "time": "9:10 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "Sam", "text": "Me too! I’m looking forward to meeting everyone.", "time": "9:12 PM", "messageType": "sent", "status": "read", "colorCode": "#3F51B5" },
            { "sender": "Mom", "text": "Same here, it’ll be fun catching up.", "time": "9:15 PM", "messageType": "received", "status": "read", "colorCode": "#FF5722" },
            { "sender": "Dad", "text": "Alright, see you all tomorrow! I’ll get everything ready.", "time": "9:20 PM", "messageType": "sent", "status": "read", "colorCode": "#4CAF50" },
            { "sender": "Sophie", "text": "See you tomorrow! I’ll bring the drinks on my way.", "time": "9:25 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "Sam", "text": "Looking forward to it!", "time": "9:30 PM", "messageType": "sent", "status": "read", "colorCode": "#3F51B5" },
            { "sender": "Mom", "text": "Great! I’ll start cooking early.", "time": "9:35 PM", "messageType": "received", "status": "read", "colorCode": "#FF5722" },
            { "sender": "Dad", "text": "I’ll get the drinks. We need enough for everyone.", "time": "9:40 PM", "messageType": "sent", "status": "read", "colorCode": "#4CAF50" },
            { "sender": "Sophie", "text": "I’ll stop by the store on my way!", "time": "9:45 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "Sam", "text": "Sounds like a plan! See you soon!", "time": "9:50 PM", "messageType": "sent", "status": "read", "colorCode": "#3F51B5" }
        ]
    },
    {
        "id": 4,
        "name": "Workout Plan",
        "profilePic": "https://static.vecteezy.com/system/resources/thumbnails/028/583/570/small/community-logo-template-for-social-team-group-premium-vector.jpg",
        "time": "9:00 PM",
        "lastMessage": "See you in the gym at 7 AM!",
        "type": "group",
        "status": "unread",
        "unread": 3,
        "messages": [
            { "sender": "John", "text": "What’s the plan for tomorrow's workout?", "time": "9:05 PM", "messageType": "sent", "status": "read", "colorCode": "#FF9800" },
            { "sender": "Emma", "text": "I was thinking of focusing on legs tomorrow.", "time": "9:10 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "John", "text": "Sounds good, I’ll join in.", "time": "9:12 PM", "messageType": "sent", "status": "read", "colorCode": "#FF9800" },
            { "sender": "Michael", "text": "I’ll do a full-body workout.", "time": "9:15 PM", "messageType": "received", "status": "read", "colorCode": "#2196F3" },
            { "sender": "Emma", "text": "Alright, we can start with squats.", "time": "9:20 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "John", "text": "Let’s make sure we do dead lifts too.", "time": "9:25 PM", "messageType": "sent", "status": "read", "colorCode": "#FF9800" },
            { "sender": "Emma", "text": "Absolutely, dead lifts are crucial.", "time": "9:30 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "Michael", "text": "Sounds good. What time are we meeting?", "time": "9:35 PM", "messageType": "received", "status": "read", "colorCode": "#2196F3" },
            { "sender": "John", "text": "I can do 7 AM. Is that good for everyone?", "time": "9:40 PM", "messageType": "sent", "status": "read", "colorCode": "#FF9800" },
            { "sender": "Emma", "text": "7 AM works for me.", "time": "9:45 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "Michael", "text": "Perfect, see you in the gym at 7 AM!", "time": "9:50 PM", "messageType": "received", "status": "read", "colorCode": "#2196F3" },
            { "sender": "Chris", "text": "Can I join in? I need to get my leg workout in as well.", "time": "9:55 PM", "messageType": "sent", "status": "read", "colorCode": "#4CAF50" },
            { "sender": "Emma", "text": "Of course, the more the merrier!", "time": "10:00 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "John", "text": "Awesome, the group is getting bigger!", "time": "10:05 PM", "messageType": "sent", "status": "read", "colorCode": "#FF9800" },
            { "sender": "Michael", "text": "I’m excited to have everyone join in!", "time": "10:10 PM", "messageType": "received", "status": "read", "colorCode": "#2196F3" },
            { "sender": "Chris", "text": "I’ll bring my A-game for this leg day!", "time": "10:15 PM", "messageType": "sent", "status": "read", "colorCode": "#4CAF50" },
            { "sender": "John", "text": "This workout is going to be intense!", "time": "10:20 PM", "messageType": "sent", "status": "read", "colorCode": "#FF9800" },
            { "sender": "Michael", "text": "I’m ready for it. Let’s crush it!", "time": "10:25 PM", "messageType": "received", "status": "read", "colorCode": "#2196F3" },
            { "sender": "Emma", "text": "I’ll make sure to warm up properly before we start.", "time": "10:30 PM", "messageType": "received", "status": "read", "colorCode": "#9C27B0" },
            { "sender": "Chris", "text": "I’ll stretch my legs out to avoid injury.", "time": "10:35 PM", "messageType": "sent", "status": "read", "colorCode": "#4CAF50" },
            { "sender": "John", "text": "Good idea, stretching is key to a good workout.", "time": "10:40 PM", "messageType": "sent", "status": "read", "colorCode": "#FF9800" }
        ]
    },
    {
        "id": 5,
        "name": "Alex",
        "time": "4:52 PM",
        "lastMessage": "I really appreciate it.",
        "type": "individual",
        "profilePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRN_NLZ86evRJyml-2GK6vLVR4JVVmQKy5aQ&s",
        "messages": [
            { "sender": "User", "text": "Got it, thanks!", "time": "3:50 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "No problem! Let me know if you need anything else.", "time": "3:52 PM", "messageType": "received" },
            { "sender": "User", "text": "I’ll send you the report by tomorrow.", "time": "3:55 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "Great! I'll wait for it. Please ensure all the details are included.", "time": "3:57 PM", "messageType": "received" },
            { "sender": "User", "text": "I’ve already started on it.", "time": "4:00 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "Awesome, I appreciate it!", "time": "4:02 PM", "messageType": "received" },
            { "sender": "User", "text": "It should be ready by 5 PM.", "time": "4:05 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "Perfect! Looking forward to it.", "time": "4:07 PM", "messageType": "received" },
            { "sender": "User", "text": "I’m planning to review everything tonight.", "time": "4:10 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "Sounds good, let me know if you need any feedback.", "time": "4:12 PM", "messageType": "received" },
            { "sender": "User", "text": "Let me know if you need anything else.", "time": "4:15 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "Will do! Thanks again for your help.", "time": "4:17 PM", "messageType": "received" },
            { "sender": "User", "text": "I hope everything’s clear.", "time": "4:20 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "Yes, everything looks good so far.", "time": "4:22 PM", "messageType": "received" },
            { "sender": "User", "text": "I’ll follow up once I’m done.", "time": "4:25 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "Sounds great. Let me know if you need anything from my end.", "time": "4:27 PM", "messageType": "received" },
            { "sender": "User", "text": "Hope everything’s going smoothly on your end.", "time": "4:30 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "All good here, thanks for checking in!", "time": "4:32 PM", "messageType": "received" },
            { "sender": "User", "text": "Let’s aim to wrap this up by tomorrow.", "time": "4:35 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "Absolutely, we’re on track.", "time": "4:37 PM", "messageType": "received" },
            { "sender": "User", "text": "Looking forward to your feedback.", "time": "4:40 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "I’ll send it over as soon as I get the report.", "time": "4:42 PM", "messageType": "received" },
            { "sender": "User", "text": "Talk soon!", "time": "4:45 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "Thanks, talk soon!", "time": "4:47 PM", "messageType": "received" },
            { "sender": "User", "text": "Thanks again for your help.", "time": "4:50 PM", "messageType": "sent" },
            { "sender": "Alex", "text": "I really appreciate it.", "time": "4:52 PM", "messageType": "received" },
        ]
    },
    {
        "id": 6,
        "name": "Fitness Squad",
        "time": "7:30 AM",
        "lastMessage": "New workout plan shared",
        "type": "group",
        "messages": [
            { "messageId": "1", "sender": "Trainer", "text": "New workout plan shared", "time": "7:30 AM", "messageType": "sent", "status": "read", "colorCode": "#ff5733" },
            { "messageId": "2", "sender": "Mike", "text": "Looks great!", "time": "7:40 AM", "messageType": "received", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "3", "sender": "Sara", "text": "I’m excited to try this!", "time": "7:45 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "4", "sender": "John", "text": "I love the variety in this plan!", "time": "7:50 AM", "messageType": "received", "status": "read", "colorCode": "#4bbf68" },
            { "messageId": "5", "sender": "Trainer", "text": "Glad you like it! Be sure to stick to the schedule.", "time": "7:55 AM", "messageType": "sent", "status": "read", "colorCode": "#ff5733" },
            { "messageId": "6", "sender": "Mike", "text": "I’ll do my best! How long do we have for each workout?", "time": "8:00 AM", "messageType": "received", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "7", "sender": "Trainer", "text": "Each session is about 45 minutes. You should be able to finish with warm-up and cool-down included.", "time": "8:05 AM", "messageType": "sent", "status": "read", "colorCode": "#ff5733" },
            { "messageId": "8", "sender": "Sara", "text": "Perfect, that’s manageable!", "time": "8:10 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "9", "sender": "John", "text": "I’ll make sure to track my progress. What are we doing tomorrow?", "time": "8:15 AM", "messageType": "received", "status": "read", "colorCode": "#4bbf68" },
            { "messageId": "10", "sender": "Trainer", "text": "Tomorrow is leg day! Get ready for some intense squats and lunges.", "time": "8:20 AM", "messageType": "sent", "status": "read", "colorCode": "#ff5733" },
            { "messageId": "11", "sender": "Mike", "text": "Squats are my favorite! Can’t wait.", "time": "8:25 AM", "messageType": "received", "status": "read", "colorCode": "#94a92d" },
            { "messageId": "12", "sender": "Sara", "text": "I hope I can keep up with the intensity!", "time": "8:30 AM", "messageType": "received", "status": "read", "colorCode": "#d85b8e" },
            { "messageId": "13", "sender": "Trainer", "text": "Don’t worry, we’ll start slow and build up. Focus on form first.", "time": "8:35 AM", "messageType": "sent", "status": "read", "colorCode": "#ff5733" },
            { "messageId": "14", "sender": "John", "text": "Thanks for the encouragement, Trainer!", "time": "8:40 AM", "messageType": "received", "status": "read", "colorCode": "#4bbf68" }
        ]
    },
    {
        id: 7,
        name: "Project X Team",
        time: "4:10 PM",
        lastMessage: "Files updated on Drive",
        type: "group",
        messages: [
            { sender: "Project Lead", text: "Files updated on Drive", time: "4:10 PM" },
            { sender: "Tom", text: "I’ve downloaded them.", time: "4:15 PM" },
            { sender: "Emily", text: "Got it, thanks!", time: "4:20 PM" },
        ],
    },
    {
        id: 8,
        name: "Emily",
        time: "10:20 PM",
        lastMessage: "Let me know when you're free",
        type: "individual",
        messages: [
            { sender: "Emily", text: "Let me know when you're free", time: "10:20 PM" },
        ],
    },
    {
        id: 9,
        name: "Travel Buddies",
        time: "Yesterday",
        lastMessage: "Tickets booked!",
        type: "group",
        messages: [
            { sender: "Alice", text: "Tickets booked!", time: "6:00 PM" },
            { sender: "Bob", text: "Awesome, looking forward!", time: "6:05 PM" },
            { sender: "Charlie", text: "Can’t wait!", time: "6:10 PM" },
        ],
    },
    {
        id: 10,
        name: "Mike",
        time: "5:30 PM",
        lastMessage: "Call me when you're done",
        type: "individual",
        messages: [
            { sender: "Mike", text: "Call me when you're done", time: "5:30 PM" },
        ],
    },
    {
        id: 11,
        name: "Marketing Team",
        time: "2:15 PM",
        lastMessage: "Ad campaign approved!",
        type: "group",
        messages: [
            { sender: "Team Lead", text: "Ad campaign approved!", time: "2:15 PM" },
            { sender: "Mark", text: "Great news!", time: "2:20 PM" },
            { sender: "Lily", text: "Let’s get started!", time: "2:25 PM" },
        ],
    },
    {
        id: 12,
        name: "Sarah",
        time: "12:00 PM",
        lastMessage: "Lunch tomorrow?",
        type: "individual",
        messages: [
            { sender: "Sarah", text: "Lunch tomorrow?", time: "12:00 PM" },
        ],
    },
    {
        id: 13,
        name: "Tech Enthusiasts",
        time: "5:00 AM",
        lastMessage: "Check out this cool gadget",
        type: "group",
        messages: [
            { sender: "John", text: "Check out this cool gadget", time: "5:00 AM" },
            { sender: "Emma", text: "That looks awesome!", time: "5:05 AM" },
            { sender: "Liam", text: "I need that in my life!", time: "5:10 AM" },
        ],
    },
    {
        id: 14,
        name: "Gaming Crew",
        time: "7:45 PM",
        lastMessage: "Ready for tonight's session?",
        type: "group",
        messages: [
            { sender: "Ryan", text: "Ready for tonight's session?", time: "7:45 PM" },
            { sender: "James", text: "I’m in!", time: "7:50 PM" },
            { sender: "Chris", text: "Let’s do this!", time: "7:55 PM" },
        ],
    },
    {
        id: 15,
        name: "David",
        time: "Yesterday",
        lastMessage: "Thanks for the help!",
        type: "individual",
        messages: [
            { sender: "David", text: "Thanks for the help!", time: "7:00 PM" },
        ],
    },
    {
        id: 16,
        name: "Movie Night",
        time: "11:10 AM",
        lastMessage: "What should we watch?",
        type: "group",
        messages: [
            { sender: "Sophia", text: "What should we watch?", time: "11:10 AM" },
            { sender: "Oliver", text: "How about a thriller?", time: "11:15 AM" },
            { sender: "Emma", text: "I’m in for that!", time: "11:20 AM" },
        ],
    },
    {
        id: 17,
        name: "Sophia",
        time: "9:00 AM",
        lastMessage: "Good morning!",
        type: "individual",
        messages: [
            { sender: "Sophia", text: "Good morning!", time: "9:00 AM" },
        ],
    },
    {
        id: 18,
        name: "Startup Team",
        time: "6:15 PM",
        lastMessage: "Next steps finalized",
        type: "group",
        messages: [
            { sender: "CEO", text: "Next steps finalized", time: "6:15 PM" },
            { sender: "Anna", text: "Ready to move forward!", time: "6:20 PM" },
            { sender: "David", text: "Let’s do this!", time: "6:25 PM" },
        ],
    },
    {
        id: 19,
        name: "Pet Lovers",
        time: "2:00 PM",
        lastMessage: "Cute pic of my dog!",
        type: "group",
        messages: [
            { sender: "John", text: "Cute pic of my dog!", time: "2:00 PM" },
            { sender: "Lily", text: "Aww, so cute!", time: "2:05 PM" },
            { sender: "Emma", text: "I love dogs!", time: "2:10 PM" },
        ],
    },
    {
        id: 20,
        name: "Ethan",
        time: "8:40 PM",
        lastMessage: "Let's finalize the details",
        type: "individual",
        messages: [
            { sender: "Ethan", text: "Let's finalize the details", time: "8:40 PM" },
        ],
    },
];

export default chats;