# StackIt – A Minimal Q&A Forum Platform

Welcome to **StackIt**, **🧠** a simple and focused Question & Answer platform .

StackIt is designed to promote structured knowledge sharing. Users can ask questions, post answers, upvote helpful content, and mark the best answers. Admins can moderate the platform to keep the space safe and clean.

---

## 🚀 Problem Statement

**StackIt – A Minimal Q&A Forum Platform**

StackIt is a simple, user-friendly question-and-answer platform that supports collaborative learning. It allows users to:
- Ask questions using a rich text editor
- Post formatted answers
- Upvote/downvote answers
- Accept the best answer
- Receive notifications for interactions
- Use tags to classify questions
- Be moderated by Admins

---

## 👨‍💻 Team Members

- **Kavya V** – kavyavkvp25@email.com
- **Nishchitha JM** – nishchitha778@gmail.com

```
```
##  🚀 Features

- ✅ Ask questions using a rich text editor  
- 📄 Submit and format answers  
- 👍/👎Upvote/downvote answers  
- ✨Accept the best answer  
- 🔔Toast notifications (success/error)  
- 🎯Tag-based filtering  
- 🔍Search questions by title or description  
- 🌙 Dark mode toggle (built-in support)  
- 👩‍💻 Admin-only controls for moderation  
- 📱Mobile responsive UI
```
```
## 🛠️ Tech Stack

| Layer      | Tools Used               |
|------------|--------------------------|
| Frontend   | React.js, HTML, CSS, Toastify |
| Backend    | Node.js, Express.js      |
| Editor     | ReactQuill (Rich Text)   |
| Versioning | Git & GitHub             |
| Hosting    | Localhost (for demo)     |
| IDE        | VS Code                  |

---

## 📄 How It Works
When a user submits a question, it's stored in memory (mock DB).

Answers are linked to questions by ID.

Admins can mark any answer as "Accepted".

Voting is handled on the frontend for simplicity.

Tags and search allow easy filtering of relevant content.

Toastify alerts are used for smooth user feedback.

---
## 📁 Project Structure
```bash
stackit-hackathon/
│
├── client/                     
│   ├── public/                   
│   │   └── index.html            
│   │
│   ├── src/                      
│   │   ├── App.js                
│   │   ├── index.js              
│   │   ├── AskQuestion.js        
│   │   ├── ViewQuestions.js      
│   │   ├── AnswerSection.js      
│   │   ├── styles.css (optional) 
│   │
│   ├── package.json             
│   └── README.md                 
│
├── server/                       
│   ├── index.js                  
│   ├── package.json         
│
├── .gitignore                    
├── README.md
                
```

## 🚧 Getting Started

### Prerequisites
-[Node.js](https://nodejs.org/dist/v24.4.0/node-v24.4.0-x64.msi) installed  
-code editor - [VS code](https://code.visualstudio.com/)
```
```
### ⚙️Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kavya25v/stackIt.git
   cd stackIt
   ```
2. **Install dependencies:**

   ```bash
   npm install
   npm start
   ```
3. **Run the Backend dependencies (Server):**
    ```bash
    cd server
    npm install          
    node index.js
    ```
4. **Run the frontend dependencies (React app):**
   ```bash
   cd client
   npm install          
   npm start            
   ```
   ```
5. **Open to view it in the browser.**
   ```bash
   [http://localhost:3000/](http://localhost:3000/)
   
   ```


📣 **Next Step:**
- Paste this into your `README.md` file in `client/` or project root.
- Commit and push:

```bash
git add README.md
git commit -m "📝final"
git push



---
